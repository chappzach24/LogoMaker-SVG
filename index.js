const inquirer = require("inquirer");
const fs = require("fs");

//questions that will be asked to make the logo
const questions = [
  {
    type: "input",
    message: "Enter three characters you would like for the LOGO",
    name: "characters",
    
  },

  {
    type: "input",
    message: "What color would you like the text to be ",
    name: "textColor",
  },

  {
    type: "list",
    choices: ['circle', 'triangle', 'square'],
    message: "Select the shape you would like",
    name: "shape",
  },

  {
    type: "input",
    message: "What color would you like the shape to be ",
    name: "shapeColor",
  },
];



function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
   
  });
}

init();
