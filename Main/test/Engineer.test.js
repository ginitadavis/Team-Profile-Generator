const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it('if I create an engineer w/ props I expect those props to be on my eng obj', () => {
        const eng = new Engineer('gina', 'g11101', 'gina@davis.com', 'ginitadavis')

        expect(eng.name).toBe('gina');
        expect(eng.id).toBe('g11101');
        expect(eng.email).toBe('gina@davis.com');
    });

    it('should return name when getName is called', () => {
        const eng = new Engineer('gina', 'g11101', 'gina@davis.com', 'ginitadavis')
        const result = eng.getName();
        expect(result).toBe('gina');
    });

    it('should return Id when getId is called', () => {
        const eng = new Engineer('gina', 'g11101', 'gina@davis.com', 'ginitadavis')
        const result = eng.getId();
        expect(result).toBe('g11101');
    });

    it('should return email when getEmail is called', () => {
        const eng = new Engineer('gina', 'g11101', 'gina@davis.com', 'ginitadavis')
        const result = eng.getEmail();
        expect(result).toBe('gina@davis.com');
    });

    it('should return role when getRole is called', () => {
        const eng = new Engineer('gina', 'g11101', 'gina@davis.com', 'ginitadavis')
        const result = eng.getRole();
        expect(result).toBe('Engineer');
    });

    it('should return role when getRole is called', () => {
        const eng = new Engineer('gina', 'g11101', 'gina@davis.com', 'ginitadavis')
        const result = eng.getGithub();
        expect(result).toBe('ginitadavis');
    });

  });