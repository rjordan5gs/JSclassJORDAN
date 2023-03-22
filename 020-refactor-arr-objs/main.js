const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

const MY_TRIPS = []

const updateDOM = (input, id) => {
  const divEl = document.querySelector(id)
  const p = document.createElement('p')
  p.textContent = input
  divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round(miles / gallons)
  const tripCost = Math.round(gallons * price)
  updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')

  const trip = {
    miles,
    gallons,
    price,
    MPG,
    tripCost
  }

  MY_TRIPS.push(trip)
}

const calculateSUM = (arr, key) => {
  let sum = 0
  for (const obj of arr) {
    sum += obj[key]
  }
  return sum
}

const calculateAvg = () => {
  const sumMPG = calculateSUM(MY_TRIPS, 'MPG')
  const sumTripCost = calculateSUM(MY_TRIPS, 'tripCost')
  const avgMPG = Math.round(sumMPG / MY_TRIPS.length)
  const avgTripCost = Math.round(sumTripCost / MY_TRIPS.length)
  updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
  updateDOM(`Average trip cost is ${avgTripCost}`)
}

FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  const errMsg = []
  const miles = parseInt(e.target.miles.value)
  const gallons = parseInt(e.target.gallons.value)
  const price = parseInt(e.target.price.value)
  if (miles === 0 || gallons === 0 || price === 0) {
    errMsg.push('Make sure your input value is greater than 0!, Try Again.')
  }

  if (errMsg.length > 0) {
    ERR.textContent = errMsg
  } else {
    ERR.textContent = ''
    AVG_OUTPUT.textContent = ''
    trackMPGandCost(miles, gallons, price)
    calculateAvg()
  }
  FORM.reset()
})