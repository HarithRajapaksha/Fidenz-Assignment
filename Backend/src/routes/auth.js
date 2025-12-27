const express = require('express');
const passport = require('passport');
const router = express.Router();



// Auth0 login route
router.get('/login', passport.authenticate('auth0', {
    scope: 'openid email profile',
    prompt: 'login'
}), (req, res) => {
    res.send("Logging in");
});


// Auth0 callback route
router.get('/callback', passport.authenticate('auth0', {
    failureRedirect: '/login'
}), (req, res) => {
    res.redirect('http://localhost:5173/weather');
});


// Logout route
router.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.redirect("/");
    });
  });
});




module.exports = router;