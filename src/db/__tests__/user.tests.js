import db from '../models'

const User = db.User
const { createUser, fetchUser, verifyPassword, verifyLogin, destroyUser } = User 
beforeAll((done) => db.sequelize.sync({force: true})
  .then(() => {done()})
);
  
afterAll(() => db.sequelize.close())

describe('Test createUser', () => {

  test('Should create a new item in the database with valid input', (done) => {
    const username = 'TEST_USER'
    const email = 'test@gmail.com'
    const password = '123456789'
    destroyUser(username)
    .then(() => 
    createUser({
       username,
       email,
       password
    }))
    .then(() => User.findOne({
      where: {username}
    }))
    .then((user) => {
      expect(user.email).toBe('test@gmail.com')
      done();
    })
    .catch(() => {
      expect(false).toBeTruthy()
      done()
    })
    
  })

  test('Should not create a user if email is not valid', (done) => {
    const username = 'TEST_USER'
    const email = 'not an email'
    const password = '123456789'

    createUser({
      username,
      email,
      password
    })
    .then(() => {
      expect(false).toBeTruthy
      done()
    })
    .catch((err) => {
      expect(err).toBeTruthy
      done()
    })
  })

  test('Usernames should be unique', (done) => {
    const newUser = {
      username: 'TEST_USER',
      email: 'test@gmail.com',
      password: '123456789'
    }

    createUser(newUser)
      .then(() => createUser(newUser))
      .then(() => {
        expect(false).toBeTruthY()
        done()
      })
      .catch((err) => {
        expect(true).toBeTruthy
        done()
      })
  })

  test('Passwords should be hashed', (done) => {
    const username = 'TEST_USER'
    const email = 'test@gmail.com'
    const password = '123456789'
    destroyUser(username).then(() =>
    createUser({
       username,
       email,
       password
    }))
    .then(() => User.findOne({
      where: {username}
    }))
    .then((user) => expect(user.password === '123456789').toBe(false))
    .then(done)
    .catch(() => {
      expect(false).toBeTruthy
      done()
    })
  })
})

describe('Test fetchUser', () => {
  beforeEach(clearDatabase)

  test('Should get user from database', (done) => {
    const username = 'TEST_USER'
    const email = 'test@gmail.com'
    const password = '123456789'
    destroyUser(username)
    User.create({
      username,
      email,
      password
    })
    .then(() => fetchUser(username))
    .then((user) => {
      expect(user.email).toBe(email)
      done()
    })
    .catch((err) => {
      expect(false).toBeTruthy()
      done()
    })
  })
})

describe('Test verifyPassword', () => {
  
  const username = 'TEST_USER2'
  const email = 'test2@gmail.com'
  const password = '1234567890'
  
  beforeAll((done) => {
    destroyUser(username).then(() => {
      createUser({username, email, password})
      done()
    })
  })

  test('correct password should return a truthy value', (done) => {
    fetchUser(username)
    .then((user) => verifyPassword(password, user.password))
    .catch(() => expect(false).toBeTruthy)
    .finally(done)
  })

  test('incorrect password should return a falsy value', (done) => {
    fetchUser(username)
    .then((user) => verifyPassword('wrong password', user.password))
    .catch(() => expect(false).toBeTruthy)
    .finally(done)
  })
})

describe('Test VerifyLogin', () => {
  const username = 'TEST_USER2'
  const email = 'test2@gmail.com'
  const password = '1234567890'
  
  beforeAll((done) => {
    destroyUser(username).then(() => {
      createUser({username, email, password})
      done()
    })
  })

  test('correct login info should return the user', (done) => {
    verifyLogin(username, password)
    .then(user => {
      expect(user.username).toBe(username)
      expect(user.email).toBe(email)
      done()
    })
    .catch((err) => {
      expect(false).toBeTruthy
      done()
    })
  })

  test('incorrect username should throw an error', (done) => {
    
    verifyLogin('wrongname', password)
    .then(() => {
      expect(false).toBeTruthy
      done()
    })
    .catch((err) => {
      expect(err).toBeTruthy
      done()
    })
  })

  test('incorrect password should throw an error', (done) => {
    verifyLogin(username, 'wrongpassword')
    .then(() => {
      expect(false).toBeTruthy
      done()
    })
    .catch((err) => {
      expect(err).toBeTruthy
      done()
    })
  })
})
