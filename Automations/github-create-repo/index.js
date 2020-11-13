const puppeteer = require("puppeteer");
const readline = require("readline");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let projectName = "";
let projectLocation =""
let userName = "";
let password = "";

const ask_project_name = () => {
    return new Promise((resolve, reject) => {
        rl.question("What is your project name ? \n ", (answer) => {
            projectName = answer;
            console.log(`your project name is ${projectName}\n`);
            resolve();
        });
    });
};

const ask_project_location = () => {
    return new Promise((resolve, reject) => {
        rl.question("In which directory you want to create your project (Please enter full absolute path) ? \n ", (answer) => {
            projectLocation = answer;
            console.log(`you want to create your project in ${projectLocation}\n`);
            resolve();
        });
    });
};

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
        await ask_project_location();
        await ask_project_name();
        await exec(`cd ~/${projectLocation} && mkdir ${projectName}`);
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
        await page.waitForNavigation({timeout:0});
        await page.waitForSelector(".btn.btn-sm.btn-primary.text-white");
        await page.click(".btn.btn-sm.btn-primary.text-white");
        await page.waitForSelector(".form-control.js-repo-name.js-repo-name-auto-check short");
        await page.waitForSelector(".btn.btn-primary.first-in-line");
        await page.type(".form-control.js-repo-name.js-repo-name-auto-check short", projectName);
        await page.click(".btn.btn-primary.first-in-line");
        await page.waitForNavigation({timeout:0});
        await page.click(".details-overlay.details-reset.js-feature-preview-indicator-container > summary > img");
        await page.click(".dropdown-item.dropdown-signout")
        await page.waitForNavigation({timeout:0});
        await exec(`cd ~/${projectLocation}${projectName}`);
        await exec(`echo "# ${projectName}" >> README.md`)
        await exec(`git init`)
        await exec(`git add README.md`)
        await exec(`git commit -m "initial commit"`)
        await exec(`git remote add origin https://github.com/${userName}/${projectName}.git`)
        await exec(`git push -u origin`)
        await exec("code .")
        await page.screenshot({ path: "example.png" });
        await browser.close();
    } catch (error) {
        console.log(error.message);
    }
})()