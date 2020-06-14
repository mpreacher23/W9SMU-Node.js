// createMarkdown Function
function createMarkdown(answers, data) {
    return `  

    # Tittle<br>
    ${answers.tittle}    
  
    ## Badge Image<br>
    <img src="${answers.badge}">
  
    ## Description<br>
    ${answers.description}
    ## User Story<br>
    ${answers.story}
  
  

    ## Contents <br>
    **[Installation](#Installation)**<br>
    **[Usage](#Usage)**<br>
    **[License](#License)**</br>
    **[Contributors](#Contributors)**<br>
    **[Tests](#Tests)**<br>
    **[Contact](#Contact)**<br>


    ## **Installation**<br>
    ${answers.install}

    ## **Usage**<br>
    ${answers.usage}

     ## **License**<br>
    ${answers.license}

    ## **Contributors**<br>
    ${answers.contributors}

    ## **Tests**<br>
    ${answers.tests}


    ## **Contact**<br>
    ${answers.email}<br>

    <img src="${data.avatar_url}" class="profile" align="left" height="120"/>

`;
}

module.exports = createMarkdown;