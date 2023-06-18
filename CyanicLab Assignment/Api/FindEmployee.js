const employeeModel = require("../models/employee");

exports.findEmployee = async(req,res)=>{
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit); 
        const skipData = (page-1)*limit;
        // console.log(req.query.Deleted)

        const countData = await employeeModel.find({Deleted:req.query.Deleted}).count()
        const employeeData = await employeeModel.find({Deleted:req.query.Deleted}).skip(skipData).limit(limit);
        // console.log(employeeData);
        const data = {
            data:employeeData,
            countData:countData
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(201).json({message:error.message})
    }
}

exports.findEmployeeById = async(req,res)=>{
    try{
        const data = await employeeModel.findById(req.params.id)
        console.log(data)
        res.status(200).json({data:data})
    }catch (error) {
        res.status(201).json({message:error.message})
    }
}