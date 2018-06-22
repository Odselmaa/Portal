var connection = require('./connection.js')
var h = require('./helper.js')
var router = connection.router
var c = require('../controllers/chair-controller.js')
const m = require('../middleware.js')

var chair_handler = function(req, res){
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var current_user_id = req.session.access_token.user_id

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

router.get('/api/chair/dep/:dep_id/:lang(en|ru)', m.logMiddleware,  c.chairs_api)
router.get('/api/chair/:chair_id/:lang(en|ru)', m.logMiddleware,  c.chair_api)
router.get(['/chair/:chair_id/:lang(en|ru)'], m.logMiddleware,  chair_handler)

module.exports = router;
