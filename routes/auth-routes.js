var body_parser = require("body-parser");

var h = require('./helper.js')
var i18n = require('../i18n/i18n.js')

var connection = require('./connection.js')
var i18n = require('../i18n/i18n.js')
var jwt = require('jsonwebtoken');

var router = connection.router

router.use(i18n.i18n.init)
router.use(body_parser.json())
router.use(body_parser.urlencoded({
  extended: false
}))


router.get(["/", '/:language(en|ru)'], h.logMiddleware, (req, res) => {
    // console.log(req.session.access_token)
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang);

    var current_user_id = req.session.user_id
    var user = req.session[current_user_id]
    var role_id = user.role['_id']

    if (role_id == 1)
        res.render('index_admin', {
            lang: lang,
            current_user_id: current_user_id,
            i18n: res
        })
    else
        res.render('index_user', {
            lang: lang,
            current_user_id: current_user_id,
            i18n: res
        })

})

router.get(["/login",'/login/:language(en|ru)'], (req, res) => {
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang)
    res.render('login', {i18n:res})
})

router.get(["/register",'/register/:language(en|ru)'], (req, res) => {
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang)
    res.render('register', {i18n:res})
})

router.post("/login", (req, res) => {
    var payload = jwt.sign(req.body, 'f*ckyou');
    var options = {
        uri: `${urls.API_URL}auth`,
        method: 'POST',
        json: {
            payload: payload
        }
    };
    h.send_request(options, function (error, response, body) {
        if (!error &&  response.statusCode == 200) {
            var access_token = body.response.access_token
            var user_id = body.response.user_id
            set_session(req.session, 'access_token', access_token)
            set_session(req.session, 'user_id', user_id)

            get_set_profile(req.session, user_id, () => {

              
                res.json({
                    
                    body: 'Successfully logged',
                    statusCode: response.statusCode
                })
            })
        } else {
            res.json({
                response
            })
        }
    })
})

router.get("/delete_users", (req, res) => {
    delete req.session.allu
    res.json({
        ok: 'ok'
    })
})

router.get("/logout", (req, res) => {

    io.emit('logged_out', {
        "user_id": req.session.user_id
    })
    delete connectedUsers[req.session.user_id];
    req.session.destroy(function (err) {
        // cannot access session here
    })
    req.session = null

    res.redirect('/login')
})


router.get("/register", (req, res) => {
    res.render('register')
})


router.post("/register", (req, res) => {
    // console.log(res)
    var payload = req.body
    payload.role = 2
    var my_token = jwt.sign(payload, 'f*ckyou');
    var options = {
        uri: `${urls.API_URL}user`,
        method: 'POST',
        json: {
            payload: my_token
        },
    };
    h.send_request(options, function (error, response, body, req) {
        if (!error &&  response.statusCode == 201) {
            res.status(201).json({
                'success': 'Successfully registered, please login',
                'statusCode': 201
            })
        } else {
            var payload = response.body
            payload['statusCode'] =  response.statusCode
            res.json(payload)
        }
    })
})
function get_set_profile(session, user_id, func_callback) {
    var options = {
        uri: `${urls.API_URL}user/${user_id}`,
        method: 'GET',
        json: {
            // fields: ["firstname", "lastname", "profile", "gender", "role", "friends", "socials", "email", "languages", "department", "blocked", "country", "bio"] 
        },
        headers: {
            "Authorization": `Bearer ${session.access_token.token}`
        }
    };

    h.send_request(options, function (error, response, body) {
        if (!error &&  body.statusCode == 200) {
            // console.log(session)
            if(body.response.profile!=""){
                img_path = h.uploadDir(user_id)
                console.log("get set profile")
                h.base64img(body.response.profile, `.${img_path}`)
                body.response.profile = img_path
            }
            set_session(session, user_id, body.response)
            func_callback()
            // console.log(body)
        } else {
            // console.log({ body: body.error, statusCode:  response.statusCode })
        }
        console.log(response.body)
    })
}
function set_session(session, key, value) {
    session[key] = value;
    session.save()
}

module.exports = router;