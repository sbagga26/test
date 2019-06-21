const route = require('express').Router()
var request = require('request');
var namechange= require('../common/NameChange')
var common= require('../common/genericfuntionality')



//change name
route.post('/api/updatename',(req,res)=>{

    var namechnagepayload
    
        var attachmentpayload=namechange.attachmentpayload(req)
        console.log(attachmentpayload)
        common.postRequest(`${process.env.QA_URL}/upsert?$format=json`,req.body.Token,attachmentpayload).then(function (body) {
            // do something with body1
            console.log(body.d[0].key)
            var attachmentid
            attachmentid=body.d[0].key
            attachmentid=attachmentid.replace("Attachment/attachmentId=", "")
            namechnagepayload=namechange.updatenamepayload(req,attachmentid)
            console.log(namechnagepayload);
            return common.postRequest(`${process.env.QA_URL}/upsert?workflowConfirmed=true&$format=json`,req.body.Token,namechnagepayload);
        }).then(function (body2) {
            // do something with body2
            res.status(200).send(body2).json();
      
        });  
    
})


module.exports = route