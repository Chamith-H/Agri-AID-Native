const express = require("express");
const router = express.Router();
const dataModel = require("../Models/HarvestRecord_Model")

//API-01
//save harvested record data
router.route("/record").post( async(req, res) => {

    try {
            const harvest_Record = new dataModel({
                farmer:req.body.farmer,
                crop:req.body.crop,
                start:req.body.start,
                harvested:req.body.harvested,
                quantity:req.body.quantity,
                quality:req.body.quality
            })

            const response = await harvest_Record.save()
            response != null ?
                res.send('1') :res.send('0')
     
    }

    catch (error) {
        res.send('Error: ' +error)
    }
})

module.exports = router;