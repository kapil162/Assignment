const request = require("request");
const express = require("express");

const router = express.Router();

const create_employee = require("../Api/CreateEmployee");
const find_employee = require("../Api/FindEmployee");
const update_employee = require("../Api/UpdateEmployee");
const delete_employee  = require("../Api/DeleteEmployee");

router.post("/createEmployee", create_employee.createEmploayee);
router.get("/findEmployee",find_employee.findEmployee);
router.get("/findEmployeeById/:id",find_employee.findEmployeeById)
router.patch("/updateEmployee/:id",update_employee.updateEmployee);
router.delete("/deleteemployee/:id",delete_employee.deleteEmployee);


module.exports=router;