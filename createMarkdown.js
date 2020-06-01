// createMarkdown Function
function createMarkdown(answers, data) {
    return `  

    ##Tittle
    ${answers.tittle}    

    // Badge image
    <img src="${answers.banner}" height="100%">
    ${answers.banner}
    https://img.shields.io/github/license/mpreacher23/W9SMU-Node.js?style=social

    ## **Description
    ${answers.description}

    ## **User Story
    ${answers.story}

    ## Contents

    **[Installation](#Installation)**<br>
    **[Usage](#Usage)**<br>
    **[License](#License)**</br>
    **[Contributors](#Contributors)**<br>
    **[Tests](#Tests)**<br>
    **[GitHub Email](#Email)**<br>
    **[GitHub Account URL](#Account)**<br>


    ## **Installation
    ${answers.install}

    ## **Usage
    ${answers.usage}

     ## **License
    ${answers.license}

    ## **Contributors
    ${answers.contributors}

    ## **Tests
    ${answers.tests}

    ## **GitHub Email
    ${answers.email}

    ## **GitHub Account URL
    ${answers.account}

    <img src="${data.avatar_url}" class="profile" align="left" height="120"/>

`;
}

module.exports = createMarkdown;