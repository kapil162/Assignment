const employeeModel = require("../models/employee");

exports.deleteEmployee = async(req,res)=>{
    try {
        const deleteData = await employeeModel.findByIdAndDelete(req.params.id);
        console.log(deleteData);
        res.status(200).json({result: true})
    } catch (error) {
        res.status(201).json({message:error.message})
    }
}