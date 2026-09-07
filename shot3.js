const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForSelector("text=CREATIVE");
  await page.screenshot({ path: process.argv[2] + "/hero2.png" });
  await browser.close();
})();
