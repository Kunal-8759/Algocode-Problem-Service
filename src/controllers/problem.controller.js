const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');


function problemController(req,res){
    return res.json({message:'i am ok'});
}

function addProblem(req,res){
    try{
        //if nothing implemented
        throw new NotImplemented('addProblem');
    }
    catch(err){
        next(err);//calling the next middleware
    }
}
function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"not implemented"
    });
}
function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"not implemented"
    });
}
function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"not implemented"
    });
}
function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"not implemented"
    });
}

module.exports={
    addProblem,
    getProblem,
    deleteProblem,
    getProblems,
    updateProblem,
    problemController
}