const mongoose = require('mongoose');
console.log("Starting mongoose test...");
mongoose.set('debug', true);
mongoose.connect('mongodb://127.0.0.1:27017/sewadproject', { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log("Connected!"))
  .catch(err => console.error("Error:", err));
