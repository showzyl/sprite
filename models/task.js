"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("task", {
    title: DataTypes.STRING
  }, {
    classMethods: {

    }
  });

  return Task;
};
