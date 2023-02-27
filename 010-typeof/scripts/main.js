// Global Scope
let myName = "Robert"
let myAge = 28
let myHappiness = true
let newVar = 'Something cool'
const myConst = 42
console.log(myAge == myName)
console.log(myAge == myName)

let myVar = null
console.log(`myVar is typeof ${typeof myVar}`)

console.log(`myName is typeof ${typeof myName}`)
console.log(`myName is value  ${myName}`)
console.log(`myAge is typeof ${typeof myAge}`)
console.log(`myHappiness is typeof ${typeof myHappiness}`)

//Block Scope
if (true) {
    const myConst = 43
    console.log(myConst)

}