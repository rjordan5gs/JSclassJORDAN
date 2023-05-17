
// let pizza

// function orderPizza() {
//     console.log('Order Pizza')
//     setTimeout(() => {
//         pizza = '🍕'
//         console.log (`${pizza} is ready`)
//     }, 2000);
//     console.log('Pizza was ordered')
// }

// orderPizza()
// console.log('Call Qoli')
// console.log(`Eat ${pizza}`)

// Async

// function orderPizza(callback) {
//     setTimeout(() => {
//         const pizza = `🍕`
//         callback()
//     }, 2000);
// }

// function pizzaReady() {
//     console.log(`eat the ${pizza}`)
// }

// orderPizza(pizzaReady)
// console.log(`Call Qoli`)

// window.addEventListener('click', callback) {
//     console.log('Clicked')
// }

function thing1(callback) {
    callback()
}

function thing2(callback) {
    callback()
}

function thing3(callback) {
    callback()
}

thing1(() => {
    thing2(() => {
        thing3()
    })
})