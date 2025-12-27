function calculateComfort(weather){
    const temp=weather.main.temp;
    const humidity=weather.main.humidity;
    const wind=weather.wind.speed;


    let score =
    100 -
    Math.abs(temp - 22) * 2 -
    humidity * 0.3 -
    wind * 2;

    score= Math.max(0, Math.min(100, score));
    return Math.round(score);
}

module.exports={calculateComfort};