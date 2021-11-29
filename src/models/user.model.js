const mongoose = require("mongoose");




const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true},
        last_name: { type: String, required: false},
        age:{ type:Number,required: true},
        email: {type:String,require: true, unique: true},
        gender: { type:String,required: false,default:"Female"},

        
    },
    {
        versionKey: false,
        timestamp: true,
    }
);
module.exports =mongoose.model("user",userSchema);//user