
var connection = require('./connection.js')
var urls = require('../url.js')
var h = require('./helper.js')
var cache = require('./cache-provider.js')

var router = connection.router

var spec_department_api = function (req, res) {
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var dep_id = req.params.dep_id 
    var options = {
        uri: `${urls.API_URL}department/${dep_id}`,
        method: 'GET',
        json: {
            lang: lang,
            fields: ['_id', 'name', 'code', 'link', 'description', 'chairs'],
        },
        headers: {
            "Authorization": `Bearer ${req.session.access_token.token}`
        }
    };

    h.send_request(options, function (error, response, body, req) {
        if (!error && body.statusCode == 200) {
            res.json(body)
        } else {
            res.json(body)
        }
    })

}
var departments_api = function (req, res) {
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var dep_key = `dep_${lang}`
    try {
        value = cache.instance().get(dep_key, true);
        console.log("DEPARTMENTS IS IN CACHE")
        res.json(value)
    } catch (err) {
        var options = {
            uri: `${urls.API_URL}department`,
            method: 'GET',
            json: {
                fields: ['_id', 'code', 'name', 'link'],
                lang: lang
            },
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };

        h.send_request(options, function (error, response, body, req) {
            if (!error && body.statusCode == 200) {
                cache.instance().set(dep_key, body, cache.TTL);
                console.log("SAVING DEPARTMENTS IN CACHE")
                res.json(body)
            } else {
                res.json(body)
            }
        })
    }
}

var department_handler = function (req, res) {
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var current_user_id = req.session.user_id
    var dep_id = req.params.dep_id
    req.setLocale(lang)
    res.render('department', {
        lang: lang,
        current_user_id: current_user_id,
        dep_id: dep_id,
        i18n: res
    })
}

// var chairs_api = function(req, res){
//     res.json({response: [], statusCode})
// }

router.get(['/department/:dep_id/:lang(en|ru)', '/department/:dep_id'], h.logMiddleware, department_handler)
router.get('/api/dep/:lang(en|ru)', h.logMiddleware, departments_api)
router.get(['/api/dep/:dep_id/:lang(en|ru)', '/api/dep/:dep_id'], h.logMiddleware, spec_department_api)
// router.get(['/api/chair/dep/:dep_id/:lang(en|ru)', '/api/chair/dep/:dep_id'], h.logMiddleware, chairs_api)

module.exports = router;