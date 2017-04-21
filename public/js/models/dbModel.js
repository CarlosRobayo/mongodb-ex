var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/personas');

var user_schema = new Schema({
    email : String,
    password : String
});

var User = mongoose.model('Persona', user_schema);

module.exports.User = User;