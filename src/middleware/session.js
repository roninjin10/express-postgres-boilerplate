import session from 'express-session'

export default session({
  secret: 'good luck figuring out this secret hahahahahahahahahahahahahahahahahahahahalmao',
  resave: true,
  saveUninitialized: true
})