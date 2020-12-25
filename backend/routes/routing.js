const express = require('express');
const routing = express.Router();
const service = require("../models/model");

routing.get("/setupDB", async(req, res, next) => {
    try {
        let data = await service.insertScript();
        if (data) { 
            res.status(201)
            res.json({ message: data })
        }
    } catch (err) { 
        console.log(err)
        next(err) }
})

routing.get("/getColleges",async(req,res,next)=>{
    try{
        await service.getAllColleges().then((data)=>{
            if(data){
                res.status(201)
                res.json(data)
            }
        })
    } catch (err) { next(err) }
})

routing.get("/similarColleges/:collegeId",async(req,res,next)=>{
    try{
        await service.getSimilarColleges(req.params.collegeId).then(data =>{
            if(data){
                res.status(201)
                res.json(data)
            }
        })
    }
    catch (err) { next(err) }
})

module.exports = routing;