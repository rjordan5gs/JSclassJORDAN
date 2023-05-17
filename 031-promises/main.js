function getWeather () {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny')
        }, 100);
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                    resolve('sun')
                    break
                case 'Cloudy':
                    resolve('Cloud')
                    break
                case 'Rainy':
                    resolve('Rain')
                default:
                    reject('NO ICON FOUND')
            }
        }, 100);
    })
}

function onSuccess(data) {
    console.log(`Sucess ${data}`)
}

function onError(error) {
    console.log(`Error: ${error}`)
}

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess, onError)