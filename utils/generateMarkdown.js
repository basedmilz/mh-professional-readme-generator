// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3_Badge-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  };
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT_Badge-red.svg)](https://opensource.org/licenses/MIT)'
  };
  if (license === 'Apache') {
    return '[![License: Apache](https://img.shields.io/badge/License-Apache_Badge-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } 
  else {
    return '';
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Description 
  ${data.description}

  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.credits}

##Test Instructions
${data.instructions}

## Github
${data.github}

## Email
${data.email}
`;

}

module.exports = generateMarkdown;
