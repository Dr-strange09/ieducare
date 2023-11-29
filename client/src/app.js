const express = require("express")
const hbs = require("hbs")

const mongoose = require("mongoose")
const path=require('path')
const bodyParser=require('body-parser')

const app = express();
const routes = require('./routes/main')// router import
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service=require("./models/Service")
// static will points towards public folder
app.use(bodyParser.urlencoded({
    extended:true
}))   
app.use('/static', express.static("public"))
app.use('', routes) //router import

// template engine to specified default engine and extension
 app.set('view engine', 'hbs')
 

 


app.set("views","views")


// to connect partials element to main page
hbs.registerPartials("views/partials")


// db connection
mongoose.connect("mongodb://localhost:27017/website_h", () => {
    console.log("db is connected")
//     Service.create([
//         {
//         icon:'fab fa-accusoft',
//         title:'We Provide Best Education',
//         description:'We Provide best Courses for placement',
//         linkText:'https://www.learncodewithhitesh.com',
//         link:'Check'
//     },
//     {
//         icon:'fab fa-affiliateheme',
//         title:'Best Coding Course',
//         description:'We Provide best Courses for placement and Internship',
//         linkText:'https://www.learncodewithhitesh.com',
//         link:'Check'
//     },
//     {
//         icon:'fab fa-affiliateheme',
//         title:'Best Coding Course hai',
//         description:'We Provide best Courses for placement and Internship',
//         linkText:'https://www.learncodewithhitesh.com',
//         link:'Check'
//     }
// ])

    // Slider.create([
    //     {
    //         title: 'learn html very easily',
    //         subTitle: "html is easy",
    //         imageUrl: "/static/images/s1.jpeg"
    //     },
    //     {
    //         title: 'learn css very easily',
    //         subTitle: "css is easy",
    //         imageUrl: "/static/images/s2.jpeg"
    //     },
    //     {
    //         title: 'learn python very easily',
    //         subTitle: "python is easy",
    //         imageUrl: "/static/images/s3.jpg"
    //     },
    // ])
    // Detail.create({
    //     brandName:"Ieducare",
    //     brandIconUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Furl&psig=AOvVaw2X48nu2tGaMXzCRBTu7Tbx&ust=1697859606971000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOC8xIzag4IDFQAAAAAdAAAAABAE",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us "
    //         },
    //     ]
    // })
})
mongoose.con

app.listen(process.env.PORT | 5556, () => {
    console.log('server started ')
});


