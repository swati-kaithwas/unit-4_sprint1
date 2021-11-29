const  express = require("express");
const  Company =  require("../models/company.model");
const router = express.Router();


router.post("", async (req,res) => {
    try {
        const company = await Company.create(req.body);

        return res.status(201).send(company);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });

    }
});

router.get("", async (req, res) => {
    try{
        const companys = await Company.find().lean().exec();
        return res.send({ companys });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("/openings", async (req, res) => {
    try{
        const companys = await Company.find().sort({"openings":1}).lean().exec();
        return res.send( companys[companys.length-1]);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/:id", async (req, res) => {
    try{
        const companys = await Company.findById(req.params.id).lean().exec();
        return res.send(company);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


router.patch("/:id", async (req, res) => {
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



router.delete("/:id", async (req, res) => {
    try{
        const companys = await Company.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(company);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports = router;