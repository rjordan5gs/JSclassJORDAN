import { renderTable} from "./render.js"
import { getTripData, saveTripData } from "./storage.js"
import { isFormValid, calculateAvg, trackMPGandCost} from "./formvalidation.js"

const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')


const MY_DATA = getTripData()
renderTable(MY_DATA)

function updateDOM (input, id) {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}



FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    const isValid = isFormValid(miles, gallons, price)
    if(isValid) {
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        const dataObj = trackMPGandCost(miles, gallons, price)
        MY_DATA.push(dataObj)
        saveTripData(MY_DATA)
        renderTable(MY_DATA, FORM)
        calculateAvg()
    }
    FORM.reset()  
})

