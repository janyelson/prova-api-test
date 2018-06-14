'use strict';
var mongoose = require('mongoose'),
User = mongoose.model('User');
exports.list_all_users = function(req, res) {
   User.find({}, function(err, user) {
      if (err)
         res.send(err);
      res.json(user);
   });
};
exports.create_a_user = function(req, res) {
   var new_user = new User();
   new_user.email = req.body.email;
   new_user.username = req.body.username;
   new_user.password = req.body.password;
   new_user.type = req.body.type;

   new_user.save(function(err, user) {
   if (err)
      res.send(err);
   res.json(user);
   });
};
exports.read_a_user = function(req, res) {
   User.findById(req.params.questionId, function(err, user) {
   if (err)
      res.send(err);
   res.json(user);
   });
};
exports.update_a_user = function(req, res) {
   User.findOneAndUpdate({_id: req.params.questionId}, req.name, {new: true}, function(err, user) {
   if (err)
      res.send(err);
   res.json(user);
   });
};
exports.delete_a_user = function(req, res) {
   User.remove({
      _id: req.params.userId
   }, function(err, question) {
   if (err)
      res.send(err);
   res.json({ message: 'User successfully deleted' });
   });
};

exports.all = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
};

exports.login = function(req, res) {
   User.find({email: req.body.email, password: req.body.password}, function(err, user) {
      if (err)
         res.send(err);

      res.json(user);
   });
};
