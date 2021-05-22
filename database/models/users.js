const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //TODO: Write schema
})

const UserModel = mongoose.model('UserModel', UserSchema, 'users');

module.exports = UserModel