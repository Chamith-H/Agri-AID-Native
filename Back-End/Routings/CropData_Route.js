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

        stages : {
            one: {
                start:0,
                end:21,
                duration:3,
                image:'https://drive.google.com/uc?id=1H3wTL7KmtArnuOTGzIC60dn2k_PhThR3',
                description:'The crop starts from seeds that are sown in small pots. During this stage, the seeds germinate and grow into small seedlings. At this stage, the seedlings have small, green leaves and a thin stem.'
            },

            two: {
                start:21,
                end:42,
                duration:3,
                image:'https://drive.google.com/uc?id=1H3wTL7KmtArnuOTGzIC60dn2k_PhThR3',
                description:'During this stage, the plant grows rapidly and develops its leaves, stems, and roots. At this stage, the plant has several pairs of leaves, and the stem becomes thicker and stronger.'
            },

            three: {
                start:42,
                end:56,
                duration:2,
                image:'https://drive.google.com/uc?id=1H3wTL7KmtArnuOTGzIC60dn2k_PhThR3',
                description:'The plant starts to produce flowers at the end of the vegetative stage or the beginning of the flowering stage. During this stage, the flowers bloom, and pollination occurs. At this stage, the plant has small, white or yellow flowers.'
            },

            four: {
                start:56,
                end:84,
                duration:4,
                image:'https://drive.google.com/uc?id=1H3wTL7KmtArnuOTGzIC60dn2k_PhThR3',
                description:'After the flowers are pollinated, they start to develop, grow and mature into fruits. At this stage, the plant initially has small, green fruits that will eventually mature into fruits ready for harvest.'
            },

            five: {
                start:84,
                end:112,
                duration:4,
                image:'https://drive.google.com/uc?id=1H3wTL7KmtArnuOTGzIC60dn2k_PhThR3',
                description:'This is the final stage of the capsicum crop, where the mature fruits are harvested from the plant. During this stage, the fruits are shiny and firm and are greenish yellow in colour.'
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