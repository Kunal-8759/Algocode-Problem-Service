//define mongodb schema-->you can read
const mongoose = require('mongoose');
//logical view of the schema
const problemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title cannot be empty']
    },
    description:{
        type:String,
        required:[true,'Description cannot be empty']
    },
    difficulty:{
        type:String,
        required:[true,'difficulty cant be empty'],
        enum:['Easy','Medium','Hard'],
        default:'Easy'
    },
    testCases:{
        input:{
            type:String,
            required:true
        },
        output:{
            type:String,
            required:true
        }
    },
    editorial:{
        type:String
    }
});

const Problem=mongoose.model('Problem',problemSchema);
//by this mongoose model object we can add query to the collectionusing orm or odm
module.exports={
    Problem
}