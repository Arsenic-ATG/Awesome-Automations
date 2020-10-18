const puppeteer = require("puppeteer");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userName = "";
let password = "";

const ask_user_name = () => {
  return new Promise((resolve, reject) => {
    rl.question("What is your user name ? \n ", (answer) => {
      userName = answer;
      console.log(`your user name is ${userName}\n`);
      resolve();
    });
  });
};

const ask_password = () => {
  return new Promise((resolve, reject) => {
    rl.question("What is your password ? \n ", (answer) => {
      password = answer;
      console.log(`your password is ${password}\n`);
      resolve();
    });
  });
};

(async () => {
  try {
    await ask_user_name();
    await ask_password();
    rl.close();
    const browser = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto("https://github.com/login", {
      waitUntil: "networkidle0",
      timeout: 0,
    });
    await page.waitForSelector("#login_field");
    await page.waitForSelector("#password");
    await page.waitForSelector(".btn.btn-primary.btn-block");
    await page.type("#login_field", userName, { delay: 250 });
    await page.type("#password", password, { delay: 250 });
    await page.click(".btn.btn-primary.btn-block");
  } catch (error) {
    console.log(error.message);
  }
})();
