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
    console.log(body)
    delete_cache(`report_all`)

    res.json(body);
  })
})


router.get('/r/:status', h.logMiddleware, (req, res) => {
  var status = req.params.status
  var report_key = `report_${status}`

  try {
    value = cache.instance().get(report_key, true);
    console.log("REPORT IS IN CACHE")
    res.json(value)

  } catch (err) {
    var options = {
      uri: `${urls.API_URL}report/${status}`,
      method: 'GET',
      json: {},
      headers: {
        "Authorization": `Bearer ${req.session.access_token.token}`
      }
    }
    h.send_request(options, function (error, response, body) {
      console.log(body)

      if (body.statusCode == 200) {
        cache.instance().set(report_key, body, cache.TTL);
        console.log("SAVING REPORT IN CACHE")
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
        // var report_key = 

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
function delete_cache(key){
    cache.instance().del(key, function( err, count ){
      if( !err ){
        console.log( count ); // 1
        console.log(`Deleted ${key}`)
      }else{
        console.log(`Can't delete ${key} or it doesn't exist`)
      }
    });
}

//exporting our routers
module.exports = router;