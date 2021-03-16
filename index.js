// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateReadMefile = require('./utils/generateMarkdown')




// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter your email address here:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username here:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter a brief description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter projects installation instructions here:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your projects usage information here:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your projects credits here:',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Enter projects test instructions here:',
        name: 'instructions',
    },
    {
        type: 'list',
        message: 'Verify a license',
        choices: [
            'MIT',
            'GNU GPL v3',
            'Apache 2.0',
            'none',
        ],
        name: 'license',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Your ReadME creation was a success!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateReadMefile(data));
    })
}

// Function call to initialize app
init();
