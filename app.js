const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors=require("cors")
const app = express();
app.use(bodyParser.json());
app.use(cors(
    {
        origin:"http://localhost:3000"
    }
))
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

    const url = 'https://us21.api.mailchimp.com/3.0/lists/bd24b69610';
    const options = {
        method: 'POST',
        headers: {
            'Authorization': 'auth 0080267197c35d41f194205da0d4b948-us21',  
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
