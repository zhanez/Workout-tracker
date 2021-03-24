const mongoose =require ("mongoose");
const Schema =mongoose.Schema;
const workoutSchema =new Schema({
    day:{
        type: Date,
        default:new Date().setDate(new Date().getDate())
    },
    exercises:  Array
},
{
    toObject: {
    virtuals: true
    },
    toJSON: {
    virtuals: true 
    }
  })

workoutSchema
.virtual('totalDuration')
.get(function () {

    var sum = 0
    for(var i=0; i<this.exercises.length; i++){
        sum = sum + this.exercises[i].duration
    }

  return sum
});

const Workout =mongoose.model("Workout", workoutSchema)
module.exports =Workout