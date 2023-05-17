// function getWeather () {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             reject('Rainy')
//         }, 100);
//     })
// }

// function getWeatherIcon(weather) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             switch(weather) {
//                 case 'Sunny':
//                     resolve('sun')
//                     break
//                 case 'Cloudy':
//                     resolve('Cloud')
//                     break
//                 case 'Rainy':
//                     resolve('Rain')
//                 default:
//                     reject('NO ICON FOUND')
//             }
//         }, 100);
//     })
// }

// function onSuccess(data) {
//     console.log(`Sucess ${data}`)
// }

// function onError(error) {
//     console.log(`Error: ${error}`)
// }

// getWeather()
//     .then(getWeatherIcon)
//     .then(onSuccess, onError)
//     .catch(onError)


// function fun1() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve('Good Data')
//         }, 100);
//     })
// }

// function fun2() {
//     console.log('Function 2')
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve('Mustache')
//         }, 100);
//     })
// }

// function onSuccess(data) {
//     console.log(`Success: ${data}`)
// }

// function onError(errorCode) {
//     console.log(`ERROR: ${errorCode}`)
// }

// function onFinally() {
//     console.log("We are done")
// }

// fun1()
//     .then(fun2, onError)
//     .then(onSuccess)
//     .catch(onError)
//     .finally(onFinally)

function fetchData() {
    return new Promise(function(resolve, reject) {
        fetch('https://api.weather.gov/gridpoints/HNX/53,100/forecast')
        .then(response => response.json())
        .then(data.properties.periods[1].shortForecast)
    })
}

function displayData(weather) {
    console.log(weather)
}

fetchData()
    .then(displayData)
    .catch(onError)