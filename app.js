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

app.post("/companys", async (req,res) => {
    try {
        const company = await Company.create(req.body);

        return res.status(201).send(company);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });

    }
});

app.get("/companys", async (req, res) => {
    try{
        const companys = await Company.find().lean().exec();
        return res.send({ companys });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


app.get("/companys/: id", async (req, res) => {
    try{
        const companys = await Company.findById(req.params.id).lean().exec();
        return res.send(company);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


app.patch("/companys/: id", async (req, res) => {
    try{
        const companys = await Company.findByIdAndUpdate(req.params.id,req.body, {
            new: true,
        })
        .lean()
        .exec();
        return res.status(201).send(company);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});



app.delete("/companys/: id", async (req, res) => {
    try{
        const companys = await Company.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(company);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});

//worker crud

app.post("/workers", async (req,res) => {
    try {
        const worker = await Worker.create(req.body);

        return res.status(201).send(worker);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });

    }
});

app.get("/workers", async (req, res) => {
    try{
        const workers = await Worker.find().lean().exec();
        return res.send({ workers });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


app.get("/workers/: id", async (req, res) => {
    try{
        const workers = await Worker.findById(req.params.id).lean().exec();
        return res.send(worker);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


app.patch("/workers/: id", async (req, res) => {
    try{
        const workers = await Worker.findByIdAndUpdate(req.params.id,req.body, {
            new: true,
        })
        .lean()
        .exec();
        return res.status(201).send(worker);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});



app.delete("/workers/: id", async (req, res) => {
    try{
        const workers = await Worker.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(worker);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});
//crud skill

app.post("/skills", async (req,res) => {
    try {
        const skill = await Skill.create(req.body);

        return res.status(201).send(skill);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });

    }
});

app.get("/skills", async (req, res) => {
    try{
        const skills = await Skill.find().lean().exec();
        return res.send({ skills });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


app.get("/skills/: id", async (req, res) => {
    try{
        const skills = await Skill.findById(req.params.id).lean().exec();
        return res.send(skill);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


app.patch("/skills/: id", async (req, res) => {
    try{
        const skills = await Skill.findByIdAndUpdate(req.params.id,req.body, {
            new: true,
        })
        .lean()
        .exec();
        return res.status(201).send(worker);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});



app.delete("/skills/: id", async (req, res) => {
    try{
        const skills = await Skill.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(skill);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});




app.listen(2567, async function () {
    console.log("listening on port 2567");
})