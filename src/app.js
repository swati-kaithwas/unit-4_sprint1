const  express = require("express");
const  mongoose = require("mongoose");
const connect =  require("./configs/db");
 const  User =  require("./models/user.model");
 const  Company =  require("./models/company.model");
 const  Worker =  require("./models/worker.model");
 const  Skill =  require("./models/skill.model");

const app = express();
app.use(express.json());//midlle


const usersController = require("./controllers/users.controllers");
const companysController = require("./controllers/companys.controllers");
const skillsController = require("./controllers/skills.controllers");
const workersController = require("./controllers/workers.controllers");

app.use("/users",usersController);
app.use("/companys",companysController);
app.use("/skills",skillsController);
app.use("/workers",workersController);

module.exports = app;