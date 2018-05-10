var connection = require('./connection.js')
var urls = require('../url.js')
var h = require('./helper.js')
var i18n = require('../i18n.js')

var router = connection.router
router.use(i18n.i18n.init)

router.get('/location/:language(en|ru)', (req, res) => {
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang)

    res.render('location', {
        lang:'en',
        current_user_id:'id',
        i18n: res
    })
})
    
module.exports = router;
