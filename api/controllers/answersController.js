'use strict';
var mongoose = require('mongoose'),
Answers = mongoose.model('Answers');
exports.list_all_answersAll = function(req, res) {
	Answers.find({}, function(err, answers) {
      if (err)
      res.send(err);
      res.json(answers);
   });
};
exports.create_answers = function(req, res) {
   var new_answers = new Answers(req.id_test, req.id_user, req.answers);
   new_answers.save(function(err, answers) {
   if (err)
      res.send(err);
   res.json(answers);
   });
};
exports.read_answers = function(req, res) {
   Answers.findById(req.params.answersId, function(err, answers) {
   if (err)
      res.send(err);
   res.json(answers);
   });
};
exports.update_answers = function(req, res) {
   Answers.findOneAndUpdate({_id: req.params.answersId}, req.answers, {new: true}, function(err, answers) {
   if (err)
      res.send(err);
   res.json(answers);
   });
};
exports.delete_answers = function(req, res) {
   Answers.remove({
      _id: req.params.answersId
   }, function(err, answers) {
   if (err)
      res.send(err);
   res.json({ message: 'Answers successfully deleted' });
   });
};

//Novos
exports.read_answers_by_test = function(req, res) {
   Answers.find({id_test: req.params.testId}, function(err, answers) {
      if (err)
      res.send(err);
      res.json(answers);
   });
};