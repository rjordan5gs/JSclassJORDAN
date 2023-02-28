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
    const tripCost = gallons * price
    const formattedTripCost = tripCost.toLocaleString
        ('en-US', {
            style: 'currency',
            currency: 'USD'
                }
    )
    updateDOM(`Mileage is ${MPG} and trip cost is ${formattedTripCost}`)
    myArr.push(MPG, tripCost)





// Added the lesson on to my previous code to see if it would work