const mongoose = require("mongoose");





const companySchema = new mongoose.Schema(
    {
        user_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "user",
         required: true,
        },
        openings:{type: Number, required: true},
      company_name: {type:String, required: true},
      company_type: {type: String,required:true},

      
        
    },
    {
        versionKey: false,
        timestamp: true,
    }
);
    module.exports = mongoose.model("company",companySchema);  //company

