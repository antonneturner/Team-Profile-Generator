// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor(name, id, email, github)
    super(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = this.github
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer';
    }