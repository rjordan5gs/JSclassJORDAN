const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')



function updateDOM (input, id) {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}



function trackMPGandCost (miles, gallons, price) {
    const MPG  = Number((miles/gallons).toFixed(2))
    const tripCost = Number((gallons * price).toFixed(2))
    updateDOM(`Miles per gallon  is ${MPG} and trip cost is ${tripCost}`, '#output')
    return {
        miles: miles,
        gallons: gallons,
        price: price,
        MPG: MPG, 
        tripCost: tripCost
    }
}



function calculateAvg (MY_DATA) {
    AVG_OUTPUT.innerHTML = ''
    const numberOfObj = MY_DATA.length
    const sums = MY_DATA.reduce(function(sum, obj){
        return {
             MPG: sum.MPG + obj.MPG,
             tripCost: sum.tripCost + obj.tripCost
        }
    })
    const avgMPG = Number((sums.MPG/numberOfObj).toFixed(2))
    const avgTripCost = Number((sums.tripCost/numberOfObj).toFixed(2))
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-avg')
}



function isFormValid (miles, gallons, price) {
    const errMsg = []
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure your input value greater than 0!!, Try Again')
    }
    if (price > 1000) {
        errMsg.push('Really!!!? I think this is in error...Try again')
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg
        return false
    } else {
        return true
    }
}



export {isFormValid, calculateAvg, trackMPGandCost}