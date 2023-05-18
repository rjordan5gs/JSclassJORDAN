
function getData () {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject('Somthing went wrong!')
        }, 1);
    })
}

async function start() {
    try {
        const result = await getData()
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
    console.log(result)
}

async function start2() {
    const result = await getData()
    .catch( error => {
        console.log(`ERROR: ${error}`)
    })
    console.log(result)
}
start2

start()
