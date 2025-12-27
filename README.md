# ⚙ Project Setup Instructions

- Frontend: React application built using Vite
- Backend: Node.js application using Express


# 🖥 Backend Setup
1. cd backend
2. npm install
3. PORT=6060
4. npm start
The backend server will run at:http://localhost:6060

# 🌐 Frontend Setup (React + Vite)

1. cd frontend
2. npm install
3. npm run dev
The frontend application will run at:http://localhost:5173




# 🌤 Comfort Index Algorithm
The Comfort Index is a numerical score ranging from 0 to 100, where:

100 represents ideal and highly comfortable weather

0 represents extremely uncomfortable weather


# 📊 Weather Parameters Used

- 🌡️ Temperature (°C)
- 💧 Humidity (%)
- 🌬️ Wind Speed (m/s)


# 🧮 Comfort Index Formula

***Comfort Score = 100 − |Temperature − 22| × 2 − Humidity × 0.3 − Wind Speed × 2***


- 22°C is considered an ideal comfortable temperature.

- Larger temperature deviations reduce comfort more strongly.

- Higher humidity causes discomfort and reduces the score gradually.

- Strong wind speeds reduce comfort due to chill and disturbance.



# 🌡 Temperature Weight (× 2)

- Temperature has the strongest influence on human comfort.

- Small changes in temperature are immediately noticeable

- Extreme hot or cold conditions significantly reduce comfort

- An ideal temperature of 22°C is used as a reference point

- The multiplier × 2 ensures that deviations from the ideal temperature have a strong but controlled effect on the final comfort score.



# 💧 Humidity Weight (× 0.3)

- Humidity affects comfort by influencing how hot or cold the air feels.

- High humidity causes sweating and discomfort

- Its effect is gradual, not immediate

- Moderate humidity levels are usually tolerable

- The smaller multiplier × 0.3 reflects humidity’s secondary influence, ensuring it contributes meaningfully without overpowering temperature effects.


# 🌬 Wind Speed Weight (× 2)

- Wind speed affects comfort through cooling, chill, and environmental disturbance.

- Light winds may feel pleasant

- Strong winds quickly become uncomfortable

- High wind speeds can significantly reduce perceived comfort

- The multiplier × 2 applies a strong penalty at higher wind speeds, reflecting its noticeable impact on comfort.


# Cache Design 

I implemented an in-memory cache using *node-cache* to store weather results for 5 minutes. Before calling the external API, the system checks the cache and returns cached data if available, improving performance and reducing unnecessary API calls.