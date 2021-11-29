const  express = require("express");
const  mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/");
};

const app = express();
app.use(express.json());//midlle

app.listen(2567, async function () {
    console.log("listening on port 2567");
})