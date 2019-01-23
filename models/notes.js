const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

//create notes model
var notes = sequelize.define('talks', {
  ques: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reply: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = talks;
