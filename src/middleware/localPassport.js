import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

// stubbing for database
let users = {will: 'password'};

const isValidPassword = (username, password) => users[username] === password;

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

const localStrategy = (username, password, done) => {
  if (!(username in users)) {
    return done(null, false, { message: 'Incorrect username'});
  
  } else if (!isValidPassword(username, password)) {
    return done(null, false, { message: 'Incorrect password'});
  }
  
  return done(null, username);
};

passport.use(new LocalStrategy(localStrategy));

export default passport;