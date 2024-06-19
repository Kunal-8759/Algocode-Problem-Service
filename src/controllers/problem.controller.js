const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');



function addProblem(req,res){
    try{
        //if nothing implemented
        throw new NotImplemented('addProblem');
    }
    catch(err){
        next(err);//calling the next middleware which is errorHandler
    }
}
function getProblem(req,res){
    try{
        //if nothing implemented
        throw new NotImplemented('getProblem');
    }
    catch(err){
        next(err);//calling the next middleware which is errorHandler
    }
}
function deleteProblem(req,res){
    try{
        //if nothing implemented
        throw new NotImplemented('deleteProblem');
    }
    catch(err){
        next(err);//calling the next middleware which is errorHandler
    }
}
function getProblems(req,res){
    try{
        //if nothing implemented
        throw new NotImplemented('getProblems');
    }
    catch(err){
        next(err);//calling the next middleware which is errorHandler
    }
}
function updateProblem(req,res){
    try{
        //if nothing implemented
        throw new NotImplemented('updateProblem');
    }
    catch(err){
        next(err);//calling the next middleware which is errorHandler
    }
}

module.exports={
    addProblem,
    getProblem,
    deleteProblem,
    getProblems,
    updateProblem
}