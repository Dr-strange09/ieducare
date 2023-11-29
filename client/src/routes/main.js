const express = require('express')
const { route } = require("express/lib/application")
const async=require("hbs/lib/async")
const Contact=require("../models/Contact")
const Service=require("../models/Service")
const Detail = require("../models/Detail");
const Slider = require("../models/Slider");




const routes = express.Router()

routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ "_id": "6537a6d5505a6d5d8ab38720" })
    const slides = await Slider.find()
    const services=await Service.find()
    //    console.log(details)
    // console.log(slides)
    res.render("index", {
        details: details,
        slides:slides,
        services:services

    });
});
routes.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({ "_id": "6537a6d5505a6d5d8ab38720" })
    res.render("gallery ", {
    details: details,
        
       
    });
});


// process contact form
routes.post("/process-contact-form",async(req,res)=>{
    console.log("this form is submitted")
    console.log(req.body)
    // saved data to db
    try{
        const data=await Contact.create(req.body)
        console.log(data)
        res.redirect("/")

    }catch(e)
    {
        console.log(e)
        res.redirect("/")
    }
})

module.exports = routes