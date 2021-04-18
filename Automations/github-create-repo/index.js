const puppeteer = require("puppeteer");
const readline = require("readline");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let projectName = "";
let projectLocation = ""
let editor = "";
let userName = "";
let password = ""

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


const ask_editor = () => {
    return new Promise((resolve, reject) => {
        rl.question("In which editor you want to open your project ? \n ", (answer) => {
            editor = answer;
            console.log(`you want to open your project in ${editor}\n`);
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
        console.log("creating project...");
        await exec(`cd ~/${projectLocation} && mkdir ${projectName}`);
        await ask_editor();
        await ask_user_name();
        await ask_password();
        rl.close();
        console.log("connecting to github...");
        const browser = await puppeteer.launch({
            headless: true,
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
        await page.waitForSelector(".mb-3.Details.js-repos-container > #repos-container > h2 > a");
        await page.click(".mb-3.Details.js-repos-container > #repos-container > h2 > a");
        console.log("creating repo");
        await page.waitForSelector("#repository_name")
        await page.type("#repository_name", projectName);
        await page.waitForTimeout(15000)
        await page.click(".btn.btn-primary.first-in-line");
        await page.waitForNavigation({ timeout: 0 });
        console.log("sign out. disconnecting github..");
        await page.click(".details-overlay.details-reset.js-feature-preview-indicator-container > summary > img");
        await page.waitForSelector(".dropdown-item.dropdown-signout")
        await page.click(".dropdown-item.dropdown-signout")
        await page.waitForNavigation({ timeout: 0 });
        await exec(`cd ~/${projectLocation}${projectName} && echo "# ${projectName}" >> README.md && git init && git add README.md && git commit -m "initial commit" && git branch -M main && git remote add origin https://github.com/${userName}/${projectName}.git && git push -u origin main`);
        if (editor === "atom" || editor === "code" || editor === "vscode") {
            console.log(`opening your project in ${editor}`);
            await exec(`cd ~/${projectLocation}${projectName} && ${editor} .`);
        } else {
            console.log("Not opening your project in editor");
        }
        console.log("done");
        await page.screenshot({ path: "example.png" });
        await browser.close();
    } catch (error) {
        console.log(error.message);
    }
})()
