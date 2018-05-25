var urls = require('./url')
var u = require('./controllers/user-controller.js')
const h = require('./routes/helper.js')
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
                    expired_when = access_token['expired_when'] * 1000
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
                //    res.json(data)
                   if(data.statusCode==200){
                    console.log(data.response._id)

                        if (data.response.profile != "") {
                            user_id = data.response['_id']
                            img_path = h.uploadDir(user_id)
                            h.base64img(data.response.profile, `.${img_path}`)
                            data.response.profile = img_path
                        }
                        req.session[user_id] = data.response
                        req.session.save()
                        next()
                   }else{
                       res.redirect('/')
                   }

               }).catch((err)=>{
                   console.log(err)
                res.send(err)
               })
            }

        } else {
            res.redirect('/login')
        }
    }
}