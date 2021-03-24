const router =require("express").Router();
const db =require("../models")
const mongoose =require("mongoose")

router.get("/api/workouts", function(req,res){
    db.Workout.find().then(function(data){
        res.json(data)
    })
})
 

router.put("/api/workouts/:id", function(req,res){
    const id =mongoose.Types.ObjectId(req.params.id)
    console.log(id, req.body)
    db.Workout.updateOne({_id: id},{
       $push :{
           exercises:req.body
       }
    }).then(function(data){
        res.json(data)
    })
})

router.post("/api/workouts", function(req,res){
    db.Workout.create(req.body).then(function(data){
        res.json(data)
    })
})

router.get(`/api/workouts/range`, function(req,res){
    db.Workout.find().then(function(data){
        res.json(data)
    })
})

module.exports=router