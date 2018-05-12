// importing Bluebird promises so we can Promise.map
const Promise = require("bluebird");
// bring in the db and all the Models to seed
const db = require("../models/");
const User = require("../models/user");
const Post = require("../models/post");

// each of the following array will be iterated and Created
const userData = [
  {
    username: "kyle",
    password: "kyle",
    email: "email@email.com"
  },
  {
    username: "eric",
    password: "eric",
    email: "email@email.com"
  },
  {
    username: "will",
    password: "will",
    email: "email@email.com"
  },
  {
    username: "joe",
    password: "joe",
    email: "email@email.com"
  },
  {
    username: "nate",
    password: "nate",
    email: "email@email.com"
  },
  {
    username: "cindy",
    password: "cindy",
    email: "email@email.com"
  },
  {
    username: "test",
    password: "test",
    email: "email@email.com"
  }
];

const postData = [
  {
    userid: 1,
    title: "This is question number 1?",
    body: "I am the body of question number 1.",
    type: 'Question'
  },
  {
    userid: 2,
    title: "This is question number 2?",
    body: "I am the body of question number 2.",
    type: 'Question'
  },
  {
    userid: 3,
    title: "This is question number 3?",
    body: "I am the body of question number 3.",
    type: 'Question'
  },
  {
    userid: 4,
    title: "This is question number 4?",
    body: "I am the body of question number 4.",
    type: 'Question'
  },
  {
    postref: 1,
    userid: 5,
    body: "I am the answer of question number 1.",
    type: 'Answer'
  },
  {
    postref: 2,
    userid: 6,
    body: "I am the answer of question number 2.",
    type: 'Answer'
  },
  {
    postref: 3,
    userid: 7,
    body: "I am the answer of question number 3.",
    type: 'Answer'
  }
];

// We will go through the Models one by one and create an instance
// for each element in the array. Look below for a commented out version of how to do this in one slick nested Promise.

// Sync and restart db before seeding

db.default.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("synced db.default and dropped old data");
  })
  // here, we go through all the models one by one, create each
  // element from the seed arrays above, and log how many are created
  .then(() => {
    return Promise.map(userData, function(user) {
      return User.create(user);
    });
  })
  .then(createdUsers => {
    console.log(`${createdUsers.length} users created`);
  })
  .then(() => {
  return Promise.map(postData, post => Post.create(post))
})
.then(createdPosts => {
  console.log(`${createdPosts.length} posts created`);
})
  .catch(err => {
    console.error("Error!", err, err.stack);
  })
  .finally(() => {
    db.default.sequelize.close();
    console.log("Finished!");
    return null;
  });
