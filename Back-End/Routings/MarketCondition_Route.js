const express = require("express");
const router = express.Router();
const dataModel = require("../Models/MarketCondition_Model")

//API-01
//save iten data to the Cart
router.route("/condition").post((req, res) => {

    console.log("working")

    const mongoDocument = new dataModel({
        name: 'Lettuce (Iceberg)',
        current:{
            price:200,
            demand:15000,
            supply:10000
        },

        Quarter:[
            {
                price:200,
                demand:15000,
                supply:10000
            },

            {
                price:180,
                demand:13000,
                supply:11000
            },

            {
                price:220,
                demand:18000,
                supply:12000
            },

            {
                price:290,
                demand:19000,
                supply:17000
            },
        ]
    })

    const response = mongoDocument.save()
    response != null ?
        res.send('1') :res.send('0')
})

//API 2 Get crop Data
router.route("/marketConditions").post( async(req, res) => { 
    const crop = req.body.name
    
    if(req.body.type == 'foretasted') {
        let quarter = 0

        switch (req.body.quarter) {
            case "January - April": quarter = 0; break;
            case "April - July": quarter = 1; break;
            case "July - October": quarter = 2; break;
            case "October - January": quarter = 3; break;
            default: console.log('_ERROR'); break;
        }

        if(quarter >= 0 && quarter <= 3) {
            try {
                const foretastedData = await dataModel.findOne({name:crop})
                res.send(foretastedData.Quarter[quarter])
            }

            catch {

            }
        }
    }

    else {
        try {
            const currentData = await dataModel.findOne({name:crop})
            res.send(currentData.current)
        }

        catch {

        }
    }

})

module.exports = router