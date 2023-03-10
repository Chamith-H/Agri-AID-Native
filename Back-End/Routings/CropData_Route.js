const express = require("express");
const router = express.Router();
const dataModel = require("../Models/CropData_Model")

//API-01
//save iten data to the Cart
router.route("/add").post((req, res) => {

    const mongoDocument = new dataModel({
        id: 1,
        name : 'Capsicum (Prarthana)',
        image : 'IMAGE',
        period : 112,
        requirements: {
            Irrigation: 'Lorem ipsum dolor sit amet.',
            Fertilizer: 'Lorem ipsum dolor sit amet.',
            Pest_Threats: 'Lorem ipsum dolor sit amet.',
            Diseases: 'Lorem ipsum dolor sit amet.',
            Ideal_Cultivation_Locations: 'Lorem ipsum.',
            Ideal_Cultivation_Time: 'Lorem ipsum.',
            Maturity_Period: 'Lorem ipsum dolor.',
            Average_Yield: 'Lorem ipsum dolor.'
        },

        actions: {
            weeding: {
                        start : 7,
                        gap : 7,
                        end : 112
                     },

            soiling: {
                        start : 7,
                        gap : 7,
                        end : 112
                     },

            pruning: {
                        start : 42,
                        gap : 7,
                        end : 112
                     },

            irrigation: {
                        start : 7,
                        gap : 3,
                        end : 112
                     },

            fertilization: {
                        start : 7,
                        gap : 14,
                        end : 112
                     },

            harvesting: {
                        start : 84,
                        gap : 7,
                        end : 112
                     },
        },

        cultivation: [
            {
                stage: 'testing docs',
                weeding: 'testing docs',
                soil: 'testing docs',
                pruning: 'testing docs'
            },

            {
                stage: 'testing docs',
                weeding: 'testing docs',
                soil: 'testing docs',
                pruning: 'testing docs'
            },

            {
                stage: 'testing docs',
                weeding: 'testing docs',
                soil: 'testing docs',
                pruning: 'testing docs'
            },
        ],

        growth : [
            {
                stage: 'testing docs',
                irrigation: 'testing docs',
                fertiliation: 'testing docs',
                nutrient: 'testing docs',
                ambient: 'testing docs'
            },

            {
                stage: 'testing docs',
                irrigation: 'testing docs',
                fertiliation: 'testing docs',
                nutrient: 'testing docs',
                ambient: 'testing docs'
            },

            {
                stage: 'testing docs',
                irrigation: 'testing docs',
                fertiliation: 'testing docs',
                nutrient: 'testing docs',
                ambient: 'testing docs'
            },
        ],

        disease : [
            {
                stage:'test deaseas',
                aT1:'test',
                aT2:'test',
                dT1:'test',
                dT2:'test'
            },

            {
                stage:'test deaseas',
                aT1:'test',
                aT2:'test',
                dT1:'test',
                dT2:'test'
            },

            {
                stage:'test deaseas',
                aT1:'test',
                aT2:'test',
                dT1:'test',
                dT2:'test'
            }, 
        ],

        harvest : {
            time : 'paragraph',
            grading : 'paragraph',
            storage : 'paragraph',
            packing : 'paragraph',
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
    console.log(req.body.name)
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