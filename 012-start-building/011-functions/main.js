//Update  the DOM
const myArr = []


const updateDOM = (input) => {

    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price) => miles/gallons * price
const miles = parseInt(prompt('Enter the number of miles you want to travel:'))
const gallons = parseInt(prompt('Enter the number of gallons your vehicle can hold:'))
const price = parseFloat(prompt('Enter the price per gallon of gas:'))
const MPG = miles/gallons
const tripCost = MPG * price
myArr.push(MPG, tripCost)


updateDOM(trackMPGCost(miles, gallons, price))
updateDOM(trackMPGCost(miles, gallons, price))

// Added the lesson on to my previous code to see if it would work