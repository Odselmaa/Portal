var request = require('request');
var urls = require('../url')
var fs = require('fs');

function extend_token(req, res, next_url, access_token) {

    var options = {
        uri: `${urls.API_URL}token`,
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${req.session.access_token.token}`
        },
        json: {
            "access_token": access_token.token
        }
    };
}

var send_request = function(options, callback) {
    request(options, function (error, response, body) {
        callback(error, response, body)
    });
};



module.exports = {
 
    send_request: function(options, callback) {
        request(options, function (error, response, body) {
            callback(error, response, body)
        });
    },
    base64img: function (raw, path) {
        var base64Data = raw.replace(/^data:image\/png;base64,/, "");
        fs.writeFile(path, base64Data, 'base64', function (err) {

        });
    },
    uploadDir: function (user_id) {
        p = `/public/uploads`
        //    
        //     if (!fs.existsSync( `..${p}`)) {
        //         fs.mkdirSync(`..${p}`);
        //     }
        return `${p}/${user_id}.jpg`
    },
    detectAjax: function (req, res, next) {
        if (req.xhr) {
            next()
        } else
            res.json('Direct access is restricted')
    }

}