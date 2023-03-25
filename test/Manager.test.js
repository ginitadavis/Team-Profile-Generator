const Manager = require("../lib/Manager");

describe('Manager', () => {
    it('if I create a Manager w/ props I expect those props to be on my eng obj', () => {
        const man = new Manager('gina', 'g11101', 'gina@davis.com', 'h11')

        expect(man.name).toBe('gina');
        expect(man.id).toBe('g11101');
        expect(man.email).toBe('gina@davis.com');
    });

    it('should return name when getName is called', () => {
        const man = new Manager('gina', 'g11101', 'gina@davis.com', 'h11')
        const result = man.getName();
        expect(result).toBe('gina');
    });

    it('should return Id when getId is called', () => {
        const man = new Manager('gina', 'g11101', 'gina@davis.com', 'h11')
        const result = man.getId();
        expect(result).toBe('g11101');
    });

    it('should return email when getEmail is called', () => {
        const man = new Manager('gina', 'g11101', 'gina@davis.com', 'h11')
        const result = man.getEmail();
        expect(result).toBe('gina@davis.com');
    });

    it('should return role when getRole is called', () => {
        const man = new Manager('gina', 'g11101', 'gina@davis.com', 'h11')
        const result = man.getRole();
        expect(result).toBe('Manager');
    });

    it('should return role when getRole is called', () => {
        const man = new Manager('gina', 'g11101', 'gina@davis.com', 'h11')
        const result = man.getOfficeNumber();
        expect(result).toBe('h11');
    });

  });