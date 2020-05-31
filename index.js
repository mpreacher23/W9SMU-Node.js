const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const questions = require("questions");
const genMarkdown = require("genMarkdown");

function promptUser() {
    return inquirer.prompt(questions);
};


assync function 