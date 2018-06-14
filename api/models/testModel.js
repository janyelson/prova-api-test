'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var testSchema = new Schema({
   id_user: { 
      type: Schema.Types.ObjectId, ref: 'User'
   },
   name: { type: String, require: true },
   begin_date: {
      type: Date,
      default: Date.now
   },
   end_date: {
      type: Date,
      default: Date.now
   },
   topics: [String],
   password: { type: String}
});
module.exports = mongoose.model('Test', testSchema);