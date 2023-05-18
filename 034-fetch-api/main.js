// // // const url = 
// // // 'http://worldtimeapi.org/api/timezone/America/Los_Angeles'

// // // async function getData() {
// // //     const response = await fetch(url)
// // //     const data = await response.json()
// // //     console.log(data)
// // // }

// // // getData()

// const url = 
// 'http://worldtimeapi.org/api/timezone/America/Los_Angeles'

// api_token='no token here'

// const request = new Request(url, {
//         headers: {
//             'Authorization': 'Bearer'
//         }
//     })

// async function getData() {
//     const responce = await fetch(request)
//     const data = await responce.json()

// }

// getData()

const url = 'http://banana.pudding'

const request = new Request(url, {
    headers: {
        'Authorization': 'Bearer 123'
    }
})

async function getData() {
    try {
        const responce = await fetch(request)
        const data = await responce.json()
        if (responce.status !== 200) {
            console.log('Success', data)
        } else{
            console.log('Server Error', data.error.message)
        }
    } catch(error) {
        console.log('Fetch Error', error)
    }
}

getData()

