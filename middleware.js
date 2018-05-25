var urls = require('./url')
var u = require('./controllers/user-controller.js')
const request = require('request');

function extend_token(req, res, url, access_token){
    res.json({"bla":"bla"})
}

module.exports = {

    logMiddleware: function (req, res, next) {

        if ("access_token" in req.session) {
            access_token = req.session.access_token
            user_id = access_token.user_id
            if (user_id in req.session) {
                var user = req.session[user_id]
                if (user.blocked) {
                    res.redirect('/blocked')
                } else {
                    expired_when = access_token['expired_when']
                    now = new Date().getTime()
                    if (expired_when > now) {

                        next()
                    } else {
                        extend_token(req, res, req.url, access_token)
                    }
                }
            } else {

               //get profile
               u.get_profile(access_token.token, user_id)
               .then((data)=>{
                   res.json(data)
                //    if(data.statusCode==200){
                //         req.session[user_id] = data.body.response
                //         req.session.save()
                //         next()
                //    }else{
                //        res.redirect('/')
                //    }

               })
            }

        } else {
            res.redirect('/login')
        }
    }
}