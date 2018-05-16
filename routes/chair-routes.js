var connection = require('./connection.js')
var urls = require('../url.js')
var h = require('./helper.js')
var router = connection.router


var chairs_api = function(req, res){
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var dep_id = req.params.dep_id;
    
    if(dep_id!=undefined && dep_id!=0){
        var options = {
            uri: `${urls.API_URL}chair/department/${dep_id}`,
            method: 'GET',
            json: { fields: ['_id', 'code', 'name'], lang: lang },
            headers:{
                "Authorization":`Bearer ${req.session.access_token.token}`
            }
        };

        h.send_request(options, function (error, response, body, req) {
            if (!error && body.statusCode == 200) {
                res.json(body)
            } else {
                res.json(body)
            }
        })
    }else{
        res.json({response:"Invalid department id", "statusCode":400})
    }
}

var chair_api = function(req, res){
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var chair_id = req.params.chair_id;
    
    if(chair_id!=undefined && chair_id!=0){
        var options = {
            uri: `${urls.API_URL}chair/${chair_id}`,
            method: 'GET',
            json: { fields: ['_id', 'code', 'name', 'description'], lang: lang },
            headers:{
                "Authorization":`Bearer ${req.session.access_token.token}`
            }
        };

        h.send_request(options, function (error, response, body, req) {
            if (!error && body.statusCode == 200) {
                res.json(body)
            } else {
                res.json(body)
            }
        })
    }else{
        res.json({response:"Invalid department id", "statusCode":400})
    }
}

var chair_handler = function(req, res){
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var current_user_id = req.session.user_id

    var user = req.session[current_user_id]
    var role = user.role['_id']

    var chair_id = req.params.chair_id
    req.setLocale(lang)
    res.render('chair', {
        lang: lang,
        current_user_id: current_user_id,
        chair_id: chair_id,
        i18n: res,
        role: role
    })
}

router.get('/api/chair/dep/:dep_id/:lang(en|ru)', h.logMiddleware,  chairs_api)
router.get('/api/chair/:chair_id/:lang(en|ru)', h.logMiddleware,  chair_api)
router.get(['/chair/:chair_id/:lang(en|ru)', '/chair/:chair_id'], h.logMiddleware,  chair_handler)

module.exports = router;
