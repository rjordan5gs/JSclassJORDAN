function updateDOM (input, id) {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

//global variables
const timeOfDay = 8
const goodDay = true
const feelings = 'happy'

if (goodDay === true && timeOfDay > 7) {
    updateDOM('you are happy')
}
else if(goodDay !== false || timeOfDay < 8) {
    updateDOM('are you happy?')
}
else{
    updateDOM('I would be happy if')
}