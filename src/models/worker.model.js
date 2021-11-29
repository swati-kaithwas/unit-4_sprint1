const mongoose = require("mongoose");




const workerSchema = new mongoose.Schema(
    {
        company_name: {type: String, required: true},
        company_type: {type: String,required: true},
        ratings: {type: Number,required: true},
        notice_period: {type: String,required: true},
        workfrom_home: {type: String,required: false, default:"no"},
        city: {type: String,required: true},
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
     skill_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "skill",
        required: true,
     },
      
        
    },
    {
        versionKey: false,
        timestamp: true,
    }
);
module.exports =mongoose.model("worker",workerSchema);//company

