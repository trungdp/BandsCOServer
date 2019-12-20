'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    accountid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    avatar: DataTypes.TEXT,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    skill: DataTypes.TEXT,
    musical: DataTypes.TEXT,
    achievements: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};