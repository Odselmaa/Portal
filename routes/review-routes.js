
var connection = require('./connection.js')
var urls = require('../url')
var body_parser = require("body-parser")
var h = require('./helper.js')
const m = require('../middleware.js')
var router = connection.router

router.use(body_parser.json())
router.use(body_parser.urlencoded({
    extended: false
}))

function review_chair_api(req, res){
    var chair_id = req.params.chair_id
    var limit = req.query.limit==undefined?10:req.query.limit
    var skip = req.query.skip==undefined?0:req.query.skip
    var options = {
        uri: `${urls.API_URL}review/chair/${chair_id}?limit=${limit}&skip=${skip}`,
        method: 'GET',
        json: {},
        headers: {"Authorization": `Bearer ${req.session.access_token.token}`}
    };
    h.send_request(options, function (error, response, body) {
        res.json(body);
    })
}

function review_dep_api(req, res){
    var dep_id = req.params.dep_id
    var limit = req.query.limit==undefined?10:req.query.limit
    var skip = req.query.skip==undefined?0:req.query.skip
    var options = {
        uri: `${urls.API_URL}review/department/${dep_id}?limit=${limit}&skip=${skip}`,
        method: 'GET',
        json: {},
        headers: {"Authorization": `Bearer ${req.session.access_token.token}`}
    };
    h.send_request(options, function (error, response, body) {
        res.json(body);
    })
}

function dep_report_api(req, res){
    var lang = req.params.language == undefined ? 'en' : req.params.language

    var options = {
        uri: `${urls.API_URL}review/department/report?lang=${lang}`,
        method: 'GET',
        json: {},
        headers: {"Authorization": `Bearer ${req.session.access_token.token}`}
    };
    h.send_request(options, function (error, response, body) {
        res.json(body);
    })
}

function review_api(req, res){
    var payload = JSON.parse(req.body.payload)
    
    var uri = `${urls.API_URL}review/${payload.type}`

    if(payload.type=="department"){
        payload.stars = payload.rating.stars
        delete payload.rating
    }

    delete payload.type
    payload.author = req.session.access_token.user_id

    var options = {
        uri: uri,
        method: 'POST',
        json: {payload: payload},
        headers: {"Authorization": `Bearer ${req.session.access_token.token}`}
    };
    h.send_request(options, function (error, response, body) {
        res.json(body);
    })
    // res.json({"d":"d"})
}


function review_handler(req, res){
    var lang = req.params.language == undefined ? 'en' : req.params.language
    var current_user_id = req.session.access_token.user_id
    req.setLocale(lang);
    res.render('review', {
        current_user_id: current_user_id,
        i18n: res,
        lang: lang,
        role: req.session[current_user_id].role['_id']

    })
}

router.get('/api/review/dep/:dep_id', review_dep_api)
router.get('/api/review/department/report/:language(en|ru|mn)', dep_report_api)

router.get('/api/review/chair/:chair_id', review_chair_api)
router.post('/api/review', review_api)

router.get('/review/:language(en|ru|mn)', review_handler)

module.exports = router;