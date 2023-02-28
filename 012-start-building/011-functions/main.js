//Update  the DOM

const updateDOM = (input) => {

    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const mileage = (miles, gallons, price) => miles/gallons * price



updateDOM(mileage(300, 10, 3.79))
