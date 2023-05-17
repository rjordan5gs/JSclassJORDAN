const formEl = document.getElementById('form')
const output = document.getElementById('output')

function updateDOM(message, el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    output.appendChild(newEl)
}

function workout (type, reps, time, start) {
    start(`Begin ${type} you must complete ${reps}` , 'p')
    setTimeout(() => {
        fn(`${type} Finished`)
    }, time * 500);
}

formEl.addEventListener('submit' , function(e) {
    e.preventDefault()
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    workout(type, reps, time, updateDOM)
    formEl.reset()
})