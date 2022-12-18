const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const teamMaker = require("./src/genrateteam");

const teamArr = []

const employeeType = [
    {
        type: "list",
        message: "Would you like to add another employee?",
        name: "addemployee",
        choices: ["Manager", "Engineer", "Intern", "Done"]
    }
]

const manager = [
  {
    type: "input",
    message: "What is your Name?",
    name: "name",
  },
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
    message: "What is your Office Number?",
    name: "office",
  },
];

const engineer = [
  {
    type: "input",
    message: "What is your Name?",
    name: "name",
  },
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
    name: "github",
  },
];

const intern = [
  {
    type: "input",
    message: "What is your Name?",
    name: "name",
  },
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

async function main(){
   const {addemployee} = await inquirer.prompt(employeeType)
   switch (addemployee){
    case 'Manager':
        promptManager()
        break;
    case 'Engineer':
        promptEngineer()
        break
    case 'Intern':
        promptIntern()
        break;
    default:
        generateTeam()
    }
}

async function promptManager(){
    const data = await inquirer.prompt(manager)
    const member = new Manager(data.name, data.id, data.email, data.officeNumber)
    teamArr.push(member)
    main()
}

async function promptEngineer() {
  const data = await inquirer.prompt(engineer);
  const member = new Engineer(
    data.name,
    data.id,
    data.email,
    data.github
  );
  teamArr.push(member);
  main();
}

async function promptIntern() {
  const data = await inquirer.prompt(intern);
  const member = new Intern(data.name, data.id, data.email, data.school);
  teamArr.push(member);
  main();
}

async function generateTeam() {
    const data = teamMaker(teamArr)
    fs.promises.writeFile('dist/index.html', data)
    console.log('Teams Ready')
}

main()
