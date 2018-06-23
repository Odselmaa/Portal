var body_parser = require("body-parser")
var connection = require('./connection.js')
var cache = require('./cache-provider.js')
var i18n = require('../i18n/i18n.js')
const m = require('../middleware.js')
var urls = require('../url.js')
var h = require('./helper.js')

var router = connection.router

router.use(body_parser.json())
router.use(body_parser.urlencoded({
    extended: false
}))
router.use(i18n.i18n.init)

router.get(['/news/:language(en|ru)'], [m.logMiddleware], (req, res) => {
    var current_user_id = req.session.access_token.user_id
    var lang = req.params.language == undefined ? 'en' : req.params.language     
    req.setLocale(lang)
    res.render('news', {
        lang: lang,
        current_user_id: current_user_id,
        i18n: res,
        role: req.session[current_user_id].role['_id']  
    })
})

router.get(['/news/:news_id/:language(en|ru)'], (req, res) => {
    var news_id = req.params.news_id

    var current_user_id = req.session.access_token.user_id
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang)
    res.render('specific_news', {
        lang: lang,
        current_user_id: current_user_id,
        i18n: res,
        news_id: news_id,
        role: req.session[current_user_id].role['_id']
    })
})

router.get(['/newsfeed/:language(en|ru)'], (req, res) => {
    var current_user_id = req.session.access_token.user_id
    var lang = req.params.language == undefined ? 'en' : req.params.language
    var tags = req.session[current_user_id].news_tags
    req.setLocale(lang)
    res.render('newsfeed', {
        lang: lang,
        current_user_id: current_user_id,
        i18n: res,
        news_tags: tags.join(),
        role: req.session[current_user_id].role['_id']
    })
})

router.get(['/create/news/:language(en|ru)'], (req, res) => {
    var current_user_id = req.session.access_token.user_id
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang)
    res.render('create_news', {
        lang: lang,
        current_user_id: current_user_id,
        i18n: res,
        role: req.session[current_user_id].role['_id']
    })
})

router.post('/api/news', (req, res) => {
    payload = JSON.parse(req.body.payload)
    var options = {
        uri: `${urls.ROOT_API_URL}${req.url}`,
        method: 'POST',
        json: {
            payload: payload
        },
        headers: {
            "Authorization": `Bearer ${req.session.access_token.token}`
        }
    };
    h.send_request(options, function (error, response, body) {
        if (body.statusCode == 201) {
            var key = '/api/news'
            delete_news_cache(key, ()=>{
                res.json(body);
            })
            delete_news_cache('/api/news?limit=6', ()=>{
                res.json(body);
            })
        }else
            res.json(body);
    })
})

router.get('/api/news', (req, res) => {
    var news_key = req.url
    console.log(news_key)

    try {
        // console.log(req.url)
        value = cache.instance().get(news_key, true);
        res.json(value);
    } catch (err) {
        // if(tags!=undefined || tags!=""){
        var options = {
            uri: `${urls.ROOT_API_URL}${req.url}`,
            method: 'GET',
            json: {},
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };
        h.send_request(options, function (error, response, body) {
            // console.log(body)
            if (response != undefined && response.statusCode == 200)
                cache.instance().set(news_key, body, cache.TTL);

            res.json(body);
        })
    }
})

router.put('/api/news/:news_id', (req, res) => {
    body = JSON.parse(req.body.data)
    console.log(body)
    var options = {
        uri: `${urls.ROOT_API_URL}${req.url}`,
        method: 'PUT',
        json: {
            payload: body
        },
        headers: {
            "Authorization": `Bearer ${req.session.access_token.token}`
        }
    };

    delete body['_id']
    h.send_request(options, function (error, response, body1) {
        if (body1.statusCode == 200) {
            var key = '/api/news'
            delete_news_cache(key, ()=>{
                res.json(body);
            })
            delete_news_cache('/api/news?limit=6', ()=>{
                res.json(body);
            })
            
        }else
            res.json(body1);
    })
    // res.json(body)
})

router.get('/api/news/:news_id', (req, res) => {
    var options = {
        uri: `${urls.ROOT_API_URL}${req.url}`,
        method: 'GET',
        json: {},
        headers: {
            "Authorization": `Bearer ${req.session.access_token.token}`
        }
    };
    h.send_request(options, function (error, response, body) {
        res.json(body);
    })

}).delete('/api/news/:news_id', (req, res) => {
    var options = {
        uri: `${urls.ROOT_API_URL}${req.url}`,
        method: 'DELETE',
        json: {},
        headers: {
            "Authorization": `Bearer ${req.session.access_token.token}`
        }
    };
    h.send_request(options, function (error, response, body) {
        if (body.statusCode == 200) {
            var key = '/api/news'
            delete_news_cache(key, ()=>{
                res.json(body);
            })
            delete_news_cache('/api/news?limit=6', ()=>{
                res.json(body);
            })
        }else
            res.json(body);
    })
})

function delete_news_cache(key, callback) {
    cache.instance().del(key, function (err, count) {
        callback()
    });
}

//exporting our routers
module.exports = router;