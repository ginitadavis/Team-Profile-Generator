const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school){
        this.school = school;

        super(name, id, email);
    }

    getRole(){
        return 'Intern';
    }
    getSchool(){
        console.log('School');
    }
}