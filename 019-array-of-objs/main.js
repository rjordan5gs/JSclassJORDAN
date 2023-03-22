const updateDOM = (input, id) => {
  const divEl = document.getElementById(id)
  const p = document.createElement('p')
  p.textContent = input
  divEl.appendChild(p)
}

const myArrObjs = [
  {
    name : 'Rio',
    hairColor : 'Red'
  },
  {
    name : 'Joe',
    hairColor : 'Black'
  },
  {
    name : 'Jane',
    hairColor : 'Brown'
  }

]

myArrObjs.forEach(obj => {
  const str = `${obj.name} has ${obj.hairColor} hair color`
  updateDOM(str, 'output')
})

