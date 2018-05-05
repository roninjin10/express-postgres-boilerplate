import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

// stubbing for database
let users = {will: 'password'};

const isValidPassword = (username, password) => users[username] === password;

const localStrategy = new LocalStrategy((username, password, done) => {
  if (!(username in users)) {
    return done(null, false, { message: 'Incorrect username'});
  
  } else if (!isValidPassword(username, password)) {
    return done(null, false, { message: 'Incorrect password'});
  }
  
  return done(null, username);
});

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user))

passport.use(localStrategy);

export default passport;