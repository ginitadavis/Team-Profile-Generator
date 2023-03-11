const inquirer = require('inquirer');

class Employee {

    constructor(employeeName, id, email){
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }

    getName(id){
        console.log(`hello`);
    }
    getId(id){
        console.log(`hello`);
    }
    getEmail(id){
        console.log(`hello`);
    }
    getRole(id){ //returns employee
        console.log(`Employee`);
    }

}

module.exports = Employee;