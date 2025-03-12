const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const url = "https://carbondesignsystem.com/";
  const brokenLinks = [];

  console.log(`Checking broken links on: ${url}`);
  await page.goto(url, { waitUntil: "networkidle" });

  const links = await page.$$eval("a", (anchors) =>
    anchors.map((a) => a.href).filter((href) => href.startsWith("http"))
  );

  for (const link of links) {
    try {
      const response = await page.goto(link, { waitUntil: "domcontentloaded" });
      if (!response || response.status() >= 400) {
        brokenLinks.push({ url: link, status: response ? response.status() : "No Response" });
        console.log(`❌ Broken: ${link} (Status: ${response ? response.status() : "No Response"})`);
      } else {
        console.log(`✅ Working: ${link}`);
      }
    } catch (error) {
      brokenLinks.push({ url: link, status: "Failed to Fetch" });
      console.log(`❌ Broken: ${link} (Error: ${error.message})`);
    }
  }

  await browser.close();

  // Save report
  const report = brokenLinks.map((l) => `${l.status}: ${l.url}`).join("\n");
  fs.writeFileSync("broken-links-report.txt", report || "No broken links found.");

  console.log("\n🔎 Broken link check completed.");
})();
