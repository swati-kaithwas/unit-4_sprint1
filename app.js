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

//user crud
app.post("/users", async (req,res) => {
    try {
        const user = await User.create(req.body);

        return res.status(201).send(user);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });

    }
});

app.get("/users", async (req, res) => {
    try{
        const users = await User.find().lean().exec();
        return res.send({ users });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


app.get("/users/: id", async (req, res) => {
    try{
        const users = await User.findById(req.params.id).lean().exec();
        return res.send(user);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


app.patch("/users/: id", async (req, res) => {
    try{
        const users = await User.findByIdAndUpdate(req.params.id,req.body, {
            new: true,
        })
        .lean()
        .exec();
        return res.status(201).send(user);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});



app.delete("/users/: id", async (req, res) => {
    try{
        const users = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


//crud company
app.listen(2567, async function () {
    console.log("listening on port 2567");
})