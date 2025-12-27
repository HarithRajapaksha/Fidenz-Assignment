const express = require("express");
const fs = require("fs");
const path = require("path");

const { fetchWeather } = require("../Service/weatherService");
const { calculateComfort } = require("../Service/comfortService");
const cache = require("../Service/cacheService");

const router = express.Router();

router.get("/weather", async (req, res) => {
  try {

    const cached = cache.get("weather-data");
    if (cached) {
      return res.json({ source: "CACHE", data: cached });
    }

   
    const citiesPath = path.resolve(__dirname, "cities.json");
    const citiesFile = JSON.parse(fs.readFileSync(citiesPath, "utf-8"));

    const cities = citiesFile.List;

    if (!Array.isArray(cities)) {
      throw new Error("cities.json List is not an array");
    }

    const results = [];

    
    for (const city of cities.slice(0, 10)) {
      const weather = await fetchWeather(city.CityCode);
      const score = calculateComfort(weather);

      results.push({
        city: weather.name,
        description: weather.weather[0].description,
        temperature: weather.main.temp,
        humidity: weather.main.humidity,
        windSpeed: weather.wind.speed,
        comfortScore: score
      });
    }

    
    results.sort((a, b) => b.comfortScore - a.comfortScore);

    results.forEach((c, i) => (c.rank = i + 1));

   //cache results for 5 minutes
    cache.set("weather-data", results, 300);

    res.json({ source: "API", data: results });

  } catch (error) {
    console.error("Weather API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;
