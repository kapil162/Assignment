const employeeModel = require("../models/employee");

exports.updateEmployee = async(req,res)=>{
    try {
        const updateData = await employeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        console.log(updateData); 
        res.status(200).json({result : true})
    } catch (error) {
        res.status(201).json({message: error.message})
    }
}
