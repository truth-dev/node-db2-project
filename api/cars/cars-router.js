// DO YOUR MAGIC
const express = require('express')

const router = express.Router();
const Cars = require("./cars-model");
const { checkCarId, checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique } = require('./cars-middleware')

    const message = 'oops its the servers fault'

    router.get('/',   (req,res) => {
     Cars.getAll()
     .then(cars => {
        res.josn(cars)
     })
     .catch(err => {
        res.status(500).json({
            message:`Failed to retrieve cars: ${err.message}`
        })
     })
    })

    router.get('/:id', (req , res) => {
    const {id} = req.params;
    Cars.get(id) 
    .then((Cars) => {
        if(Cars) {
            res.status(200).json(Cars)
        }else {
            res.status(404).json({
                message:'Cars not found'
            })
        }
    }) .catch((err) => {
        res.status(500).json({
            error: err.message, message 
        })
    })
    })

    router.post('/', checkCarId, 
    checkCarPayload, checkVinNumberUnique, 
    checkVinNumberValid, (req, res) => {
    
     const newCar = req.body; 
     Cars.insert(newCar)
     .then((car) => {
       if(!car) {
        res.status(400).json({
            message: 'couldnt post the car'
        })
       }else{
        res.status(201).json(car)
       }
     }) .catch((err) => {
        res.status(500).json({
            error: err.message, message
        })
     })
     

    })
    module.exports = router;