// userQuestions Prompts (Tittle, Badge Img., Description, User Story, Installation, Usage, License, Contributors, Tests, GitHub Email, GitHub UserName )
const userQuestions = [{
        message: "What is the Tittle of your project? ",
        name: "tittle"
    },
    {
        message: "Would you like to add a profile badge? (Add your profile badge link here):",
        name: "badge"
    },
    {
        message: "What is your projects description?",
        name: "description"
    },
    {
        message: "What is your User Story?",
        name: "story"
    },
    {
        message: "What command should be used to Install and Run your App?",
        name: "install"
    },
    {
        message: "What is the usage for this app? ",
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
        message: "What is your GitHub email?",
        name: "email"
    },
    {
        message: "Enter your GitHub username",
        name: "username"
    }
];
module.exports = userQuestions;