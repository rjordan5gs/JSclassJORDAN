const ERR = document.getElementById('err')


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
    const numberOfObj = MY_DATA.length
    let sumMPG  = 0
    let sumTripCost = 0  
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG
        sumTripCost += obj.tripCost
    })
    const avgMPG = Number((sumMPG/numberOfObj).toFixed(2))
    const avgTripCost = Math.round(sumTripCost/numberOfObj)
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