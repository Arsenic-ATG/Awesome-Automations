const fs = require("fs");
const readline = require("readline");
const {exec} = require("child_process");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let dirName = "";
let fileName = "";

const ask_dirName = () => {
	return new Promise((resolve, reject) => {
		rl.question("In which folder your file is ? \n ", (answer) => {
			dirName = answer;
			console.log(`your file is in ${dirName} folder\n`);
			resolve();
		});
	});
};

const ask_filename = () => {
	return new Promise((resolve, reject) => {
		rl.question("What is your file name ? \n ", (answer) => {
			fileName = answer;
			console.log(`your fileName name is ${fileName}\n`);
			resolve();
		});
	});
};

(async () => {
	try {
        await ask_dirName();
		await ask_filename();
		rl.close();
        exec(`cd ${dirName}`);
		fs.readFile(fileName, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				const fileData = data.toString();
				const lines = fileData.split("\n");
				const line = lines.map((lin) => lin.split(" "));
				const newLine = [];
				const restOfLine = [];
				line.map((lin) => {
					if (lin[0] === "import" && lin[lin.length - 1][1] !== ".") {
						newLine.push(lin.join(" "));
						console.log(lin);
                    }else if(lin[0] === "import" && lin[lin.length - 1][1] === "."){
						restOfLine.push(lin.join(" "));
					} else if (lin[0] !== "import") {
						restOfLine.push(lin.join(" "));
					}
				});
                console.log(restOfLine);
				fs.writeFile(
					fileName,
					newLine.join("\n") + "\n" + restOfLine.join("\n"),
					{ encoding: "utf-8" },
					() => {
						console.log("file has been created");
					}
				);
			}
		});
	} catch (err) {
		console.log(err);
	}
})();
