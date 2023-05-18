function renderPictures(pictures) {
    pictures.forEach(img => {
        const imgEl = document.createElement('img')
        imgEl.setAttribute('src', img.thumbnailUrl)
        document.getElementById('output').appendChild(imgEl)
    })
}

function getPictures() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .catch(error => {
            console.log(`ERROR: ${error}`)
        });
}

function start() {
    getPictures()
        .then(pictures => renderPictures(pictures))
        .catch(error => {
            console.error(error);
        });
}

start();
