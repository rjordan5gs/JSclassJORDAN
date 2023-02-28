//Update  the DOM

const updateDOM = (input) => {

    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const mileage = (miles, gallons, price) => miles/gallons * price
const miles = parseInt(prompt('Enter the number of miles you want to travel:'));
const gallons = parseInt(prompt('Enter the number of gallons your vehicle can hold:'));
const price = parseFloat(prompt('Enter the price per gallon of gas:'));


updateDOM(mileage(miles, gallons, price))

//Took inspiration from what you said in the lecture about User Input Data, The values in
//updateDOM section were changed to reflect user input to be calulated instead of set
//values.
