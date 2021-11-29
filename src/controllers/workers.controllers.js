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