// 
const express = require('express')
const app = express();
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const db = require('./db');
require('dotenv').config();
const passport = require('./auth')
const PORT = process.env.PORT || 3000;
// const Person = require('./models/person')


// const logRequest = (req , res , next )=>{
//   console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`)
//   next();
// }

// app.use(logRequest);





app.use(passport.initialize());

const localAuthMiddleware =  passport.authenticate('local' , {session : false})

app.get('/',function (req, res) {
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
app.use('/person' , localAuthMiddleware, personRoutes);




app.listen(PORT , ()=>{
  console.log("server is listening on port 3000");
})