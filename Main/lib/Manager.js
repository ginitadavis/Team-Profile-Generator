const Employee = require('./Employee');

class Manager extends Employee {
    
    constructor(officeNumber){
        this.officeNumber = officeNumber;

        super(employeeName, id, email);
    }

    getRole(){
        console.log('Manager'); //Returns manager
    }
}