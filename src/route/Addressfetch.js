const route = require('express').Router()
var request = require('request');


//get employee address from SF
route.post('/api/getempaddress', (req, res) => {
    try {
          
        request.get({
        url: `${process.env.QA_URL}/PerAddressDEFLT?$filter=personIdExternal eq ${req.body.userId} &$format=json`,
        headers: {
        'Authorization': `Bearer ${req.body.Token}`
      },
    method: 'GET'
    }, function callback(error, response, body) {
        if (!error && response.statusCode >= 200) {
            console.log(body);
            var res_result = JSON.parse(body);
            console.log(res_result)
            var resultjson = [];
                res_result.d.results.forEach(element => {
                resultjson.push({
                    "addressType": element.addressType, 
                    "address1": element.address1,
                    "address2":element.address2,
                    "address3":element.address3,
                    "state":element.state,
                    "city":element.city,
                    "country":element.country,
                    "zipCode":element.zipCode
                   
                    });
                                     
                });
            
            res.status(200).send(resultjson).json();
          
                        
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



    //get employee address
route.post('/api/getempaddress', (req, res) => {
    try {
          
        request.get({
        url: `${process.env.QA_URL}/PerAddressDEFLT?$filter=personIdExternal eq ${req.body.userId} &$format=json`,
        headers: {
        'Authorization': `Bearer ${req.body.Token}`
      },
    method: 'GET'
    }, function callback(error, response, body) {
        if (!error && response.statusCode >= 200) {
            console.log(body);
            var res_result = JSON.parse(body);
            console.log(res_result)
            var resultjson = [];
                res_result.d.results.forEach(element => {
                resultjson.push({
                    "addressType": element.addressType, 
                    "address1": element.address1,
                    "address2":element.address2,
                    "address3":element.address3,
                    "state":element.state,
                    "city":element.city,
                    "country":element.country,
                    "zipCode":element.zipCode
                   
                    });
                                     
                });
            
            res.status(200).send(resultjson).json();
          
                        
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



    //get list of country from SF
route.post('/api/getcountry', (req, res) => {
    try {
          
        request.get({
        url: `${process.env.QA_URL}/Territory?$format=json`,
        headers: {
        'Authorization': `Bearer ${req.body.Token}`
      },
    method: 'GET'
    }, function callback(error, response, body) {
        if (!error && response.statusCode >= 200) {
            console.log(body);
            var res_result = JSON.parse(body);
            console.log(res_result)
            var resultjson = [];
                res_result.d.results.forEach(element => {
                resultjson.push({
                    "territoryCode": element.territoryCode, 
                    "territoryName": element.territoryName
                                  
                    });
                                     
                });
            
            res.status(200).send(resultjson).json();
          
                        
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


    //get picklist value from SF
route.post('/api/getpicklistvalue', (req, res) => {
    try {
          var url=`${process.env.QA_URL}/Picklist('${req.body.picklistid}')/picklistOptions?$format=JSON&$filter=status eq 'ACTIVE'`
        request.get({
        url: url,
        headers: {
        'Authorization': `Bearer ${req.body.Token}`
      },
    method: 'GET'
    }, function callback(error, response, body) {
        if (!error && response.statusCode >= 200) {
            console.log(body);
            var res_result = JSON.parse(body);
            console.log(res_result)
            var resultjson = [];
                res_result.d.results.forEach(element => {
                resultjson.push({
                    "uri":element.__metadata.uri,
                    "id": element.id, 
                    "externalCode": element.externalCode
                                  
                    });
                                     
                });
            
            res.status(200).send(resultjson).json();
          
                        
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