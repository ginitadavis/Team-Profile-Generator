const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school){
        this.school = school;

        super(employeeName, id, email);
    }

    getRole(){
        console.log('Intern');
    }
    getSchool(){
        console.log('School');
    }
}