const axios=require('axios');
const WEATHER_API_KEY=process.env.WHEATHER_API_KEY;

async function fetchWeather(cityid){
     const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${WEATHER_API_KEY}&units=metric`;
     const response = await axios.get(url);
     return response.data;
}

module.exports={fetchWeather};