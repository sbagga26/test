//Address change payload
function addresspayload(req)
{
    var addresschange={
        "__metadata": {
        "uri": "PerAddressDEFLT",
        "type": "SFOData.PerAddressDEFLT"
    },
    "startDate":'/Date('+req.body.startDate+')/',
    "personIdExternal":req.body.personIdExternal,
    "address1":req.body.address1,
    "address2":req.body.address2,
    "address3":req.body.address3,
    "addressType":req.body.addressType,
    "city":req.body.city,
    "state":req.body.state,
    "country":req.body.country,
    "zipCode":req.body.zipCode
    
}
    return addresschange
   
   
}

module.exports=
{
    addresspayload
    
}