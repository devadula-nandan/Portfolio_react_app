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

async function checkLinks(page, currentUrl) {
  if (visitedLinks.has(currentUrl)) return;
  visitedLinks.add(currentUrl);

  console.log(`🔍 Checking: ${currentUrl}`);

  try {
    const response = await page.goto(currentUrl, { timeout: 5000, waitUntil: "domcontentloaded" });

    if (!response || response.status() >= 400) {
      console.log(`❌ Broken: ${currentUrl} (Status: ${response ? response.status() : "No Response"})`);
      brokenLinks.push({ url: currentUrl, status: response ? response.status() : "No Response" });
    } else {
      console.log(`✅ Working: ${currentUrl}`);
    }

    const newLinks = await page.$$eval("a", (anchors) =>
      anchors.map((a) => a.href).filter((href) => href.startsWith(window.location.origin))
    );

    for (const link of newLinks) {
      if (!visitedLinks.has(link)) {
        await checkLinks(page, link);
      }
    }
  } catch (error) {
    console.log(`❌ Error: ${currentUrl} (Error: ${error.message})`);
    brokenLinks.push({ url: currentUrl, status: "Failed to Fetch" });
  }
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log(`🔎 Starting broken link check for: ${url}`);
  await checkLinks(page, url);
  await browser.close();

  const reportPath = path.resolve("broken-links-report.txt");
  const report = brokenLinks.length
    ? brokenLinks.map((l) => `${l.status}: ${l.url}`).join("\n")
    : "✅ No broken links found!";
  
  fs.writeFileSync(reportPath, report);
  console.log("\n✅ Broken link check completed.");
})();
