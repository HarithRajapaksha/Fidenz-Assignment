const express = require('express');
const session=require('express-session');
const passport=require('passport');
require('dotenv').config();
const cors = require('cors');
const app = express();
require("./src/auth0/strategy");
const authRoutes = require("./src/routes/auth");
const dashboardRoutes = require("./src/routes/dashboard");
const weatherRoutes = require("./src/routes/weather");

app.use(express.json());
const port = process.env.PORT ;

app.use(cors());

app.use(cors({
  origin: "http://localhost:5173", // your React dev server
  credentials: true
}));

//Sessions handle
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true
}));

//passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", authRoutes);
app.use("/", dashboardRoutes);
app.use("/", weatherRoutes);


// Public route
app.get("/", (req, res) => {
  res.send("Public Home Page");
});


//Start server
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})