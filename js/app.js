const beerButton = document.querySelector('#beer-button')
const randomBeerTitle = document.querySelector('#random-beer')
const randomBeerDescription = document.querySelector('#description')
const randomBeerImage = document.querySelector('#beer-image')
const randomBeerPair= document.querySelector('#pair')

// function to get data on button click

function getData()
{ 
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => response.json())
        .then(data =>
        {   
            const volumeValue = data[0].volume.value
            const volumeUnit = data[0].volume.unit
            const pairWith = data[0].food_pairing

            randomBeerTitle.textContent = data[0].name + " | " + volumeValue + volumeUnit
            randomBeerDescription.textContent = data[0].description
            randomBeerImage.src = data[0].image_url
            randomBeerPair.textContent = "Pair With: " + pairWith
        })
}

getData()

beerButton.addEventListener('click', getData)