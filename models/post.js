'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    postedby: DataTypes.INTEGER,
    members: DataTypes.STRING,
    musicals: DataTypes.TEXT,
    require: DataTypes.TEXT,
    aspiration: DataTypes.TEXT,
    freetime: DataTypes.STRING,
    device: DataTypes.TEXT,
    exbands: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};