// array of questions for user
const questions = [
  "What is the name of your app?",
  "What is the goal of the app?",
  "What technologies were used to develop the app?",
  "How do I run the app?",
];
var fs = require("fs");
var inquirer = require("inquirer");

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
  fs.appendFile(fileName, data, function (error) {
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
        name: "name",
      },
      {
        type: "input",
        message: questions[1],
        name: "goal",
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
    ])
    .then(function (data) {
      //   console.log(data);

      writeToFile("readme.md", JSON.stringify(data));
      //   fs.appendFile("readme.md", JSON.stringify(data), function (error) {
      //     if (error) {
      //       console.log("please enter valid data");
      //     }
      //     console.log("success");
      //   });
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
