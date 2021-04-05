const passport = require("passport"),
OAuth2Strategy = require("passport-oauth2")

// passport.serializeUser((user, done)=>{
//     done(null, user.id)
// })

// passport.deserializeUser((user, done)=>{
//     done(null, user.id)
// })

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://www.example.com/oauth2/authorize',
    tokenURL: 'https://www.example.com/oauth2/token',
    clientID: "EXAMPLE_CLIENT_ID",
    clientSecret: "EXAMPLE_CLIENT_SECRET",
    callbackURL: "http://localhost:3000/auth/example/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      console.log(profile)
    cb(null, profile);
  }
));