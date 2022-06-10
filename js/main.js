
document.querySelector('button').addEventListener('click', getJoke)

function getJoke() {

    let joke = document.querySelector('button').value

    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())  // parse response as JSON
    .then(data => {
    console.log(data)
    document.querySelector('h4').innerText = data.value
    })
    .catch(err => {
    console.log(`error ${err}`)
    });
}


