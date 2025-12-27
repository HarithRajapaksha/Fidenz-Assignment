import React, { useEffect,useState } from 'react'
import axios from 'axios'

function Weather() {

 const[weatherData, setWeatherData] =useState([]);
 
  useEffect(() => {

    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:6060/weather');
        console.log(response.data);  
        setWeatherData(response.data.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);         
      }
    };

    fetchWeather();

  }, []);

  return (
    <div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {weatherData.map((wdata) => (
    <div
      key={wdata.rank}
      className="bg-white dark:bg-gray-800 
                 text-gray-800 dark:text-gray-100
                 rounded-2xl shadow-lg 
                 p-5
                 hover:scale-[1.02] transition-transform"
    >
      {/* City + Rank */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">{wdata.city}</h2>
        <span className="text-sm bg-blue-100 dark:bg-blue-900 
                         text-blue-600 dark:text-blue-300 
                         px-3 py-1 rounded-full">
          Rank {wdata.rank}
        </span>
      </div>

      {/* Temperature */}
      <div className="flex items-center gap-2 mb-3">
        {/* Thermometer SVG */}
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M14 14.76V3a2 2 0 00-4 0v11.76a4 4 0 104 0z" />
        </svg>
        <p className="text-2xl font-semibold">
          {wdata.temperature}°C
        </p>
      </div>

      {/* Description */}
      <p className="italic text-sm text-gray-600 dark:text-gray-400 mb-4">
        {wdata.description}
      </p>

      {/* Extra Info */}
      <div className="space-y-2 text-sm">
        {/* Humidity */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 3C12 3 7 9 7 13a5 5 0 0010 0c0-4-5-10-5-10z" />
          </svg>
          <span>Humidity: {wdata.humidity}%</span>
        </div>

        {/* Wind */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 12h13a3 3 0 100-6" />
            <path d="M3 18h9a3 3 0 110-6" />
          </svg>
          <span>Wind: {wdata.windSpeed} km/h</span>
        </div>

        {/* Comfort Score */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
          </svg>
          <span>Comfort: {wdata.comfortScore}</span>
        </div>
      </div>
    </div>
  ))}
</div>

</div>
  );
}

export default Weather;
