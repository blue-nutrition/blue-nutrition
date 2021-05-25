const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/salut";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Successfully connected to MongoDB.');
})
.catch((err) => {
  console.error(err);
})
require('./models/food.js');
require('./models/users.js');
require('./models/water.js');
require('./models/weight.js');
let db = mongoose.connection;
module.exports = { db }