var h = require('../routes/helper.js')
var urls = require('../url')

module.exports = {
    chairs_api : function(req, res){
        var lang = req.params.lang == undefined ? 'en' : req.params.lang
        var dep_id = req.params.dep_id;
        fields = ['_id', 'code', 'name', 'description'].join(',')
    
        if(dep_id!=undefined && dep_id!=0){
            var options = {
                uri: `${urls.API_URL}chair/department/${dep_id}?fields=${fields}&lang=${lang}`,
                method: 'GET',
                json: {},
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
    },
    
    chair_api : function(req, res){
        
        var lang = req.params.lang == undefined ? 'en' : req.params.lang
        var chair_id = req.params.chair_id;
        fields = ['_id', 'code', 'name', 'description'].join(',')
    
        if(chair_id!=undefined && chair_id!=0){

            var options = {
                uri: `${urls.API_URL}chair/${chair_id}?fields=${fields}&lang=${lang}`,
                method: 'GET',
                json: {  },
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
    
}