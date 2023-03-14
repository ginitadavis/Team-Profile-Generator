const Employee = require("../lib/Employee");

describe('Employee', () => {
    it('if i create an employee w/ props i expect those prop to be on my emp obj', () => {
        const emp = new Employee('gina', 'g11101', 'gina@davis.com')

        expect(emp.name).toBe('gina');
        expect(emp.id).toBe('g11101');
        expect(emp.email).toBe('gina@davis.com');
    });
  });