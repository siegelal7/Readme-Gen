// array of questions for user
const questions = [
  "What is the name of your app?",
  "What is a brief description of the app?",
  "What technologies were used to develop the app?",
  "Do I need to do anything to setup to run to app?",
  "How do I run the app?",
  "Any contribution guidelines?",
  "What license would you like to include?",
  "What is your email address?",
  "What is your github username?",
  "Are there any tests to run to test functionality or troubleshoot",
];
var fs = require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./generateMarkdown.js");

// function to write README file
function writeToFile(fileName, data) {
  //   for (i = 0; i < questions.length; i++) {
  //     fs.appendFile(fileName, `${data[i]}\n`, function (error) {
  //       if (error) {
  //         console.log("please enter valid data");
  //       }
  //       console.log("success");
  //     });
  //   }
  fs.writeFile(fileName, data, function (error) {
    if (error) {
      console.log("please enter valid data");
    }
    console.log("success");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "checkbox",
        message: questions[2],
        choices: [
          "HTML",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "JQuery",
          "node.JS",
          "React",
        ],
        name: "tech",
      },
      {
        type: "input",
        message: questions[3],
        name: "setup",
      },
      {
        type: "input",
        message: questions[4],
        name: "run",
      },
      {
        type: "input",
        message: questions[5],
        name: "credit",
      },
      {
        type: "list",
        message: questions[6],
        name: "license",
        choices: [
          "MIT",
          "BSD-3",
          "Apache",
          "Creative Commons",
          "GNU",
          "IBM",
          "ISC",
        ],
      },
      {
        type: "input",
        message: questions[7],
        name: "email",
      },
      {
        type: "input",
        message: questions[8],
        name: "github",
      },
      {
        type: "input",
        message: questions[9],
        name: "tests",
      },
    ])
    .then(function (data) {
      writeToFile("ReadMe.md", generateMarkdown(data));
    });
}

// function call to initialize program
init();

// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "name",
//     },
//     {
//       type: "checkbox",
//       message: "What languages do you know?",
//       name: "languages",
//       choices: ["HTML", "CSS", "JavaScript", "MySQL"],
//     },
//     {
//       type: "list",
//       message: "What is your preferred method of communication?",
//       name: "preferred communication",
//       choices: ["Email", "Phone", "Telekinesis", "words"],
//     },
//   ])
//   .then(function (response) {
//     // console.log(response);
//     fs.writeFile("file.json", JSON.stringify(response), function (error) {
//       if (error) {
//         return console.log(error);
//       }
//       console.log("success");
//     });
//   });
