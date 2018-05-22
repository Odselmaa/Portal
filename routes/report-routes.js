var connection = require('./connection.js')
var urls = require('../url')
var body_parser = require("body-parser")
var h = require('./helper.js')
var cache = require('./cache-provider.js')

var router = connection.router
router.use(body_parser.json())
router.use(body_parser.urlencoded({
  extended: false
}))

//for posting report 
router.post('/r', h.logMiddleware, (req, res) => {
  var body = req.body
  var user_informed = req.session.user_id
  body["user_informed"] = user_informed
  var options = {
    uri: `${urls.API_URL}report`,
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${req.session.access_token.token}`
    },
    json: body
  };
  h.send_request(options, function (error, response, body) {
    
    delete_cache(`report_all`)

    res.json(body);
  })
})


router.get('/r/:status', h.logMiddleware, (req, res) => {
  var status = req.params.status
  var report_key = `report_${status}`
  var limit = req.query.l == undefined ? 5 : parseInt(req.query.l)
  try {
    value = cache.instance().get(report_key, true);
    
    res.json(value)

  } catch (err) {
    var options = {
      uri: `${urls.API_URL}report/${status}?limit=${limit}`,
      method: 'GET',
      json: {},
      headers: {
        "Authorization": `Bearer ${req.session.access_token.token}`
      }
    }
    h.send_request(options, function (error, response, body) {
      

      if (!error && body.statusCode == 200) {
        cache.instance().set(report_key, body, cache.TTL);
        
        res.json(body)
      } else {
        res.json(body)
      }
    })
  }
})

router.get('/api/r', h.logMiddleware, (req, res) => {
  var report_key = `all_report`
  try {
    value = cache.instance().get(report_key, true);
    
    res.json(value)

  } catch (err) {
    var options = {
      uri: `${urls.API_URL}report`,
      method: 'GET',
      json: {},
      headers: {
        "Authorization": `Bearer ${req.session.access_token.token}`
      }
    }
    h.send_request(options, function (error, response, body) {
      if (body.statusCode == 200) {
        cache.instance().set(report_key, body, cache.TTL);
        
        res.json(body)
      } else {
        res.json(body)
      }
    })
  }
})


router.put('/r/:status', h.logMiddleware, (req, res) => {
  var status = req.params.status

  if ('id' in req.body) {
    var options = {
      uri:`${urls.API_URL}report/${status}`,
      method: 'PUT',
      json: {
        id: req.body.id
      },
      headers: {
        "Authorization": `Bearer ${req.session.access_token.token}`
      }
    }
    h.send_request(options, function (error, response, body) {
      if(body.statusCode == 200){
        delete_cache(`report_all`)
      }
      res.json(body);
    })
  } else {
    res.json({
      response: "Bad request",
      statusCode: 400
    });

  }


})

router.get(['/report', '/report/:language(en|ru)'], h.logMiddleware, (req, res) => {
  var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang);
    var current_user_id = req.session.user_id
    var user = req.session[current_user_id]
    var role = user.role['_id']
    res.render('report', 
    { 
        lang: lang,
        current_user_id: current_user_id,
        i18n: res,
        role: role
    })
})

function delete_cache(key){
    cache.instance().del(key, function( err, count ){
      if( !err ){
        
        
      }else{
        
      }
    });
}

//exporting our routers
module.exports = router;