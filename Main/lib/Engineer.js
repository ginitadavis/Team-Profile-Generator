const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github){
        this.github = github;

        super(employeeName, id, email);
    }

    getRole(){
        console.log('Engineer');
    }
    getGithub(){
        console.log('Github');
    }
}