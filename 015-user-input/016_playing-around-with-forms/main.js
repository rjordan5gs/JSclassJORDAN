const FORM = document.getElementById(`form-input`)

const MY_FRUIT_PRICE = []
const MY_FRUIT = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackFruitCost = (apples, oranges, banannas) => {
    const applePrice = apples + 1.49
    const orangePrice = oranges + 2.55
    const banannaPrice = banannas + 2.49
    const totalPrice = applePrice + orangePrice + banannaPrice
    updateDOM(`Total Price of the fruit is ${totalPrice},
                Total price of ${apples} apples is ${applePrice},
                Total price of ${oranges} oranges is ${orangePrice},
                Total price of ${banannas} banannas is ${banannaPrice},`)
    MY_FRUIT_PRICE.push
    MY_FRUIT.push
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault
    const apples = parseInt(e.target.apples.value)
    const banannas = parseInt(e.target.banannas.value)
    const oranges = parseInt(e.target.oranges.value)

    trackFruitCost(apples, oranges, banannas)
    updateDOM()
})

