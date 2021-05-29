const mongoose = require('mongoose');
const uri = "mongodb://18.116.89.134:27017/salut";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false })
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
