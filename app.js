const express = require("express");
const app = express();
const path = require('path'); 
const port = 80;

// For serving the static files 
app.use('/static', express.static('static'));

// set the template engine as pug
app.set('view engine','pug');

// Set the views directory
app.set('views', path.join(__dirname,'views'));

// our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title: 'Hey Varma', message:"This is a tutorial knowing about the pug file" });
})

app.get("/" ,(req,res)=>{
 res.send("This is a home page in my website");
});

app.get("/about",(req,res)=>{
    res.send("This is a about page in my website ");
});

app.post("/contact",(req,res)=>{
    res.status(200).send("This about the contact page in my website");
});

app.get("/this", (req,res)=>{
    res.status(404).send("Sorry no page is found");
})

app.listen( port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

