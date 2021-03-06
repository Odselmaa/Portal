var body_parser = require("body-parser");

var h = require('./helper.js')
var u = require('../controllers/user-controller.js')
const m = require('../middleware.js')

var cache = require('./cache-provider.js')
var connection = require('./connection.js')

var i18n = require('../i18n/i18n.js')
var router = connection.router

router.use(i18n.i18n.init)
router.use(body_parser.json())
router.use(body_parser.urlencoded({
  extended: false
}))
var friend_handler = function (req, res) {
  var lang = req.params.language == undefined ? 'en' : req.params.language
  var current_user_id = req.session.access_token.user_id
  req.setLocale(lang)
  res.render('friend', {
    lang: lang,
    current_user_id: current_user_id,
    i18n: res
  })
}
var filter_handler = function (req, res) {
  var lang = req.params.language == undefined ? 'en' : req.params.language
  var current_user_id = req.session.access_token.user_id
  var user = req.session[current_user_id]
  res.setLocale(lang)
  res.render('filter', {
    lang: lang,
    current_user_id: current_user_id,
    is_admin: user.role['name'] == 'admin',
    i18n: res,
    role: req.session[current_user_id].role['_id']
  })
}

function is_in_friend(friends, friend_id){
  var isFriend = false
  for(var i=0;i<friends.length;i++){
    if(friends[i]._id==friend_id){
      isFriend = true
      break

    }
  }
  return isFriend
}

var user_handler = function (req, res) {
  var user_id = req.params.user_id
  if (user_id != undefined) {
    var lang = req.params.language == undefined ? 'en' : req.params.language
    var current_user_id = req.session.access_token.user_id
    user = req.session[req.session.access_token.user_id]

    var friends = req.session[req.session.access_token.user_id].friends;
    var is_friend = is_in_friend(friends, user_id)
    var is_verified = user.verified_email != undefined

    req.setLocale(lang)
    res.render('profile', {
      lang: lang,
      user_id: user_id,
      current_user_id: current_user_id,
      is_friend: is_friend,
      i18n: res,
      is_verified: is_verified,
      role: req.session[current_user_id].role['_id']
    })
  } else {
    res.render('error/404')

  }
}
var setting_handler = function (req, res) {
  var lang = req.params.language == undefined ? 'en' : req.params.language
  var user_id = req.session.access_token.user_id
  var user = req.session[user_id]
  req.setLocale(lang);
  res.render("settings", {
    lang: lang,
    current_user_id: user_id,
    user: user,
    i18n: res,
    role: user.role['_id']
  })
}
var check_confirm_handler = (req, res) => {
  token = req.params.token
  var message = ""
  var access_token = req.session.access_token.token
  try {
    value = cache.instance().get(token, true);
    u.update_user({
      verified_email: value.verified_email,
      user_id: value.user_id
    }, 
    req, 
    access_token,
    (r) => {
      console.log(r)
      if (r.body.statusCode == 200) {
        
        message = "You are verified user, now you are able to see the university location!"
        cache.instance().del(token)
      } else {
        message = "Something went wrong!"
      }
      res.render('msg', {
        message: message
      })

    })
  } catch (err) {
    message = "Token expired :("
    res.render('msg', {
      message: message
    })
  }
}
//Routes for rendering pages
router.get('/blocked', (req, res) => {
  res.render('blocked')
})
router.get(['/friend/:language(en|ru|mn)'], m.logMiddleware, friend_handler);
router.get(['/settings/:language(en|ru|mn)'], m.logMiddleware, setting_handler)
router.get(['/filter/:language(en|ru|mn)'], m.logMiddleware, filter_handler);
router.get(['/user/:user_id/:language(en|ru|mn)'], m.logMiddleware, user_handler)
router.get('/verify/:token', m.logMiddleware, check_confirm_handler)

//API Specific user profile page route.
router.get(['/u/:user_id', '/u/:user_id/:language(en|ru|mn)'], m.logMiddleware, u.user_api)
router.get(['/u', '/u/:language(en|ru|mn)'], m.logMiddleware, u.filter_users_api)
router.get(['/allu', '/allu/:language(en|ru|mn)'], m.logMiddleware, u.last_user_api)
router.post('/b/:user_id', m.logMiddleware, u.block_user_api)
router.post('/f/:user_id2', m.logMiddleware, u.add_friend_api)
router.delete('/f/:user_id2', m.logMiddleware, u.unfriend_api);
router.get(['/f/:user_id', '/f/:user_id/:language(en|ru|mn)'], m.logMiddleware, u.friends_api)
router.put('/upload', u.upload_api);
router.post('/verify', m.logMiddleware, u.send_confirm_api)

module.exports = router;