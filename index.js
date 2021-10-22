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
    // {
    //     type: "input",
    //     message: "What are the installation instructions of your application?",
    //     name: "install",
    // },
    // {
    //     type: "input",
    //     message: "What is the usage information for your project?",
    //     name: "usage",
    // },
    // {
    //     type: "input",
    //     message: "What are the contribution guidelines for your project?",
    //     name: "contrib",
    // },
    // {
    //     type: "input",
    //     message: "What are the test instructions for your project?",
    //     name: "test",
    // }
]

inq
    .prompt(prompts)

    .then(data => {
        const {title, desc, install, usage, contrib, test} = data
        console.log(data)
        console.log(title,desc, install, usage, contrib, test)

        // sections of the README entitled Description, Installation, Usage, Contributing, and Tests

        const README = 
`# ${title}

## Table of Contents
* [Description](https://github.com/GarrettLB/README-Generator#description)
* [Installation](https://github.com/GarrettLB/README-Generator#installation)

## Description
${desc}

## Installation
${install}

## Usage
${usage}

## Contributiing
${contrib}

## Tests
${test}`

        fs.writeFile('testREADME.md', README, (err) =>
        err ? console.error(err) : console.log('No errors'))
    })