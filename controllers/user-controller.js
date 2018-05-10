var h = require('../routes/helper.js')
var urls = require('../url')
var fs = require('fs');
var sharp = require('sharp')

var formidable = require('formidable');
var path = require('path')
var cache= require('../routes/cache-provider.js')
// var cache = cache_provider.cache

function update_user(payload, request, callback) {
    var user_id = payload.user_id
    var options = {
        uri: `${urls.API_URL}user/${user_id}`,
        method: 'PUT',
        json: payload,
        headers: {
            "Authorization": `Bearer ${request.session.access_token.token}`
        }
    };

    h.send_request(options, function (error, response, body, req) {
        console.log(body)
        if (!error && body.statusCode == 200) {
            if ('profile' in payload) {
                img_path = h.uploadDir(user_id)
                h.base64img(payload.profile, `..${img_path}`)
                payload.profile = img_path
            }
            for (const [key, value] of Object.entries(payload)) {
                request.session[user_id][key] = value
            }
            request.session.save()
        }
        callback(response)

    })
}

function resize(user) {
    var promise = new Promise(function (resolve, reject) {
        img_path = path.join(__dirname, `../${h.uploadDir(user.user_id)}`)
        old_path = user.profile
        sharp(old_path)
            .resize(200, 200)
            .toFile(img_path, function (err) {
                if (err != undefined)
                    console.log("Resizing image error: ", err)
            });
        user.profile = img_path
        user.old_path = old_path
        console.log("resizing")

        resolve(user);
    });
    return promise;
}

function convert(user) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var bitmap = fs.readFileSync(user.profile);
            user.profile = new Buffer(bitmap).toString('base64')
            console.log("converting")
            resolve(user);
        }, 500);
    });
    return promise;
}

function delete_old(user) {
    var promise = new Promise(function (resolve, reject) {
        fs.unlink(user.old_path, (err) => {
            if (err != undefined) {
                console.log("Deleting old image is giving error", err);
                reject(user)
            } else {
                console.log("OLD IMAGE IS DELETED")
                delete user.old_path
                resolve(user);
                // console.log(user)
            }
        })
    });
    return promise;
}

function put2session(session, key1, key2, value) {
    var my_array = session[key1][key2];
    my_array.push(value)
    session[key1][key2] = my_array;
    session.save()
}

function pop_session(session, key1, key2, value) {
    var my_array = session[key1][key2];
    // my_array.slice(my_array.indexOf(value), 1)
    remove(my_array, value)
    session[key1][key2] = my_array;
    session.save()
}

function remove(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
}


module.exports = {
    user_api: function (req, res) {
        var user_id = req.params.user_id
        var lang = req.params.language == undefined ? 'en' : req.params.language

        if (user_id == req.session.user_id) {
            // console.log("here is")
            // if(lang=='en')
            response = req.session[user_id]
            res.json({
                response: response,
                statusCode: 200
            })
        } else {
            if (user_id != undefined) {
                var options = {
                    uri: `${urls.API_URL}user/${user_id}`,
                    method: 'GET',
                    json: {
                        fields: ["firstname", "lastname", "profile", "gender", "role", "friends", "socials", "email", "languages", "department", "country"],
                        lang: lang
                    },
                    headers: {
                        "Authorization": `Bearer ${req.session.access_token.token}`
                    },
                };

                current_user = req.session[req.session.user_id]
                if (current_user.role._id == 1) options.json.fields.push("blocked")


                h.send_request(options, function (error, response, body, req) {
                    if (!error && body.statusCode == 200) {

                        if (body.response.profile != "") {
                            user_id = body.response['_id']
                            img_path = h.uploadDir(user_id)
                            h.base64img(body.response.profile, `..${img_path}`)
                            body.response.profile = img_path
                            // console.log()
                        }
                        res.json(body)
                    } else {
                        res.json(body)
                    }
                })
            } else {
                res.json({
                    statusCode: 404,
                    response: "Not found yass"
                })
            }
        }
    },

    filter_users_api: function (req, res) {
        var query = req.query.q
        var lang = req.params.language == undefined ? 'en' : req.params.language
        console.log(lang)
        var limit = req.query.l == undefined ? 10 : parseInt(req.query.l)
        var skip = req.query.s == undefined ? 0 : parseInt(req.query.s)

        var department = req.query.d
        var chair = req.query.c
        var ulang = req.query.ulang
        var gender = req.query.g
        var country = req.query.cn

        var options = {
            uri: `${urls.API_URL}user`,
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            },
            json: {
                fields: ['firstname', 'lastname', 'profile', 'department', 'blocked'],
                lang: lang,
                keys: {},
                limit: limit,
                skip: skip,
            }
        };

        if (req.session[req.session.user_id].role['_id'] == 1) {
            options.json.fields.push('blocked')
        }

        if (query != undefined) {
            options.json.keys.search_key = query;
        }

        if (department != 0 || department != undefined) {
            options.json.keys.department = department;
        }

        if (ulang != 0 || department != undefined) {
            options.json.keys.ulang = ulang;
        }

        if (ulang != 0 || department != undefined) {
            options.json.keys.chair = chair;
        }

        if (gender != 0 || department != undefined) {
            options.json.keys.gender = gender;
        }
        if (country != 0 || department != undefined) {
            options.json.keys.country = country;

        }

        h.send_request(options, function (error, response, body) {
            console.log(body)
            res.json(body);
        })
    },

    last_user_api: function (req, res) {
        var lang = req.params.language == undefined || req.params.language == '' ? 'en' : req.params.language
        var lastu_key = `lastu_${lang}`
        try {
            value = cache.instance().get(lastu_key, true);
            console.log("LAST USER IS IN CACHE")
            res.json(value)

        } catch (err) {
            var limit = req.query.l == undefined ? 10 : parseInt(req.query.l)
            var skip = req.query.s == undefined ? 0 : parseInt(req.query.s)
            var options = {
                uri: `${urls.API_URL}user`,
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${req.session.access_token.token}`
                },
                json: {
                    fields: ['firstname', 'lastname', 'role', 'department'],
                    lang: lang,
                    keys: {},
                    limit: limit,
                    skip: skip,
                }
            };

            h.send_request(options, function (error, response, body) {
                console.log(error)
                if (response.statusCode == 200) {
                    body.lastUpdate = new Date().getTime()
                    cache.instance().set(lastu_key, body, cache.TTL);
                    console.log("SAVING LAST USER IN CACHE")
                }
                res.json(body);
            })
        }
    },

    friends_api: function (req, res) {
        var lang = req.params.language == undefined ? 'en' : req.params.language
        var user_id = req.params.user_id
        var friend_key = `f_${user_id}_${lang}`

        try {
            value = cache.instance().get(friend_key, true);
            console.log("FRIENDS ARE IN CACHE")
            // console.log(value)
            res.json(value)

        } catch (err) {
            var options = {
                uri: `${urls.API_URL}user/${user_id}/friend`,
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${req.session.access_token.token}`
                },
                json: {
                    fields: ['firstname', 'lastname', 'profile', 'id', 'department'],
                    lang: lang
                }
            };
            h.send_request(options, function (error, response, body) {
                // console.log(body)
                if (body.statusCode == 200)
                    for (var i = 0; i < body.response.length; i++) {
                        if (body.response[i].profile != "") {
                            img_path = h.uploadDir(body.response[i]['_id'])
                            h.base64img(body.response[i].profile, `..${img_path}`)
                            body.response[i].profile = img_path
                        }
                    }
                cache.instance().set(friend_key, body, cache.FR_TTL);
                console.log("SAVING FRIENDS IN CACHE")
                console.log(body)

                res.json(body);
            })
        }
    },

    add_friend_api: function (req, res) {
        var user_id1 = req.session.user_id
        var user_id2 = req.params.user_id2
        var options = {
            uri: `${urls.API_URL}user/${user_id1}/friend/${user_id2}`,
            method: 'POST',
            json: {},
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };

        h.send_request(options, function (error, response, body) {
            if (body.statusCode == 201) {
                put2session(req.session, user_id1, 'friends', user_id2)
            }
            res.json(body);
        })
    },
    unfriend_api: function (req, res) {
        var user_id1 = req.session.user_id
        var user_id2 = req.params.user_id2
        var options = {
            uri: `${urls.API_URL}user/${user_id1}/friend/${user_id2}`,
            method: 'DELETE',
            json: {},
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };

        h.send_request(options, function (error, response, body) {
            if (body.statusCode == 200) {
                pop_session(req.session, user_id1, 'friends', user_id2)
            }
            res.json(body);
        })
    },
    block_user_api: function (req, res) {
        var admin_id = req.session.user_id
        var user_id = req.params.user_id
        var role = req.session[admin_id].role.name
        var blocked = req.body.blocked == 'true'
        if (role == 'admin') {
            var options = {
                uri: `${urls.API_URL}user/${user_id}/block`,
                method: 'POST',
                json: {
                    blocked: blocked
                },
                headers: {
                    "Authorization": `Bearer ${req.session.access_token.token}`
                }
            };

            h.send_request(options, function (error, response, body) {
                res.json(body);
            })
        } else {
            res.json({
                statusCode: 400,
                response: 'Only admin can block the user'
            });
        }
    },

    upload_api: function (req, res) {
        var form = new formidable.IncomingForm();
        var user = {},
            file;
        var file_came = false;
        // specify that we want to allow the user to upload multiple files in a single request
        form.multiples = false;

        form.uploadDir = path.join(__dirname, '../public/uploads');

        form.on('field', function (name, value) {
            if (name == 'user')
                user = JSON.parse(value)
        });

        form.on('file', function (field, file) {
            user.profile = file.path
        });

        form.on('error', function (err) {
            console.log('An error has occured: \n' + err);
        });

        form.on('end', function () {
            // update_user(user, req, (response)=>{
            //   res.json(response);
            // })
            if ('profile' in user && user.profile != "") {
                resize(user)
                    .then(convert)
                    .then(delete_old)
                    .then((user) => {
                        update_user(user, req, (r) => {
                            res.json(r)
                        })
                    })
            } else {
                update_user(user, req, (r) => {
                    res.json(r.body)
                })
            }

        });

        // parse the incoming request containing the form data
        form.parse(req);

    }
}