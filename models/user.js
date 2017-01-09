"use strict";


module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    realname: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      // associate: function(models) {
      //   User.hasMany(models.Task)
      // }
    }
  });

  return User;
};
