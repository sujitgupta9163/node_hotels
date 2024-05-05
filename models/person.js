const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name : {
    type : String , 
    require : true,
  },
  age : {
    require,
    type : Number,
  },

  work : {
    type : String,
    enum : ['chef' , 'waiter' , 'manager'],
    require : true,
  },

  mobile : {
    type : String,
    require : true,
    unique : true
  },
  email :{
  type : String,
  require: true,
  unique : true, 
  },
address : {
  type : String,
},

salary : {
  type : Number,
  require : true
},

username : {
  type : String,
  require : true
},

password : {
  type : String,
  require : true
}




});

const Person = mongoose.model('Person' , personSchema);
module.exports =Person;