require('dotenv').config()
console.log(process.env) 

const axios = require('axios');
const apiKey = process.env.WEATHER_API_KEY;
axios.get(`http://api.weatherapi.com/v1/current.json?q="Paris"&key=${apiKey}`)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
