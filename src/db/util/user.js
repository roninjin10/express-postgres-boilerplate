import bcrypt from 'bcryptjs'
import Promise from 'bluebird'
import { User } from '../models'

Promise.promisifyAll(bcrypt);

export const createUser = (newUser) => User.create(newUser);

export const destroyUser = (displayName) => User.destroy({
  where: {displayName}
});

export const fetchUser = (displayName) => User.findOne({
  where: {displayName}
})

export const verifyPassword = (displayName, password, hashedPassword) => bcrypt.compareAsync(password, hashedPassword)
  