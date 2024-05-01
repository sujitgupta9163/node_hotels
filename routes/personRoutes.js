const express = require('express');
const router = express.Router();
const Person = require('./../models/person')

router.get('/' ,async(req , res)=>{
  try{
    const response = await Person.find();
    console.log("data fetch");
    res.status(200).json(response)

  }
  catch(err){
  console.log(err);
  res.status(500).json({erroe : "Internal servar Error"})
  }
})


router.post('/' , async(req ,res)=>{
  try{
    const data = req.body;
    console.log(data)

    const newPerson = new Person(data)
    const response = await newPerson.save();
    console.log("data save");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err.errmsg);
    res.status(500).json({error :err.errmsg})
  }
})


router.get('/:workType' , async(req , res)=>{
  try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'waiter' ||  workType == 'manager'){
      const response = await Person.find({work : workType});
      console.log("data fetch");
      res.status(200).json(response);
    }
    else{
      res.status(404).json({error : "Invalid Work Type"})
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : "Internal server Error"})
  }
})

router.put('/:id' , async (req , res)=>{
  try{
    const personId = req.params.id;
    const updatePersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId , updatePersonData , {
      new : true,
      runValidators : true,
    })

    if(!response){
      return res.status(404).json({error : "Person Not Found"})
    }

    console.log('data updated');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : "Internal Server Error"})
  }
})

router.delete('/:id' , async (req , res)=>{
  try{
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if(!response){
      return res.status(404).json(response);
    }
    console.log("data delete")
    res.status(200).json({message : "Successfully delete"});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : "Internal Server Error"})
  }
})


module.exports = router;