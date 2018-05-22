
var connection = require('./connection.js')
var h = require('./helper.js')
var d = require('../controllers/dep-controller.js')
var cache = require('./cache-provider.js')

var router = connection.router

var department_handler = function (req, res) {
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var current_user_id = req.session.user_id
    var dep_id = req.params.dep_id
    req.setLocale(lang)
    res.render('department', {
        lang: lang,
        current_user_id: current_user_id,
        dep_id: dep_id,
        i18n: res,
        role: req.session[current_user_id].role['_id']
    })
}


router.get(['/department/:dep_id/:lang(en|ru)', '/department/:dep_id'], h.logMiddleware, department_handler)
router.get('/api/dep/:lang(en|ru)', h.logMiddleware, d.departments_api)
router.get(['/api/dep/:dep_id/:lang(en|ru)', '/api/dep/:dep_id'], h.logMiddleware,d. spec_department_api)
// router.get(['/api/chair/dep/:dep_id/:lang(en|ru)', '/api/chair/dep/:dep_id'], h.logMiddleware, chairs_api)

module.exports = router;