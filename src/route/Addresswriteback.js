const route = require('express').Router()
var request = require('request');
var common= require('../common/AddressChange')




//Update Address
route.post('/api/updateaddress', (req, res) => {
    try {
var data=common.addresspayload(req)
console.log(data)
        request.post({
        url:`${process.env.QA_URL}/upsert?$format=json`,
        json:data,
        headers: {
        'Authorization': `Bearer ${req.body.Token}`
        },
    method: 'POST'
    }, function callback(error, response, body) {
        if (!error && response.statusCode >= 200) {
            console.log(body)                  
            res.status(200).send(body).json()
                                
        }
        else {
            res.status(500).send(error)
        }
    });
   } 
   catch (error) {
    throw error;     
   }
    });



    

module.exports = route