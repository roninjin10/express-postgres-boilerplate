// importing Bluebird promises so we can Promise.map
const Promise = require('bluebird');
// bring in the db and all the Models to seed
const db = require('../models/index.js');
console.log(db);
const User = db.default.User;
const Post = db.default.Post;
// outer-scoped variable that will hold the db data
let allUsers,
    allPosts

// array of promises to find all the db data
// and store it in outer-scoped variables, so
// we can refer to all of them when seeding associations
let findAllPromises = [
  User.findAll().then(users => allUsers = users),
  Post.findAll().then(posts => allPosts = posts)
]

// not forcing true - we'll run this after we seed the rest of the db
Promise.all(findAllPromises)
.then(allFound => {
  let length = allUsers.length;
  let postPromises = allPosts.map(post => {
    return post.setUser(Math.ceil(Math.random() * length));
  });
  return Promise.all(postPromises)
})
.catch(console.error.bind(console))
.finally(() => {
  db.default.sequelize.close();
  console.log('Exiting...');
  return null;
})