const Employee = require("../lib/Employee");

describe('Employee', () => {
    it('if i create an employee w/ props i expect those prop to be on my emp obj', () => {
        const emp = new Employee('gina', 'g11101', 'gina@davis.com')

        expect(emp.name).toBe('gina');
        expect(emp.id).toBe('g11101');
        expect(emp.email).toBe('gina@davis.com');
    });

    it('should return name when getName is called', () => {
        const emp = new Employee('gina', 'g11101', 'gina@davis.com')
        const result = emp.getName();
        expect(result).toBe('gina');
    });

    it('should return Id when getId is called', () => {
        const emp = new Employee('gina', 'g11101', 'gina@davis.com')
        const result = emp.getId();
        expect(result).toBe('g11101');
    });

    it('should return email when getEmail is called', () => {
        const emp = new Employee('gina', 'g11101', 'gina@davis.com')
        const result = emp.getEmail();
        expect(result).toBe('gina@davis.com');
    });

    it('should return role when getRole is called', () => {
        const emp = new Employee('gina', 'g11101', 'gina@davis.com')
        const result = emp.getRole();
        expect(result).toBe('Employee');
    });
  });