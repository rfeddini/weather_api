require('dotenv').config()
//console.log(process.env) 
const apiKey = process.env.WEATHER_API_KEY;

const axios = require('axios');
axios.get(`http://api.weatherapi.com/v1/current.json?q="Paris"&key=${apiKey}`)
    .then(function (response) {
        const resultatApi = response.data;
        console.log('Tempreature actuel : ')
        console.log(resultatApi.current.temp_c);
    })
    .catch(function (error) {
        console.log(error);
    })


