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

const robert = new Person("Robert", "Jordan", "123 My apartment is cozy ave.")
robert.showStatus()

const ray = new Person("ray", "jorgenson", "123 random ave.")
robert.showStatus()