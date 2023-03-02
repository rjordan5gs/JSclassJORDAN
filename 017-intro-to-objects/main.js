const myArr =[]

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9
const myObj ={
    name: 'Rio',
    age: 59,
    hobbies: ['coding', 'running' , 'workout'],
    mobile: {
        make: 'pixel 7',
        OS: 'android'
    },
    myGreeting: function(person) {
        return `${this.name}who love to ${this.hobbies[0]}says what is up ${person}`
    }
}

const greeting = myObj.greeting('jane')
console.log(greeting)