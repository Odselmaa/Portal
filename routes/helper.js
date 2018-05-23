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
    module.exports.send_request(options, function (error, response, body, req) {
        if(body.statusCode == 200){
            req.session.access_token = body.response
            res.redirect(next_url)
        }else{
            res.redirect('/login')
        }

    })
}

module.exports = {
    send_request: function (options, callback) {
        request(options, {timeout: 5000},function (error, response, body) {
            callback(error, response, body)
        });
    },

    logMiddleware: function (req, res, next) {
       
        if ("access_token" in req.session) {
            var user = req.session[req.session.user_id]
            if(user.blocked){
                res.redirect('/blocked')
            }else{
                access_token = req.session.access_token
                expired_when = access_token['expired_when']['$date']
                now = new Date().getTime()
                if (expired_when > now) {
                    next()
                } else {
                    extend_token(req, res, req.url, access_token)
                }
            }
        } else {
            res.redirect('/login')
        }
    },
    base64img: function(raw, path){
        var base64Data = raw.replace(/^data:image\/png;base64,/, "");
        fs.writeFile(path, base64Data, 'base64', function(err) {
          
        });
    },
    uploadDir: function(user_id){
       p = `/public/uploads`
    //    
    //     if (!fs.existsSync( `..${p}`)) {
    //         fs.mkdirSync(`..${p}`);
    //     }
        return  `${p}/${user_id}.jpg`
    },
    detectAjax: function(req, res, next) {
        if (req.xhr) {
          next()
        } else
          res.json('Direct access is restricted')
      }
      
}