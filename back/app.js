const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors=require("cors")
const app = express();
app.use(bodyParser.json());
require('dotenv').config()
app.use(cors(
    {
        origin:"https://jsnewsletter.vercel.app"
    }
))
app.get('/',(req,res)=>{
    res.status(200).json("Hello");
})

app.post("/signup", function(req, res) {
    const firstn = req.body.first;
    const lastn = req.body.last;
    const mail = req.body.email;
    const add=req.body.address;
    const phoneno=req.body.ph;
    const data = {
        members: [
            {
                email_address: mail,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstn,
                    LNAME: lastn,
                    ADDRESS:add,
                    PHONE:phoneno
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = process.env.URL;
    const options = {
        method: 'POST',
        headers: {
            'Authorization': process.env.KEY,  
            'Content-Type': 'application/json'
        },
        data: jsonData,
        url
    };

    axios(options)
        .then(response => {
            console.log(response);
            
            res.json({ message: "Successfully subscribed!" });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: "An error occurred while signing up." });
        });
});

app.listen(8000, function() {
    console.log("Server is running on port 8000");
});
