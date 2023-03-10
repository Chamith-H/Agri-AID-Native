const express = require("express");
const router = express.Router();
const dataModel = require("../Models/CropData_Model")

//API-01
//save iten data to the Cart
router.route("/add").post((req, res) => {

    const mongoDocument = new dataModel({
        id: 2,
        name : 'Green Chilli (MI-1)',
        image : 'IMAGE',
        requirements: {
            Irrigation: 'Lorem ipsum dolor sit amet.',
            Fertilizer: 'Lorem ipsum dolor sit amet.',
            Pest_Threats: 'Lorem ipsum dolor sit amet.',
            Diseases: 'Lorem ipsum dolor sit amet.',
            Ideal_Cultivation_Locations: 'Lorem ipsum.',
            Ideal_Cultivation_Time: 'Lorem ipsum.',
            Maturity_Period: 'Lorem ipsum dolor.',
            Average_Yield: 'Lorem ipsum dolor.'
        }

    })

    const response = mongoDocument.save()
    response != null ?
        res.send('1') :res.send('0')
})

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

//API 2 Get crop Data
router.route("/recommendation").post( async(req, res) => { 
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

//API 2 Get selected crop
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