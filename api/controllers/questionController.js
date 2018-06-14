'use strict';
var mongoose = require('mongoose'),
Question = mongoose.model('Question');

var fs = require('fs'),
readline = require('readline');
//var parse = require('csv-parse');
//var jQuery = require('jquery');
//var $ = jQuery; 
//$.csv = require('jquery-csv');

exports.list_all_questions = function(req, res) {
   Question.find({}, function(err, question) {
      if (err)
      res.send(err);
      res.json(question);
   });
};
exports.create_a_question = function(req, res) {
   var new_question = new Question(req.topic, req.dificulty, req.question, req.answer, req.topics);
   new_question.save(function(err, question) {
   if (err)
      res.send(err);
   res.json(question);
   });
};
exports.read_a_question = function(req, res) {
   Question.findById(req.params.questionId, function(err, question) {
   if (err)
      res.send(err);
   res.json(question);
   });
};
exports.update_a_question = function(req, res) {
   Question.findOneAndUpdate({_id: req.params.questionId}, req.answer, {new: true}, function(err, question) {
   if (err)
      res.send(err);
   res.json(question);
   });
};
exports.delete_a_question = function(req, res) {
   Question.remove({
      _id: req.params.questionId
   }, function(err, question) {
   if (err)
      res.send(err);
   res.json({ message: 'Question successfully deleted' });
   });
};


//Novos
exports.questions_by_topic = function(req, res) {
   
   var disciplina = req.params.disciplina;
   var topics = req.body.topics;
   var index = 0;
   var readedQuestions = [];
   var MyData = [];
   var ok = false;
   var count = 0;

   console.log(topics);

   function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      var value = Math.floor(Math.random() * (max - min)) + min;
      
      if(readedQuestions.indexOf(value) == -1) return value;
      else return -1;
   }

   function MyCSV(F1, F2, F3, F4, F5, F6, F7, F8) {
      this.op1 = F1;
      this.op2 = F2;
      this.op3 = F3;
      this.op4 = F4;
      this.op5 = F5;
      this.d = F7;
      this.a = F8;
      this.q = F6;
   }; 

   for(index = 0; index < topics.length; index++)
   {

      var pathConfig = "./api/data/" + disciplina + "/" + topics[index] + "/files.config";

      var text = fs.readFileSync(pathConfig,'utf8');
      var n = parseInt(text);

      var randomInt = getRandomInt(1, n);
      while(randomInt == -1) randomInt = getRandomInt(1, n);

      var path = "./api/data/" + disciplina + "/" + topics[index] + "/" + randomInt;
      
      var lines = fs.readFileSync(path, 'utf-8')
      .split('\n')
      .filter(Boolean);
      
      var question = "";
      var i = 7;
      for(i = 7; i < lines.length; i++)
      {
         question = question + lines[i];
      }

      MyData.push(new MyCSV(lines[0], lines[1], lines[2], lines[3], lines[4], lines[5], lines[6], question));
   }

   console.log(MyData);
};