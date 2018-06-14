'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var answersSchema = new Schema({
   id_test: { 
      type: Schema.Types.ObjectId, ref: 'Test'
   },
   id_user: {
      type: Schema.Types.ObjectId, ref: 'User'
   },
   answers: [{ type: String }]
   
});
module.exports = mongoose.model('Answers', answersSchema);