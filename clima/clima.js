
const axios = require('axios');    



const getClima = async(lat, lng) => {


        let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }139&units=metric&appid=a214d116e9c2ff9de7786a169daeaf80`)
           
        return resp.data.main.temp;
        }
    

module.exports = {

    getClima
}