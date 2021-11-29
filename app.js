const  express = require("express");
const  mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/");
};
//userschema
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
const User =mongoose.model("user",userSchema);//user
//companyshema 

const companySchema = new mongoose.Schema(
    {
        user_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "user",
         required: true,
        },
      Company_name: {type:String, required: true},
      company_type: {type: String,required:true},

      
        
    },
    {
        versionKey: false,
        timestamp: true,
    }
);
const Company =mongoose.model("company",companySchema);//company


const workerSchema = new mongoose.Schema(
    {
        Company_name: {type:String, required: true},
        company_type: {type: String,required:true},
  
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
const Worker =mongoose.model("worker",workerSchema);//company


const skillSchema = new mongoose.Schema(
    {
        Company_name: {type:String, required: true},
        company_type: {type: String,required:true},
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
const Skill =mongoose.model("skill",skillSchema);//company

const app = express();
app.use(express.json());//midlle

app.listen(2567, async function () {
    console.log("listening on port 2567");
})