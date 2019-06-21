const request = require('request');

//send POST request in sync
function postRequest(url,token,data) {
    try{
    return new Promise(function (resolve, reject) {
        request({
            url: url,
            json:data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST'
            }, function (error, response, body) {
            if (!error && response.statusCode >= 200) {
                
                resolve(body);
            } else {
                console.log(error)
                reject(error);
            }
        });
    });
}
catch(error)
{
    throw error
}
}


module.exports=
{
    postRequest
    
}