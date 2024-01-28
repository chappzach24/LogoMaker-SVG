const inquirer = require("inquirer");
const fs = require("fs");
const setShape = require('./lib/setShape.js')
const fileName = "logo.svg"


//questions that will be asked to make the logo
const questions = [
  {
    type: "input",
    message: "Enter three characters you would like for the LOGO:",
    name: "text",
    validate: function (input) {
      // Check if the input has exactly three letters
      return /^[a-zA-Z]{3}$/.test(input)
        ? true
        : "Please enter exactly three letters.";
    },
  },

  {
    type: "input",
    message: "What color would you like the text to be: ",
    name: "textColor",
  },

  {
    type: "list",
    choices: ["Circle", "Triangle", "Square"],
    message: "Select the shape you would like: ",
    name: "shape",
  },

  {
    type: "input",
    message: "What color would you like the shape to be: ",
    name: "shapeColor",
  },
];

function createLogo(response, fileName) {
  const svg = setShape(response);
  fs.writeFile(fileName, svg, () => console.log("Generated " + fileName));
}

// initialize, ask questions then createLogo using responses, catch any errors
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      createLogo(response, fileName);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
