const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
let teamMemberType;
let basicInfo = [];
let internInfo = '';
let engineerInfo = '';

insertManager();

async function insertManager() {
    await inquirer.prompt([
        {
            type: 'input',
            message: `Please enter the Manager's name`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the Manager's ID?`,
            name: 'ID'
        },
        {
            type: 'input',
            message: 'What is the email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'officeNumber'
        }
    ])
        .then(data => {
            //let manager = new Manager(data.name, data.ID, data.email, data.officeNumber);
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
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the ID?`,
            name: 'ID'
        },
        {
            type: 'input',
            message: 'What is the email address?',
            name: 'email'
        }
    ])
    

    if (teamMemberType.memberType === 'Engineer') {
        engineerInfo = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the github username?',
                name: 'github'
            },
            {
                type: 'list',
                message: 'Do you want to add another team member?',
                name: 'addMember',
                choices: ['Yes', 'No']
            }
        ])

        console.log('engineer info ' + engineerInfo.addMember)
        console.log('engineer info ' + basicInfo.name, basicInfo.ID, basicInfo.email, engineerInfo.github)

        //let engineer = new Engineer(basicInfo.name, basicInfo.ID, basicInfo.email, engineerInfo.github);

            if (engineerInfo.addMember === 'Yes') {
                addATeamMember();
            } {
                console.log('Team succesfully created.')
            }

        
    } else if (teamMemberType.memberType === 'Intern') {
        internInfo = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the school name?',
                name: 'email'
            },
            {
                type: 'list',
                message: 'Do you want to add another team member?',
                name: 'addMember',
                choices: ['Yes', 'No']
            }
        ])

        console.log('intern info ' + basicInfo.name, basicInfo.ID, basicInfo.email, internInfo.school)
        //let intern = new Intern(basicInfo.name, basicInfo.ID, basicInfo.email, internInfo.school);

            if (internInfo.addMember === 'Yes') {
                addATeamMember();
            } else {
                console.log('Team succesfully created.')
            }

        
    }
}

quit = () => { console.log("\nTeam created!"); process.exit(0); }

