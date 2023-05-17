// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return `![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)`
  } else if (license === "Apache License 2.0") {
    return `![Apache License 2.0](https://img.shields.io/badge/License-Apache%20License%202.0-brightgreen)`
  } else if (license === "GNU General Public License v3.0") {
    return `![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20General%20Public%20License%203.0-brightgreen)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  if (licenseLink) {
    return `## License

This project is licensed under [${license}](${licenseLink}).`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under ${data.license}.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions or comments about this project, please contact me at ${data.email}. You can also find more information and other projects on my GitHub https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
