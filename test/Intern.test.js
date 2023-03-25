const Intern = require("../lib/Intern");

describe('Intern', () => {
    it('if I create a Intern w/ props I expect those props to be on my eng obj', () => {
        const int = new Intern('gina', 'g11101', 'gina@davis.com', 'UCF')

        expect(int.name).toBe('gina');
        expect(int.id).toBe('g11101');
        expect(int.email).toBe('gina@davis.com');
    });

    it('should return name when getName is called', () => {
        const int = new Intern('gina', 'g11101', 'gina@davis.com', 'UCF')
        const result = int.getName();
        expect(result).toBe('gina');
    });

    it('should return Id when getId is called', () => {
        const int = new Intern('gina', 'g11101', 'gina@davis.com', 'UCF')
        const result = int.getId();
        expect(result).toBe('g11101');
    });

    it('should return email when getEmail is called', () => {
        const int = new Intern('gina', 'g11101', 'gina@davis.com', 'UCF')
        const result = int.getEmail();
        expect(result).toBe('gina@davis.com');
    });

    it('should return role when getRole is called', () => {
        const int = new Intern('gina', 'g11101', 'gina@davis.com', 'UCF')
        const result = int.getRole();
        expect(result).toBe('Intern');
    });

    it('should return role when getRole is called', () => {
        const int = new Intern('gina', 'g11101', 'gina@davis.com', 'UCF')
        const result = int.getSchool();
        expect(result).toBe('UCF');
    });

  });