const employeeModel = require("../models/employee");

exports.createEmploayee = async(req,res)=>{
    try {
        const data = await employeeModel.create(req.body);
        console.log(data);
        res.status(200).send({result: "true"})
    } catch (error) {
        res.status(201).send({message:error.message})
    }
}