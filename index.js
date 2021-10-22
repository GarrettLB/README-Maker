const fs = require('fs');
const inq = require('inquirer')

const prompts = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is a brief description of your project?",
        name: "desc",
    },
    {
        type: "list",
        message: 'Which license would you like to use on your project?',
        name: 'licenses',
        choices: ['MIT', 'GNU GPLv3', 'Mozilla Public License 2.0'],
    },
    {
        type: "input",
        message: "What are the installation instructions of your application?",
        name: "install",
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contrib",
    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }
]

inq
    .prompt(prompts)

    .then(data => {
        const {title, desc, licenses, install, usage, contrib, test, github, email} = data
        console.log(data)
        console.log(title, desc, licenses, install, usage, contrib, test, github, email)

        if (licenses === "MIT") {
            var license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            
        } else if (licenses === "GNU GPLv3") {
            var license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        } else if (licenses === "Mozilla Public License 2.0") {
            var license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        }

        const README = 
`# ${title}

## Description
${desc}

## Table of Contents
* [License](https://github.com/GarrettLB/README-Generator/blob/main/testREADME.md#license)
* [Installation](https://github.com/GarrettLB/README-Generator/blob/main/testREADME.md#installation)
* [Usage](https://github.com/GarrettLB/README-Generator/blob/main/testREADME.md#usage)
* [Contributing](https://github.com/GarrettLB/README-Generator/blob/main/testREADME.md#contributing)
* [Tests](https://github.com/GarrettLB/README-Generator/blob/main/testREADME.md#tests)
* [Questions](https://github.com/GarrettLB/README-Generator/blob/main/testREADME.md#questions)

## License
${license}

## Installation
${install}

## Usage
${usage}

## Contributing
${contrib}

## Tests
${test}

## Questions
### Got questions about my project?
* Email me at ${email}
* [Or Visit my GitHub](https://github.com/${github})`

        fs.writeFile('testREADME.md', README, (err) =>
        err ? console.error(err) : console.log('No errors'))
    })