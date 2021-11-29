const  express = require("express");
const  Worker =  require("../models/worker.model");
const router = express.Router();

router.post("", async (req,res) => {
    try {
        const worker = await Worker.create(req.body);

        return res.status(201).send(worker);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });

    }
});

router.get("", async (req, res) => {
    try{
        const workers = await Worker.find().lean().exec();
        return res.send({ workers });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/skill", async (req, res) => {
    try{
        const workers = await Worker.find({"skill_id":"61a4b3fae235aa29fccb4993"}).lean().exec();
        return res.send({ workers });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("/workfrom_home", async (req, res) => {
    try{
        const workers = await Worker.find({"workfrom_home":"yes"}).lean().exec();
        return res.send({ workers });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});
router.get("/notice", async (req, res) => {
    try{
        const workers = await Worker.find({"notice_period":"2 months"}).lean().exec();
        return res.send({ workers });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/rating", async (req, res) => {
    try{
        const workers = await Worker.find().sort({"ratings":1}).lean().exec();
        return res.send({ workers });
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});
router.get("/:id", async (req, res) => {
    try{
        const workers = await Worker.findById(req.params.id).lean().exec();
        return res.send(worker);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


router.patch("/:id", async (req, res) => {
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



router.delete("/:id", async (req, res) => {
    try{
        const workers = await Worker.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(worker);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports = router;