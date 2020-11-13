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
        await exec(`cd ~`);
        await exec(`cd ${projectLocation}`);
        await exec(`mkdir ${projectName}`);
        console.log(`floder is created`);
        // await ask_user_name();
        // await ask_password();
        rl.close();
        // const browser = await puppeteer.launch({
        //     headless: false,
        //     args: ["--start-maximized"],
        // });
        // const page = await browser.newPage();
        // await page.setViewport({ width: 1366, height: 768 });
        // await page.goto("https://github.com/login", {
        //     waitUntil: "networkidle0",
        //     timeout: 0,
        // });
        // await page.waitForSelector("#login_field");
        // await page.waitForSelector("#password");
        // await page.waitForSelector(".btn.btn-primary.btn-block");
        // await page.type("#login_field", userName, { delay: 250 });
        // await page.type("#password", password, { delay: 250 });
        // await page.click(".btn.btn-primary.btn-block");
    } catch (error) {
        console.log(error.message);
    }
})()