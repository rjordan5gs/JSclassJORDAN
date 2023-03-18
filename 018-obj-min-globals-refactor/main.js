class MPGTracker {
    constructor() {
      this.FORM = document.getElementById('form-input')
      this.ERR = document.getElementById('err')
      this.AVG_OUTPUT = document.getElementById('output-avg')
      this.MY_MPG = []
      this.MY_TRIP_COST = []
    }
  
    updateDOM(input, id) {
      const divEl = document.querySelector(id)
      const p = document.createElement('p')
      p.textContent = input
      divEl.appendChild(p)
    }
  
    trackMPGandCost(miles, gallons, price = 3.79) {
      const MPG = Math.round(miles/gallons)
      const tripCost = Math.round(gallons *price)
      this.updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, ('#output'))
      this.MY_MPG.push(MPG)
      this.MY_TRIP_COST.push(tripCost)
    }
  
    calculateSUM(arr) {
      let sum = 0
      for(let value of arr) {
        sum += value      
      }
      return sum
    }
  
    calculateAvg() {
      let sumMPG = this.calculateSUM(this.MY_MPG)
      let sumTripCost = this.calculateSUM(this.MY_TRIP_COST)
      let avgMPG = Math.round(sumMPG/this.MY_MPG.length)
      let avgTripCost = Math.round(sumTripCost/this.MY_TRIP_COST.length)
      this.updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
      this.updateDOM(`Average trip cost is ${avgTripCost}`)
    }
  
    addEventListeners() {
      this.FORM.addEventListener('submit', (e) => {
        e.preventDefault
        const errMsg = []
        const miles = parseInt(e.target.miles.value)
        const gallon = parseInt(e.target.gallons.value)
        const price = parseInt(e.target.price.value)
        if(miles === 0 || gallons === 0 || price === 0 ) {
          errMsg.push('Make sure your input value is greater than 0!, Try Again.')
        } 

        if(errMsg.length > 0) {
          this.ERR.textContent = errMsg
        } else {
          this.ERR.textContent = ''
          this.AVG_OUTPUT.textContent = ''
          this.trackMPGandCost(miles, gallon, price)
          this.calculateAvg()
        }
        
        this.FORM.reset()
      })
    }
  }
  
  const mpgTracker = new MPGTracker()
  mpgTracker.addEventListeners()