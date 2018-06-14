var express = require('express'),
app = express(),
//csv = require('csv'),
cors = require('cors'),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
//New
passport = require('passport'), 

User = require('./api/models/userModel'),
Test = require('./api/models/testModel'),
Question = require('./api/models/questionModel'),
Answers = require('./api/models/answersModel'),
bodyParser = require('body-parser');

//var url = process.env.MONGOLAB_URI;
var url = 'mongodb://localhost/prova-db';

mongoose.Promise = global.Promise;
mongoose.connect(url);

//User.collection.drop();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//New
app.use(passport.initialize());

var routes = require('./api/routes/routes');
routes(app);

/*
app.post("/users", function(req, res) {
	var new_user = new User();
	new_user.email = req.body.email;
	new_user.username = req.body.username;
	new_user.password = req.body.password;
	new_user.type = req.body.type;
   	console.log('vamo ver se ta funcionando ' + req.body.email + " " + req.body.username +" "+ req.body.password +" "+ req.body.type);
   	new_user.save(function(err, user) {
   	if (err)
      	res.send(err);
   	res.json(user);
   	});
});
app.get("/users", function(req, res) {
	User.find(function(err, user) {
      if (err)
         res.send(err);
      res.json(user);
   });
});
*/

app.listen(port);
console.log('Message RESTful API server started on: ' + port);