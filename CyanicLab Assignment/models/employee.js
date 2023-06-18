const { Schema, Types, model } = require("mongoose");

const employee = Schema(
    {
        Name:{
            type: String,
            default:""
        },
        Phone_number:{
            type: Number,
            default:""
        },
        Home_address:{
            City:{
                type: String,
                default:""
            },
            ZIP_Code:{
                type: Number,
                default:"" 
            },
            Address_line_1:{
                type: String,
                default:"" 
            }
        },
        Date_of_employmente:{
            type: String,
            default:""
        },
        Date_of_birth:{
            type: String,
            default:""
        },
        Deleted:{
            type:Boolean,
            default:false
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("employee", employee);
