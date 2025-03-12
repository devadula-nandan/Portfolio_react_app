const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const url = process.argv[2]; // Get URL from workflow input
if (!url) {
  console.error("❌ Error: No URL provided. Exiting...");
  process.exit(1);
}

const visitedLinks = new Set();
const brokenLinks = [];
const baseUrl = new URL(url).origin; // Get base URL
const results = []; // Store log messages

async function checkLinks(page, currentUrl, isExternal = false) {
  if (visitedLinks.has(currentUrl) || currentUrl.includes("#")) return;
  visitedLinks.add(currentUrl);

  try {
    const response = await page.goto(currentUrl, {
      timeout: 5000,
      waitUntil: "networkidle",
    });

    const status = response ? response.status() : "No Response";
    if (!response || status >= 400) {
      brokenLinks.push({ url: currentUrl, status });
      results.push(`❌ [${status}] ${currentUrl}`);
    } else {
      results.push(`✅ [${status}] ${currentUrl}`);
    }

    if (isExternal) return; // Only check external links once, no recursion

    // Extract all valid links from the page
    const newLinks = await page.$$eval("a", (anchors) =>
      anchors
        .map((a) => a.href.trim())
        .filter(
          (href) =>
            href && !href.includes("#") && !href.startsWith("javascript")
        )
    );

    for (const link of newLinks) {
      if (!visitedLinks.has(link)) {
        if (link.startsWith(baseUrl)) {
          await checkLinks(page, link, false); // Recursively check internal links
        } else {
          await checkLinks(page, link, true); // Only check external links once
        }
      }
    }
  } catch (error) {
    brokenLinks.push({ url: currentUrl, status: "Failed to Fetch" });
    results.push(`❌ [Failed to Fetch] ${currentUrl}`);
  }
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log(`🔎 Checking broken links on: ${url}`);
  await checkLinks(page, url);
  await browser.close();

  console.log("\n" + results.join("\n")); // Print all results in one log

  const reportPath = path.resolve("broken-links-report.txt");
  const report = brokenLinks.length
    ? brokenLinks.map((l) => `${l.status}: ${l.url}`).join("\n")
    : "✅ No broken links found!";

  fs.writeFileSync(reportPath, report);
  console.log("\n✅ Broken link check completed.");
})();
