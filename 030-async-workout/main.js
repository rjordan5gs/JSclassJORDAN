const formEl = document.getElementById('form')
const output = document.getElementById('output')

function updateDOM(message, el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    output.appendChild(newEl)
}

function startWorkout(type, reps, time, fn) {
    fn(`Start ${type} <> goal reps is ${reps}` , 'p')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(fn(`something bad happend` , 'h1')
    )}, time *1000);
    }
)}

function onError(err){
    console(`Error ${err}`)
}



formEl.addEventListener('Submit' , function(e) {
    e.preventDefault()
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    startWorkout(type, reps, time, updateDOM).then().catch(onError)
    formEl.reset()
})