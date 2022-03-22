const mongoose = require('mongoose');

// We will want server to start up only when db is connected, else we want server to be killed.

const connectDB = (url)=>{
    mongoose.connect(url);
}

module.exports = connectDB;