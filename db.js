const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL , {
  
})


const db = mongoose.connection;

db.on('connected' ,()=>{
  console.log("connected to MonoDB server")
})

db.on('error' , (err) =>{
  console.error("MonoBD connection error" , (err))
})

db.on('disconnected' , ()=>{
  console.log("MongoDB disconnected")
});

module.exports = db;