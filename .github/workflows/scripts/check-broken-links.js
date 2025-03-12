const { chromium } = require("playwright");

const url = process.argv[2]; // Get URL from workflow input
if (!url) {
  console.error("❌ Error: No URL provided. Exiting...");
  process.exit(1);
}

const visitedLinks = new Set();
const brokenLinks = [];
const baseUrl = new URL(url).origin; // Get base URL

async function checkLinks(page, currentUrl) {
  if (visitedLinks.has(currentUrl) || currentUrl.includes("#")) return;
  visitedLinks.add(currentUrl);

  try {
    const response = await page.goto(currentUrl, { timeout: 5000, waitUntil: "domcontentloaded" });

    if (!response || response.status() >= 400) {
      brokenLinks.push({ url: currentUrl, status: response ? response.status() : "No Response" });
    }

    const newLinks = await page.$$eval("a", (anchors) =>
      anchors
        .map((a) => a.href)
        .filter((href) => href.startsWith(window.location.origin) && !href.includes("#"))
    );

    for (const link of newLinks) {
      if (!visitedLinks.has(link)) {
        await checkLinks(page, link);
      }
    }
  } catch {
    brokenLinks.push({ url: currentUrl, status: "Failed to Fetch" });
  }
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await checkLinks(page, url);
  await browser.close();

  // 🔥 Console output only (no file write)
  if (brokenLinks.length) {
    console.log("\n❌ Broken Links Found:");
    brokenLinks.forEach(({ url, status }) => console.log(`🔗 ${url} -> ${status}`));
  } else {
    console.log("\n✅ No broken links found!");
  }
})();
