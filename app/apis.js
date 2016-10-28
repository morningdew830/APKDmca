var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = require('../config/db');

router.post('/is_logged', function(req, res) {
	connection.query('SELECT * FROM tbl_users', function(err, rows, fields) {
	  if (err) throw err;
	 
	  res.json({result:rows});
	});
});

router.post('/auth', function(req, res) {
	var user = req.body;
	var query = "SELECT * FROM tbl_users WHERE email='" + user.email + "' AND password='" + user.password + "'";
	connection.query(query, function(err, rows, fields){
		if (rows.length > 0) {
			res.json({success:1, email:rows[0].email});
		} else {
			res.json({success:0});
		}
	});
});

module.exports = router;