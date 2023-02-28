//Update  the DOM

const updateDOM = () => {

    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = 'output to browse'
    divEl.appendChild(p)
}

updateDOM(100)