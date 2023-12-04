const express = require("express")

const carRouter = require('./cars/cars-router.js');

const server = express()

server.use(express.json());

server.use('/api/cars', carRouter)

server.use('*', (req,res) =>{
    res.status(404). json({
        message: `cant find ${req.method} on ${req.originalUrl}`
    })
   
})


module.exports = server
