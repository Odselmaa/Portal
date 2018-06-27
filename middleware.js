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
               var lang = req.params.language == undefined ? 'en' : req.params.language

               u.get_profile(access_token.token, user_id, lang)
               .then((data)=>{
                //    res.json(data)
                   if(data.statusCode==200){
                        if (data.response.profile != "" && data.response.profile!=undefined) {
                            user_id = data.response['_id']
                            img_path = h.uploadDir(user_id)
                            h.base64img(data.response.profile, `.${img_path}`)
                            data.response.profile = img_path
                        }
                        
                        req.session[user_id] = data.response
                        req.session.language = lang
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
    },
    verifyMiddleware: function(req, res, next){
        var current_user_id = req.session.access_token.user_id
        var user = req.session[current_user_id]
        var is_verified = user.verified_email != undefined
        var lang = req.params.language == undefined ? 'en' : req.params.language

        if(is_verified){
            next()
        }else{
            req.setLocale(lang)
            res.render('error/401', {lang:lang, i18n: res})
        }
    },
    onlyAdminMiddleware: function(req, res, next){
        var current_user_id = req.session.access_token.user_id
        var user = req.session[current_user_id]
        if(user.role._id == 1)
            next()
        else
            res.render('error/404', {lang:lang, i18n: res})

    }
}