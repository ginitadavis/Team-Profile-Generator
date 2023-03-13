const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
let teamMemberType;
let basicInfo = [];
let internInfo = '';
let engineerInfo = '';
let teamArray = [];

insertManager();

async function insertManager() {
    await inquirer.prompt([
        {
            type: 'input',
            message: `Please enter the manager's name`,
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'number',
            message: `What is the Manager's ID?`,
            name: 'id',
            validate: idInput => {
                if (!isNaN(parseInt(idInput))) {
                    return true;
                } else {
                    console.log(`\nPlease enter a correct answer, the employee id should be a number!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the email address?',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'officeNumber',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter an office number.");
                    return false;
                }
            }
        }
    ])
        .then(data => {
            manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            teamArray.push(manager);
            addATeamMember();
        });
}

async function addATeamMember() {

    teamMemberType = await inquirer
        .prompt([
            {
                type: 'list',
                message: `Please add a team member`,
                name: 'memberType',
                choices: ["Engineer", "Intern"]
            }
        ]);

    basicInfo = await inquirer.prompt([
        {
            type: 'input',
            message: `Please enter the name`,
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: `What is the ID?`,
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`\nPlease enter an ID number\n`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the email address?',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email address.");
                    return false;
                }
            }
        }
    ])


    if (teamMemberType.memberType === 'Engineer') {
        engineerInfo = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the github username?',
                name: 'github',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the github username");
                        return false;
                    }
                }
            },
            {
                type: 'list',
                message: 'Do you want to add another team member?',
                name: 'addMember',
                choices: ['Yes', 'No']
            }
        ])

        engineer = new Engineer(basicInfo.name, basicInfo.id, basicInfo.email, engineerInfo.github);
        teamArray.push(engineer);

        if (engineerInfo.addMember === 'Yes') {
            addATeamMember();
        } else {
            console.log('Team succesfully created.')
            console.table(teamArray);
        }


    } else if (teamMemberType.memberType === 'Intern') {
        internInfo = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the school name?',
                name: 'email',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter an email address.");
                        return false;
                    }
                }
            },
            {
                type: 'list',
                message: 'Do you want to add another team member?',
                name: 'addMember',
                choices: ['Yes', 'No']
            }
        ])

        intern = new Intern(basicInfo.name, basicInfo.ID, basicInfo.email, internInfo.school);
        teamArray.push(intern);

        if (internInfo.addMember === 'Yes') {
            addATeamMember();
        } else {
            console.log('Team succesfully created.');
            console.table(teamArray);
        }
    }
}

quit = () => { console.log("\nTeam created!"); process.exit(0); }

