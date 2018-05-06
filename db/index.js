//import Sequelize from 'sequelize'
const Sequelize = require('sequelize')

const DATABASE_URL = process.env.DATABASE_URL || `postgres://jyfijuwsqtxfrs:6e0eaaa37af7af1c9672da1db5539582fa8a54334e073c8af647d196f82ab4c6@ec2-54-83-19-244.compute-1.amazonaws.com:5432/d17n1otdnh0ekk
`
const sequelize = new Sequelize(DATABASE_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
