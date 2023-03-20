const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');

const inquirer = require('inquirer');
let teamMemberType;
let basicInfo = [];
let internInfo = '';
let engineerInfo = '';
let managerArray = [];
let teamArray = [];


insertManager();

//Function that adds the manager information from the prompt into the array managerArray
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
            type: 'input',
            message: `What is the Manager's ID?`,
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`\nPlease enter an ID!`);
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

            //Creates a new object manager from the Manager class
            manager = new Manager(data.name, data.id, data.email, data.officeNumber);

            //Save manager's information into the array
            managerArray.push(manager);

            //Calls the function that adds the engineers and interns to the team
            addATeamMember();
        });
}
//Function that adds the engineers and interns information from the prompt into the array teamArray
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

    //If the user selects the 'Engineer' option, we get the github information
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
                choices: ['Yes', 'No. I finished building my team.']
            }
        ])

        engineer = new Engineer(basicInfo.name, basicInfo.id, basicInfo.email, engineerInfo.github);
        teamArray.push(engineer);

        if (engineerInfo.addMember === 'Yes') {
            addATeamMember();
        } else {
            console.log('****Team succesfully created.****')
            createFile();
        }

    //If the user selects the 'Inter' option, we get the school information
    } else if (teamMemberType.memberType === 'Intern') {
        internInfo = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the school name?',
                name: 'school',
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
                choices: ['Yes', 'No. I finished building my team.']
            }
        ])

        intern = new Intern(basicInfo.name, basicInfo.id, basicInfo.email, internInfo.school);
        teamArray.push(intern);

        if (internInfo.addMember === 'Yes') {
            addATeamMember();
        } else {
            console.log('****Team succesfully created.****');
            createFile();
        }
    }
}

let htmlSemiFinal = '';

//This function is called for each engineer saved in teamArray, the 'engineers' parameter contains the line of the array being read with the engineer information
function generateEngineer(engineers) {

    let engineerHtml = `
    <div class="card" style="width: 12rem; margin: 5px;">       
        <h5 class="card-title p-3 mb-2 text-center bg-info">${engineers.getName()}</h5>
        <div class="card-header">
            👓 ${engineers.getRole()}
        </div>
        <div class="card-body">
        
        <p class="card-text">ID No. ${engineers.getId()}</p>
        <p><a href="mailto:${engineers.getEmail()}"> ${engineers.getEmail()} </a></p>
        <p><a href="https://github.com/${engineers.getGithub()}" target="_blank" class="fa fa-github">github</a></p>
        </div>
    </div>`

    //Saves a String that contains the HTML card with the engineer information to the variable htmlSemiFinal
    htmlSemiFinal += engineerHtml;
    return htmlSemiFinal;
}

//This function is called for each intern saved in teamArray, the 'interns' parameter contains the line of the array being read with the intern information
function generateIntern(interns) {
    let internHtml = `
    <div class="card" style="width: 12rem; margin: 5px;">
        <h5 class="card-title p-3 mb-2 text-center bg-info">${interns.getName()}</h5>
        <div class="card-header">
            🧑‍🎓 ${interns.getRole()}
        </div>
        <div class="card-body">
            
            <p class="card-text">ID No. ${interns.getId()}</p>
            <p><a href="mailto:${interns.getEmail()}"> ${interns.getEmail()} </a></p>
            <p class="card-text">School: ${interns.getSchool()}</p>
        </div>
    </div>
    `
    //Saves a String that contains the HTML card with the intern information to the variable htmlSemiFinal
    htmlSemiFinal += internHtml;
    return htmlSemiFinal;
}

//This function loops through the array 'teamArray' and builds a String with HTML cards for each engineer and intern
//Then in a new String 'htmlFinal' that contains the skeleton of the final HTML page created, we also add the manager information from the array managerArray
function generateHtml() {

    //One loop creates cards for all the engineers first
    for (let i = 0; i < teamArray.length; i++) {
        if (teamArray[i].getRole() === 'Engineer') {
            htmlSemiFinal = generateEngineer(teamArray[i]);
        }
    }

    //One loop creates cards for all the interns
    for (let i = 0; i < teamArray.length; i++) {
        if (teamArray[i].getRole() === 'Intern') {
            htmlSemiFinal = generateIntern(teamArray[i]);
        }
    }
    //console.log(htmlSemiFinal);

    let htmlFinal = '';
    htmlFinal = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Linking CSS -->
        <link rel="stylesheet" href="dist/style.css">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>

        <link href="https://fonts.googleapis.com/css2?family=Abel&family=Edu+NSW+ACT+Foundation&family=Playfair+Display&display=swap" rel="stylesheet">
        
        <title>Team Generator</title>
    </head>
    
    <body class="bg-dark">
    
        <header class="text-center text-white m-5">
            <h1>My Team</h1>
        </header>
    
        <main>
    
            <div class="cards d-flex flex-wrap justify-content-center p-2 bd-highlight">
    
                <div class="card" style="width: 12rem; margin: 5px;">
                
                    <h5 class="card-title p-3 mb-2 text-center bg-info">${managerArray[0].getName()}</h5>
                    <div class="card-header">
                        ☕ ${managerArray[0].getRole()}
                    </div>
                    <div class="card-body">                  
                      <p class="card-text">ID No. ${managerArray[0].getId()}</p>
                      <p class="card-text">Office No. ${managerArray[0].getOfficeNumber()}</p>
                      <p><a href="mailto:${managerArray[0].getEmail()}"> ${managerArray[0].getEmail()} </a></p>
                    </div>
                  </div>
    
                  ${htmlSemiFinal}
                  
            </div>
            
        </main>
        
    </body>
    </html>
`;
    return htmlFinal;
}

//This function gets the generated html String and saves it to the variable htmlFinal
//Then using fs I generate the HTML page
function createFile() {
    htmlFinal = generateHtml();
    // console.log(htmlSemiFinal);
    // console.log(htmlFinal);
    fs.writeFile('dist/generatedHtml.html', htmlFinal, function () {
        console.log('README successfully created!');
    })
}

