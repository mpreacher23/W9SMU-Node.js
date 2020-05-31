// Dependencies 
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

// Questions asked to user
const userQuestions = require("userQuestions");

// Need to seperate markdown code and make it a template file 
const createMarkdown = require("createMarkdown");

// createMarkdown Function
function createMarkdown(answers, data) {
    return `  
    ${answers.tittle}
    ${answers.banner}

    ## Description\n
    ${answers.description}

    ## Installation
    ${answers.install}
    
    ## License
    ${answers.license}

    ## Usage
    ${answers.usage}

    ## Contributors
    ${answers.contributors}

    ## Tests
    ${answers.tests}

    ## Contact
    ${answers.email}

    ## UserName
    ${answers.username}
`;
}


// Prompts the user to enter the details of the project
function promptUser() {
    return inquirer.prompt(userQuestions);
};

//
const createReadmeAsync = util.promisfy(fs.createReadme);

async function init() {

    try {
        const answers = await promptUser();
        let github = await axios.get(`https://api.github.com/users/${answers.username}`)
        const md = createMarkdown(answers, github.data);
        await createReadmeAsync('README.md", md);
        console.log("You just created your projects README.md file!");
    }
};
init();


// userQuestions Prompts (Tittle, Banner Img., Description, Installation, Usage, License, Contributors, Tests, GitHub Email, GitHub UserName )
const userQuestions = [
    {
        message: "what is the Tittle of your project? ",
        name: "tittle"
    },
    {
        message: "Would you like a banner? (Add your banner link here):",
        name: "banner"
    },
    {
        message: "What is your projects description?",
        name: "description"
    },
    {
        message: "What command should be used to Install and Run your App?",
        name: "install"
    },
    {
        message: "Define what usage this repo can be used for",
        name: "usage"
    },
    {
        message: " What license would you like to use?",
        name: "license",
        type: "list",
        choices: ["mit", "apache-2.0", "gpl", "other", "none"]
    },
    {
        message: "Who contributed to your project?",
        name: "contributors"
    },
    {
        message: "Did you run any Tests?",
        name: "tests"
    },
    {
        message: "What is your GitHub Email?",
        name: "email"
    },
    {
        message: "What is your GitHub username?",
        name: "username"
    }
];
// module.exports = questionsAsked;


// Gen. Markdown Function
