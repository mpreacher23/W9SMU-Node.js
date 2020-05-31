// createMarkdown Function
function createMarkdown(answers, data) {
    return `  
    ${answers.tittle}    

    <img src="${answers.banner}" height="100%">
    ${answers.banner}
    https://img.shields.io/github/license/mpreacher23/W9SMU-Node.js?style=social

    ## **Description\n
    ${answers.description}

    ## Contents<br>
    **[Installation](#Installation)**<br>
    **[Usage](#Usage)**<br>
    **[License](#License)**</br>
    **[Contributors](#Contributors)**<br>
    **[Tests](#Tests)**<br>
    **[Contact](#Contact)**<br>

    ## **Installation
    ${answers.install}
    
    ## **License
    ${answers.license}

    ## **Usage
    ${answers.usage}

    ## **Contributors
    ${answers.contributors}

    ## **Tests
    ${answers.tests}

    ## **Contact
    ${answers.email}

    ## **UserName
    ${answers.username}

    <img src="${data.avatar_url}" class="profile" align="left" height="120"/>

`;
}

module.exports = createMarkdown;