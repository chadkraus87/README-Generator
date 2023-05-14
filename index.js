// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project."
  },
  {
    type: "input",
    name: "contents",
    message: "Provide a table of contents of your project if needed."
  },
  {
    type: "input",
    name: "installation",
    message: "Provide what installation is necessary for your project."
  },
  {
    type: "input",
    name: "usage",
    message: "Provide details about how your project is used."
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license to add to your repo.",
    choices: ["Apache License 2.0", "MIT License", "GNU General Public License v3.0", "None"]
  },
  {
    type: "input",
    name: "credits",
    message: "Provide names of contributing cohorts as well as links to their GitHub profiles. Include links to any third-party libraries, assets, or tutorials used in your project."
  },
  {
    type: "input",
    name: "features",
    message: "Provide additional information about the features of your project."
  },
  {
    type: "input",
    name: "tests",
    message: "Provide examples of any tests written for your application (if applicable)."
  },
  {
    type: "input",
    name: "contact",
    message: "Provide your contact information, including your GitHub username."
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README file created successfully!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const fileName = 'README.md';
      const data = generateMarkdown(answers);
      writeToFile(fileName, data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
