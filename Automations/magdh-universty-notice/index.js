const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.magadhuniversity.ac.in/notice-board", {
      waitUntil: "networkidle0",
      timeout: 0,
    });
    const notice = await page.$eval(".notice > li > a", (e) => e.innerText);
    console.log(notice);
    await page.screenshot({ path: "example.png" });
    await browser.close();
  } catch (error) {
    console.log(error.message);
  }
})();
