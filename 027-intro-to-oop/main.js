class Person {
    constructor(firstname, lastname, address){
        this.firstname = firstname
        this.lastname = lastname
        this.address = address
    }
    showStatus() {
        console.log(`${this.firstname} lives at ${this.address}`)
    }
}

class Student extends Person {
    constructor(firstname, lastname, address, classList){
        super(firstname, lastname, address)
        this.classList = classList
    }

    showStatus() {
        console.log(`${this.firstname} lives at ${this.address} is taking ${this.classList}`)

    }
}

const robert = new Student("Robert", "Jordan", "123 My apartment is cozy ave.")
robert.showStatus()

const ray = new Person("ray", "jorgenson", "123 random ave.")
robert.showStatus()