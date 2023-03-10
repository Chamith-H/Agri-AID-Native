const express = require("express");
const router = express.Router();
const dataModel = require("../Models/Cultivation_Model")

//API-01
//save cultivation
router.route("/addCultivation").post((req, res) => {

    const mongoDocument = new dataModel({
        farmer:req.body.farmer,
        crop:req.body.crop,
        dateAdd:req.body.add,
        dateEnd:req.body.end
    })

    const response = mongoDocument.save()
    response != null ?
        res.send('1') :res.send('0')
})


//API-02
//Get cultivated data
router.route("/getCultivation").post( async(req, res) => { 
    try {
        
        const crops = await dataModel.find({farmer:req.body.farmer})

        if(crops != null) {
            res.json(crops)
        }

    }

    catch (error) {
        res.send('Error: ' +error)
    }
})


//API-03
//Remove cultivation
router.route("/deleteCultivation").post( async(req, res) => { 
    
    try {
        
        const remove = await dataModel.deleteOne({farmer:req.body.farmer, crop:req.body.crop})

        if (remove.deletedCount === 1) {
            res.status(200).json({ message: "Deleted" });
        } 
        
        else {
            res.status(404).json({ message: "Cannot be deleted" });
        }

    }

    catch (error) {
        res.send('Error: ' +error)
    }
})

module.exports = router