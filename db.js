const mongoose = require('mongoose');

  // const mongoURL = 'mongodb://localhost:27017/hotels';
  const mongoURL = 'mongodb+srv://sujitgupta9163:Sujit123@cluster0.crjns8t.mongodb.net/'


// const mongouri = process.env.MONGOBD_URL;
// const URL = process.env.MONGODB_URL;
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