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
    type: 'confirm',
    name: 'hasContents',
    message: 'Do you want to include a table of contents in your README?',
    default: false,
  },
  {
    type: 'input',
    name: 'contents',
    message: 'Provide a table of contents for your project (optional):',
    when: (answers) => answers.hasContents,
    default: 'Installation, Usage, License, Contributing, Tests, Questions',
    validate: function (input) {
      return input.trim().length > 0 || 'Please enter at least one chapter for the table of contents.';
    }
  },    
  {
    type: "input",
    name: "installation",
    message: "Provide the necessary installation details for your project."
  },
  {
    type: "input",
    name: "usage",
    message: "Provide information about how your project is used."
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license to add to your repository.",
    choices: ["Apache License 2.0", "MIT License", "GNU General Public License v3.0", "None"]
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide names of contributing cohorts as well as links to their GitHub profiles. Include links to any third-party libraries, assets, or tutorials used in your project."
  },
  {
    type: "input",
    name: "tests",
    message: "Provide examples of any tests written for your application (optional)."
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (required)',
    validate: function (input) {
      return input !== '' ? true : 'Please enter your email address.';
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (required)',
    validate: function (input) {
      return input !== '' ? true : 'Please enter your GitHub username.';
    }
  },
  {
    type: 'input',
    name: 'questions',
    message: (data) => {
      let message = 'If users have questions or comments about your project,';
      
      if (data.email) {
        message += ` they will contact you at ${data.email}.`;
      }
      
      if (data.github) {
        const githubUrl = `https://github.com/${data.github}`;
        const githubLink = `[GitHub profile](${githubUrl})`;
        message += ` Users can find more information and other projects on your ${githubLink}. Press Enter.`;
      }
      
      return message;
    }
  }  
];

// Function to display welcome message
function displayWelcomeMessage() {
  console.log('Welcome to a README Generator!');
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README file created successfully! Thank you for using this generator. If you encounter any issues or bugs while using this tool, please report them to the project GitHub repository so that they can be addressed. Additionally, contributions to this project are always welcome. If you would like to contribute, please review the project contribution guidelines and submit a pull request. Thank you for your support!');
  });
}

// TODO: Create a function to initialize app
function init() {
  displayWelcomeMessage();

  inquirer.prompt(questions)
    .then((answers) => {
      const fileName = './lib/README.md';
      const data = generateMarkdown(answers);
      writeToFile(fileName, data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
