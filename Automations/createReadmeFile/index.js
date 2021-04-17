const readline = require("readline");
const {exec} = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let projectName = "";
let descriptionOfProject = "";
let programmingLanguage = "";
let location = "";
let isAdditionalPackages = false;
let numberOfThingsNeededToRun = 0;
let thingsNeedToRun = [];
let numberOfAdditionalPackages = 0;
let additionalPackages = [];
let nameOfCreator ="";
let linkOfProfileOfCreator="";
let numberOfSteps = 0;
let stepsToRun = [];

const ask_project_name = () => {
  return new Promise((resolve, reject) => {
    rl.question("what is name of your project ?\n", (answer) => {
      projectName = answer;
      console.log(`\tName of your project is ${projectName}.\n`);
      resolve();
    });
  });
};
const ask_description_of_project = () => {
  return new Promise((resolve, reject) => {
    rl.question("write description for your project?\n", (answer) => {
      descriptionOfProject = answer;
      console.log(`\tDescription: ${descriptionOfProject}.\n`);
      resolve();
    });
  });
};
const ask_location = () => {
  return new Promise((resolve, reject) => {
    rl.question("Where you want to create readme file ?\n", (answer) => {
      location = answer;
      console.log(`\tyou want to create readme file in ${location} Directory.\n`);
      resolve();
    });
  });
};

const ask_programming_language = () => {
  return new Promise((resolve, reject) => {
    rl.question("What is your programming language ?\n", (answer) => {
      programmingLanguage = answer;
      console.log(`\tyour programming language is "${programmingLanguage}"\n`);
      resolve();
    });
  });
};

const ask_additonal_packages = () => {
  return new Promise((resolve, reject) => {
    rl.question("Do you project need additional packages ? \n(write only 'yes' or 'no' in lowercase otherwise this program will fail.)\n", (answer) => {
      isAdditionalPackages = answer === "yes" ? true : answer === "no" ? false : false
      console.log(`${isAdditionalPackages === false ? "\tGreat, your project does not need additional packages\n" : "\tSo, Your project need additional packages."}\n`);
      resolve();
    });
  });
};

const ask_additonal_package = () => {
  return new Promise((resolve, reject) => {
    rl.question("what is name of additional package? \n", (answer) => {
      additionalPackages.push(answer);
      console.log(`\tName of additional package is ${answer}\n`)
      resolve();
    });
  });
};

const ask_number_of_additional_packages = () => {
  return new Promise((resolve, reject) => {
    rl.question("How many additional packages needed? \n", (answer) => {
      numberOfAdditionalPackages = answer;
      console.log(`\tThere are ${numberOfAdditionalPackages} additional packages\n`);
      resolve();
    });
  });
};

const ask_number_of_things = () => {
  return new Promise((resolve, reject) => {
    rl.question("How many things needed to run? \n", (answer) => {
      numberOfThingsNeededToRun = answer;
      console.log(`\tThere are ${numberOfThingsNeededToRun} things need to run\n`);
      resolve();
    });
  });
};

const ask_things_needed_to_run = () => {
  return new Promise((resolve, reject) => {
    rl.question("what is name of thing need to run? \n", (answer) => {
      thingsNeedToRun.push(answer)
      console.log(`\tName of thing is ${answer}\n`)
      resolve();
    });
  });
};
const ask_name_of_creator = () => {
  return new Promise((resolve, reject) => {
    rl.question("what is name of creator?\n", (answer) => {
      nameOfCreator = answer;
      console.log(`\tName of creator is ${nameOfCreator}.\n`);
      resolve();
    });
  });
};
const ask_link_to_profile_of_creator = () => {
  return new Promise((resolve, reject) => {
    rl.question("write link profile of creator?\n", (answer) => {
      linkOfProfileOfCreator = answer;
      console.log(`\tLink to profile of creator is ${linkOfProfileOfCreator}.\n`);
      resolve();
    });
  });
};
const ask_number_of_steps = () => {
  return new Promise((resolve, reject) => {
    rl.question("Number of steps to run project?\n", (answer) => {
      numberOfSteps = answer;
      console.log(`\tThere are ${numberOfSteps} steps to run project.\n`);
      resolve();
    });
  });
};
const ask_step = () => {
  return new Promise((resolve, reject) => {
    rl.question("what is step to run the project? \n", (answer) => {
      stepsToRun.push(answer)
      console.log(`\tStep: ${answer}.\n`);
      resolve();
    });
  });
};

(async function () {
  try {
    console.log("This automation only work for javascript and python.")
    await ask_project_name();
    await ask_description_of_project();
    await ask_location();
    await ask_programming_language();
    await ask_number_of_things();
    for (let i = 0; i < numberOfThingsNeededToRun; i++) {
      await ask_things_needed_to_run();
    }
    await ask_additonal_packages();
    if (isAdditionalPackages === true) {
      await ask_number_of_additional_packages();
      for (let i = 0; i < numberOfAdditionalPackages; i++) {
        await ask_additonal_package();
      }
    }
    if(programmingLanguage === "py" || programmingLanguage === "python" || programmingLanguage === "Python"){
      await ask_number_of_steps();
      for(let i =0; i < numberOfSteps; i++){
        await ask_step();
      }
    }
    await ask_name_of_creator();
    await ask_link_to_profile_of_creator();
    rl.close();
    console.log("creating your file....");

 exec(`cd ${location} && echo "# ${projectName}

${descriptionOfProject}

### Things you will need to get it running  📈 :-

${thingsNeedToRun.map((thing) => `- ${thing}
`).join("")}

### Additional packages 📝

${additionalPackages.map((additional) => `- ${additional}
`).join("")}
${programmingLanguage === "javascript" || programmingLanguage === "js" || programmingLanguage === "Javascript" ?
`#### But how do I install additonal packages? 🤨

- Make sure you have **nodejs** installed on your system. If you haven't yet go to [nodejs.org](https://nodejs.org "go to nodejs.org")

- If you want to install dependecies with **npm**
    - check for **yarn.lock**. If it is in root of directory. then DELETE **yarn.lock**
    - Now, run "npm install". This will install all the dependencies.

- If you want to install dependencies **yarn**.
    - check for **package-lock.json**. If it is in root of directory. then DELETE **package-lock.json**
    - Now, run "yarn install" or "yarn". This will install all the dependencies.

### How to use this program ? 💻

-  If you want to run with **npm**
    - Run "npm start"
- If you want to run with **yarn**
    - Run "yarn start"

---

### Made By :-
[${nameOfCreator}](${linkOfProfileOfCreator} "Go to profile of creator")
  ` : programmingLanguage === "python" || programmingLanguage === "py" || programmingLanguage || "Python" ? `
 #### But how do I install additonal packages? 🤨
- Make sure you have python package manager (**pip**) installed on your system
- Go to command line and type """pip install <library name>""" { _pip3_ on mac }
- For detailed information see [python's official tutorial on how to install packages](https://packaging.python.org/tutorials/installing-packages/)

### How to use this program ? 💻

${stepsToRun.map((st) => `- ${st}
`).join("")}

### Made By :-
[${nameOfCreator}](${linkOfProfileOfCreator} "Go to profile of creator")
  ` : ""}
" > README.md`);
    console.log("your file is created.")
  } catch (error) {
    console.log(error.message);
  }
})();
