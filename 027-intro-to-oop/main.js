class Person {
    constructor(firstName, lastName, address){
        this._firstName = firstName
        this._lastName = lastName
        this._address = address
    }
    getFirstName(){
        return `${this._firstName}`
    }
    setFirstName(newFirstName){
        this._firstName = newFirstName
    }
    getLastName(){
        return `${this._lastName}`
    }
    setLastName(newLastName){
        this._lastName = newLastName
    }
    getAddress(){
        return `${this._address}`
    }
    setAddress(newAddress){
        this._address = newAddress
    }
    showStatus() {
        console.log(`${this.getFirstName()} lives at ${this.getAddress()}`)
    }
}

class Student extends Person {
    constructor(firstName, lastName, address, classList){
        super(firstName, lastName, address)
        this._classList = classList
    }
    getClassList(){
        return `${this._classList}`
    }
    setClassList(newClassList){
        this._classList = newClassList
    }
    showStatus() {
        console.log(`${this.getFirstName()} lives at ${this.getAddress()} is taking ${this.getClassList()}`)

    }
}

const robert = new Student("Robert", "Jordan", "123 My apartment is cozy ave.", ["Eng1A", "CIT93"])
robert.showStatus()

const ray = new Person("ray", "jorgenson", "123 random ave.")
robert.showStatus()

console.log(robert.getFirstName())