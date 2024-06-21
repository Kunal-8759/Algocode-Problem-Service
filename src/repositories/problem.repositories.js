const { Problem }=require('../models/index');

class ProblemRepository{
    async createProblem(problemData){
        try{
            const problem=await Problem.create({
                title:problemData.title,
                description:problemData.description,
                testCases:(problemData.testCases)?problemData.testCases :[]
            });
            return problem;//after making the proble return the proble
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
}

module.exports=ProblemRepository;

