// 
const express = require('express')
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const Person = require('./models/person')


// const logRequest = (req , res , next )=>{
//   console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`)
//   next();
// }

// app.use(logRequest);



passport.use(new LocalStrategy(async(UESRNANE , password , done)=>{
 

  try{
    console.log('Recived credentials :',UESRNANE , password );
    const user = await Person.findOne({username : UESRNANE});

    if(!user){
      return done(null , false , {message :`Incorrect usename`});
    }
        

    const isPasswordMatch = user.password === password ? true : false;
    if(isPasswordMatch){
          return done(null , user)
    }
    else{
        return done(null , false , {message : `Incorrect Password`});
    }

  }catch(err){
    console.log(err)
      return done(err);
  }

}))

app.use(passport.initialize());

app.get('/', passport.authenticate('local' , {session : false}) ,function (req, res) {
  res.send('Hello Welcome to my Hotel')
})






// app.get('/ram' , (req , res)=>{
//   res.send('hiii')
// })

// app.get('/idli', (req , res)=>{
//   var customized_idli = {
//     name : "rava idli",
//     size : '10cm diameter',
//     is_sambhar : true,
//     is_chutney: false
//   }
//   res.send(customized_idli);
// })


const personRoutes = require('./routes/personRoutes');
// const Person = require('./models/person');
app.use('/person' , passport.authenticate('local' , {session : false}), personRoutes);




app.listen(PORT , ()=>{
  console.log("server is listening on port 3000");
})