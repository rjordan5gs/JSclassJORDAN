//Update  the DOM

// const updateDOM = () => {

//     const divEl = document.querySelector('#output')
//     const p = document.createElement('p')
//     p.textContent = 'output to browse'
//     divEl.appendChild(p)
// }

// updateDOM(100)


// My Updated DOM
const updateDOM = () => {

    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    const divE2 = document.querySelector('#body')
    const body = document.createElement('body')
    body.textContent = 'this is my body'
    p.textContent = 'output to browse'
    divEl.appendChild(p)
    divE2.appendChild(body)

    console.log(p.textContent)
    console.log(body)
    
// Displays body content underneath divE1 Output.
}

updateDOM(100)