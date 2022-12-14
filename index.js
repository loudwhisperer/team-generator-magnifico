const fs = require('fs')
const inquirer = require('inquirer')

const employeeType = [
    {
        type: "list",
        message: "Would you like to add another employee?",
        name: "addemployee",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

const manager = [
    {
        type: "input",
        message: "What is your ID Number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your Work Email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your Office Number?",
        name: "office"
    }
]

const engineer = [
  {
    type: "input",
    message: "What is your ID Number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Work Email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub Username?",
    name: "github"
  }
];

const intern = [
  {
    type: "input",
    message: "What is your ID Number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Work Email?",
    name: "email",
  },
  {
    type: "input",
    message: "What School are you attending right now?",
    name: "school",
  },
];