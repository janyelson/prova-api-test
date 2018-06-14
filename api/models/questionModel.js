'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var questionSchema = new Schema({

   topic: { type: String },
   dificulty: { type: Number, min: 0, max: 2},
   question: { type: String },
   answer: { type: String },
   options: [{
      type: String,
      default: 'No option'
   }]
});
module.exports = mongoose.model('Question', questionSchema);