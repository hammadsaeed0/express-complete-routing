const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const parPath = path.join(__dirname , "views/partial");

app.set('view engine', 'hbs');
hbs.registerPartials(parPath);
app.get("/", (req ,res)=>{
    res.render('index')
});
app.get('/about', (req, res )=>{
    res.render('about')
})
app.get("*", (req , res )=>{
    res.render('404' , {
        errorarea : "Opps Page Not Found"
    })
})
app.listen('8000', (err)=>{
    console.log("Listen Form 8000");
});