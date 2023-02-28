//Update  the DOM
const myArr = ['Robert', 29]


const updateDOM = (input) => {

    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
const MPG = miles/gallons
const tripCost = MPG * price
myArr.push(MPG, tripCost)
}

updateDOM(trackMPGCost(300, 10, 5.40))
updateDOM(trackMPGCost(320, 12, 5))

