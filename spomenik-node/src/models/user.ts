import { Model } from 'sequelize';
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user: any, options: object) {
  const SALT_FACTOR = 8
  if (!user.changed('password')) {
    return
  }
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then((salt: any) => bcrypt.hashAsync(user.password, salt, null))
    .then((hash: any) => {
      user.setDataValue('password', hash)
    })
}

interface UserAttributes {
  name: string;
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    name!: string;
    email!: string;
    password!: string;
    comparePassword(candidatePassword: string): Promise<boolean> {
      return bcrypt.compareAsync(candidatePassword, this.password)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
  },
    sequelize,
    modelName: 'User',
  });

  return User;
};