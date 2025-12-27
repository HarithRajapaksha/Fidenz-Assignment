const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

passport.use(new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
}, 

function(accessToken, refreshToken, extraParams, profile, done) {
    const allowedEmail="careers@fidenz.com";
    if(profile.emails[0].value !== allowedEmail){

        return done(null,false,{message:"Access Denied"});
    }
    return done(null, profile);
}));


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});