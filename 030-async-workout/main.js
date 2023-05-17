const formEl = document.getElementById('form')
const output = document.getElementById('output')

function updateDOM(message, el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    output.appendChild(newEl)
}

function startWorkout(type, reps, time, fn) {
    return new Promise((resolve, reject) => {
        fn(`Start ${type} <> goal reps is ${reps}` , 'p')
        setTimeout(() => {
            fn(`Stop ${type}` , 'h1')
        }, time *1000);
    }
)}



formEl.addEventListener('submit' , function(e) {
    e.preventDefault()
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)

    try {
        await startWorkout(type, reps, time, fn)
    }
    catch(error) {
        console.log('ERROR')
    }

    formEl.reset()
})