//Update  the DOM
const FORM = document.getElementById(`form-input`)

const MY_MPG = []
const MY_TRIP_COST = []

const updateDOM = (input) => {

    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons *price)
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)

}
const calculateSUM = (arr) => {
    let sum = 0
    for(value of arr) {
        sum += value      
    }
    return sum
}
const calculateAvg = () => {
        let sumMPG = calculateSUM(MY_MPG)
        let sumTripCost = calculateSUM(MY_TRIP_COST)
        let avgMPG = Math.round(sumMPG/MY_MPG.length)
        let avgTripCost = Math.round(sumTripCost/MY_TRIP_COST.length)
        updateDOM(`Average MPG is ${avgMPG}`)
        updateDOM(`Average trip cost is ${avgTripCost}`)


}

FORM.addEventListener('submit', (e)) => {
    e.preventDefault
    const miles = parseInt(e.target.miles.value)
    const gallon = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    
    trackMPGandCost(miles, gallon, price)
})


// calculateAvgCost and fix AVerage MPG Decimal
// commit message = "my code for calc average cost"
// trackMPGandCost(360, 15, 5.40)
// trackMPGandCost(320, 12, 5)
// trackMPGandCost(100, 7, 4.40)
// trackMPGandCost(600, 12, 4)
// trackMPGandCost(50, 15, 3.40)
// trackMPGandCost(320, 12, 3)
// updateDOM(MY_MPG)
// calculateAvg()