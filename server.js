// 
const express = require('express')
const app = express()
// require('./db')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const db = require('./db');
// require('dotenv').config();
// const PORT = process.env.PORT ||3000;


app.get('/', function (req, res) {
  res.send('Hello Welcome to my Hotel')
})

app.get('/ram' , (req , res)=>{
  res.send('hiii')
})

app.get('/idli', (req , res)=>{
  var customized_idli = {
    name : "rava idli",
    size : '10cm diameter',
    is_sambhar : true,
    is_chutney: false
  }
  res.send(customized_idli);
})


const personRoutes = require('./routes/personRoutes');
app.use('/person' , personRoutes);




app.listen(3000 , ()=>{
  console.log("server is listening on port 3000");
})