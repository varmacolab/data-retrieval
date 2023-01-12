const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path'); 
const port = 80;

// For serving the static files 
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// set the template engine as pug
app.set('view engine','pug');

// Set the views directory
app.set('views', path.join(__dirname,'views'));

// our pug demo endpoint
app.get("/",(req,res)=>{
    const con  = "This is the best thing that I have ever seen";
    const params = {'title': 'PubG is a popular game', 'content': con}; 
    res.status(200).render('index.pug', params);
});

app.post("/", (req,res)=>{
    let name = req.body.name;
    let age  = req.body.age;
    let gender = req.body.gender;
    let outputWrite =  `The name of the client is ${name} and his/her age is${age} and his gender is ${gender}`;
    fs.writeFileSync('output.txt', outputWrite);

    const params = {'message':"You have successfully submitted the form file"};
    res.status(200).render('index.pug',params);
})

// app.get("/" ,(req,res)=>{
//  res.send("This is a home page in my website");
// });

// app.get("/about",(req,res)=>{
//     res.send("This is a about page in my website ");
// });

// app.post("/contact",(req,res)=>{
//     res.status(200).send("This about the contact page in my website");
// });

// app.get("/this", (req,res)=>{
//     res.status(404).send("Sorry no page is found");
// })

app.listen( port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

