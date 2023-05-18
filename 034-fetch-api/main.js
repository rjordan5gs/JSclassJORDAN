// // const url = 
// // 'http://worldtimeapi.org/api/timezone/America/Los_Angeles'

// // async function getData() {
// //     const response = await fetch(url)
// //     const data = await response.json()
// //     console.log(data)
// // }

// // getData()

const url = 
'http://worldtimeapi.org/api/timezone/America/Los_Angeles'

api_token='no token here'

const request = new Request(url, {
        headers: {
            'Authorization': 'Bearer'
        }
    })

async function getData() {
    const responce = await fetch(request)
    const data = await responce.json()

}

getData()



