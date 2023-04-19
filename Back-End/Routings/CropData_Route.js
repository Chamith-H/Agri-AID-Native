const express = require("express");
const router = express.Router();
const dataModel = require("../Models/CropData_Model")

const Capsicum = require("../DataSets/Capsicum")
const Chili = require("../DataSets/Chili")

//API-01
//save crop data to the database
router.route("/add").post( async(req, res) => {

    const mongoDocument = new dataModel(Chili)

    const response = await mongoDocument.save()
    response != null ?
        res.send('1') :res.send('0')
})


//API 2 - Get crop names
router.route("/cropList").get( async(req, res) => { 
    try {
        const crops = await dataModel.distinct('name')

        if(crops != null) {
            res.json(crops)
        }

    }

    catch (error) {
        res.send('Error: ' +error)
    }
})

//API 3 - Get crop Data with all details
router.route("/allCrops").post( async(req, res) => { 
    try {
        const crops = await dataModel.find({})

        if(crops != null) {
            res.send(crops)
        }

    }

    catch (error) {
        res.send('Error: ' +error)
    }
})

//API 4 - Get selected crop data set by name
router.route("/selectedCrop").post( async(req, res) => { 
    try {
        const crop = await dataModel.find({name:req.body.name})

        if(crop != null) {
            res.send(crop)
        }
    }

    catch (error) {
        res.send('Error: ' +error)
    }
})

module.exports = router