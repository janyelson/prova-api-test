'use strict';
var mongoose = require('mongoose'),
Test = mongoose.model('Test');
exports.list_all_tests = function(req, res) {
   Test.find({}, function(err, test) {
      if (err)
         res.send(err);
      res.json(test);
   });
};
exports.create_a_test = function(req, res) {
   console.log("Test begin creation");
   console.log('vamo ver se ta funcionando ' + req.body.id_user+ " " + req.body.name +" "+ req.body.begin_date +" "+ req.body.topics);
   var new_test = new Test();

   new_test.id_user = req.body.id_user;
   new_test.name = req.body.name;
   new_test.begin_date = req.body.begin_date;
   new_test.end_date = req.body.end_date;
   new_test.topics = req.body.topics;
   new_test.password = req.body.password;

   new_test.save(function(err, test) {
   if (err)
   {
      console.log("Erro: " + err);
      res.send(err);
   }
   res.json(test);
   });
};
exports.read_a_test = function(req, res) {
   Test.findById(req.params.testId, function(err, test) {
   if (err)
      res.send(err);
   res.json(test);
   });
};
exports.update_a_test_open = function(req, res) {
   Test.findOneAndUpdate({_id: req.params.testId}, req.closed, {new: true}, function(err, test) {
   if (err)
      res.send(err);
   res.json(test);
   });
};
exports.delete_a_test = function(req, res) {
   Test.remove({
      _id: req.params.testId
   }, function(err, test) {
   if (err)
      res.send(err);
   res.json({ message: 'Test successfully deleted' });
   });
};


//Novos
exports.list_all_tests_by_userId = function(req, res) {
   Test.find({id_user: req.params.userId}, function(err, test) {
      if (err)
         res.send(err);
      res.json(test);
   });
};