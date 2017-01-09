/**
 * Created by showzyl on 16/8/19.
 */
'use strict';

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 1337;


const routes = require('./routes/index');
const users  = require('./routes/users');

// console.log(process.env.NODE_ENV);

// load the cookie-parsing middleware
app.use(cookieParser());
app.set('view engine', 'ejs');

// static
app.use(express.static('assets'));


app.use('/', routes);
app.use('/users', users);


app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});


//
//
// let sequelize = new Sequelize(
// 	mysqlCfg[env].database,
// 	mysqlCfg[env].username,
// 	mysqlCfg[env].password,
// 	mysqlCfg[env]
// );
//
// var User = sequelize.define('user', {
// 	username: Sequelize.STRING,
// 	password: Sequelize.STRING,
// 	realname: Sequelize.STRING,
// 	gender: Sequelize.INTEGER,
// 	createdAt: Sequelize.DATE,
// 	updatedAt: Sequelize.DATE
// });
//
// app.get('/test', (req, res) => {
// 	console.log(mysqlCfg[env]);
// 	User
// 		.build({
// 			username: 'foo' + Math.random().toFixed(2),
// 			password: 'bar' + Math.random().toFixed(2),
// 			gender: Math.random() > 0.5 ? 0 : 1,
// 			realname: 'lizi' + Math.random().toFixed(2)
// 		})
// 		.save()
// 		.then(function (anotherTask) {
// 			console.log(anotherTask)
// 			// you can now access the currently saved task with the variable anotherTask... nice!
// 		}).catch(function (error) {
// 		console.log(error)
// 		// Ooops, do some error-handling
// 	});
//
// 	res.end('123');
// });
//
// app.get('/get', (req, res) => {
// 	User
// 		.findAll()
// 		.then(res => {
// 			console.log(res);
// 		})
// 		.catch(function (error) {
// 			console.log(error)
// 		});
// 	res.end('get')
// });






