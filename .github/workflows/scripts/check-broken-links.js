const { chromium } = require("playwright");
const fs = require("fs");

const url = process.argv[2]; // Get URL from workflow input

if (!url) {
  console.error("❌ Error: No URL provided. Exiting...");
  process.exit(1);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const brokenLinks = [];

  console.log(`🔎 Checking broken links on: ${url}`);
  await page.goto(url, { waitUntil: "networkidle" });

  const links = await page.$$eval("a", (anchors) =>
    anchors.map((a) => a.href).filter((href) => href.startsWith("http"))
  );

  for (const link of links) {
    try {
      const response = await page.evaluate(async (url) => {
        try {
          const res = await fetch(url, { method: "HEAD" });
          return { status: res.status };
        } catch {
          return { status: "Failed to Fetch" };
        }
      }, link);

      if (!response || response.status >= 400) {
        brokenLinks.push({ url: link, status: response ? response.status : "No Response" });
        console.log(`❌ Broken: ${link} (Status: ${response ? response.status : "No Response"})`);
      } else {
        console.log(`✅ Working: ${link}`);
      }
    } catch (error) {
      brokenLinks.push({ url: link, status: "Failed to Fetch" });
      console.log(`❌ Broken: ${link} (Error: ${error.message})`);
    }
  }

  await browser.close();

  const report = brokenLinks.length
    ? brokenLinks.map((l) => `${l.status}: ${l.url}`).join("\n")
    : "✅ No broken links found!";
  
  fs.writeFileSync("broken-links-report.txt", report);

  console.log("\n🔎 Broken link check completed.");
})();
