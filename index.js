// Dependencies 
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

// Questions asked to user
const userQuestions = require("./userQuestions");

// Need to seperate markdown code and make it a template file 
const createMarkdown = require("./createMarkdown");

// Prompts the user to enter the details of the project
function promptUser() {
    return inquirer.prompt(userQuestions);
};

// Write file node.js Util, Async
const writeFileAsync = util.promisify(fs.writeFile);

async function init() {

    try {
        const answers = await promptUser();
        let github = await axios.get(`https://api.github.com/users/${answers.username}`)
        const md = createMarkdown(answers, github.data);
        await writeFileAsync("README.md", md);
        console.log("Check out your new README.md file!");

    } 
};

init();

// async function init() {

//     try {
//         const answers = await promptUser();
//         let github = await axios.get(`https://api.github.com/users/${answers.username}`)
//         const md = createMarkdown(answers, github.data);
//         await writeFileAsync('README.md", md);
//         console.log("You just created your projects README.md file!");
//     }
// };
// init();






