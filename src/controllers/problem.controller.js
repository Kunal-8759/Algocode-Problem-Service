const logger = require('../config/logger.config');
const NotImplemented = require('../errors/notImplemented.error');
const { ProblemRepository } = require('../repositories');
const { ProblemService } = require('../services/index');
const {StatusCodes}=require('http-status-codes');


function pingProblemController(req, res) {
    logger.error("ping problem controller ko call kr diya hun");
    return res.json({message: 'Problem controller is up'});
}

//creating a object of problemService takes problem repository object
const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next) {
    try {
        console.log("incoming req body", req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    } catch(error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
    try {
        const problem=await problemService.getProblem(req.params.id);
        
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched the problem',
            error: {},
            data: problem
        })
    } catch(error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const problems=await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: problems
        })
    } catch(error) {
        next(error);
    }
}

async function deleteProblem(req, res, next) {
    try {
        const id=req.params.id;
        const problem=await problemService.deleteProblem(id);
        if(!problem){
            return res.status(StatusCodes.OK).json({
                success: true,
                message: `problem are not present with this id ${id}`,
                error: {},
                data: problem
            })
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted the problem',
            error: {},
            data: problem
          })
        }catch(error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}