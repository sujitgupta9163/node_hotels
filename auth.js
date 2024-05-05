const passport = require('passport');
const LocalStrategy = require('passport-local');
const Person = require('./models/person')


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

module.exports = passport;