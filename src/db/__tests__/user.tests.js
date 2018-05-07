import { createUser, fetchUser, verifyPassword, verifyLogin } from '../util/user'
import { User } from '../models'

const clearDatabase = () => {
  User.destroy({
    where: {},
    truncate: true
  })
}

describe('Test createUser', () => {
  beforeEach(clearDatabase);

  test('Should create a new item in the database with valid input', () => {
    const displayName = 'TEST_USER';
    const email = 'test@gmail.com';
    const password = '123456789';

    createUser({
       displayName,
       email,
       password
    })
    .then(() => User.findOne({
      where: {displayName}
    }))
    .then((user) => expect(user.email).toBe('test@gmail.com'))
  })

  test('Should not create a user if email is not valid', () => {
    const displayName = 'TEST_USER';
    const email = 'not an email';
    const password = '123456789';

    expect(createUser({
      displayName,
      email,
      password
    })).rejects
  })

  test('Usernames should be unique', () => {
    const newUser = {
      displayName: 'TEST_USER',
      email: 'test@gmail.com',
      password: '123456789'
    };

    expect(createUser(newUser)).then(() => createUser(newUser)).rejects;
  })

  test('Passwords should be hashed', () => {
    const displayName = 'TEST_USER';
    const email = 'test@gmail.com';
    const password = '123456789';

    createUser({
       displayName,
       email,
       password
    })
    .then(() => User.findOne({
      where: {displayName}
    }))
    .then((user) => expect(user.password === '123456789').toBe(false))
  })
})

describe('Test fetchUser', () => {
  beforeEach(clearDatabase);

  test('Should get user from database', () => {
    const displayName = 'TEST_USER';
    const email = 'test@gmail.com';
    const password = '123456789';

    User.create({
      displayName,
      email,
      password
    })

    fetchUser(displayName)
    .then((user) => expect(user.email).toBe(email))
    .catch((err) => {
      throw new Error(err)
    });
  })
})

describe('Test verifyPassword', () => {
  
  const displayName = 'TEST_USER';
  const email = 'test@gmail.com';
  const password = '123456789';
  
  async function beforeVerifyTest() {
    await clearDatabase;

    return await User.create({
      displayName,
      email,
      password
    });
  }
  
  beforeAll(beforeVerifyTest);
  afterAll(clearDatabase);

  test('correct password should return a truthy value', () => {
    expect(fetchUser(displayName))
    .then((user) => verifyPassword(password, user.password))
    .resolves.toBeTruthy;
  });

  test('incorrect password should return a falsy value', () => {
    expect(fetchUser(displayName))
    .then((user) => verifyPassword('wrong password', user.password))
    .resolves.toBeFalsy();
  });
});

describe('Test VerifyLogin', () => {
  const displayName = 'TEST_USER';
  const email = 'test@gmail.com';
  const password = '123456789';
  
  async function beforeVerifyTest() {
    await clearDatabase;

    return await User.create({
      displayName,
      email,
      password
    });
  }
  
  beforeAll(beforeVerifyTest);
  afterAll(clearDatabase);

  test('correct login info should return the user', () => {
    verifyLogin(displayName, password)
    .then(user => {
      expect(user.displayName).toBe(displayName);
      expect(user.email).toBe(email);
    })
    .catch((err) => {
      throw new Error(err);
    });
  });

  test('incorrect username should throw an error', () => {
    verifyLogin('wrongname', password)
    .rejects.toBe('displayName does not exist');
  })

  test('incorrect password should throw an error', () => {
    verifyLogin(displayName, 'wrongpassword')
    .rejects.toBe('password is incorrect');
  })
})