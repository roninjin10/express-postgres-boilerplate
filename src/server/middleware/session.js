import session from 'express-session'

export default session({
  secret: 'good luck figurithisaljdf9332011:ng out this secret ',
  resave: true,
  saveUninitialized: true
})