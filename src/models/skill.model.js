const mongoose = require("mongoose");





const skillSchema = new mongoose.Schema(
    {
        company_name: {type:String, required: true},
        company_type: {type: String,required:true},
        job_skill: {type:String,required:true},
        job_type: {type:String,required:true},
        user_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "user",
         required: true,
        },
     company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required: true,
     },
      
        
    },
    {
        versionKey: false,
        timestamp: true,
    }
);
module.exports = mongoose.model("skill",skillSchema);//company
