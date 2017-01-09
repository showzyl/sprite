var models  = require('../models');
var express = require('express');
var router  = express.Router();

// router.get('/', function(req, res) {
//   models.User.findAll({
//     include: [ models.Task ]
//   }).then(function(users) {
//     res.render('index', {
//       title: 'Sequelize: Express Example',
//       users: users
//     });
//   });
// });

// router.get('/', (req, res) => {
//   res.render('index', {
//     title: ' 雪碧 · sprite',
//     message: '我是`雪碧`主页!'
//   });
// });

module.exports = router;
