var express = require('express');
var session = require("express-session")
var MongoStore = require("connect-mongo")(session);

var router = express.Router();


router.use(session({
  secret: 'a4f8071f-c873-4447-8ee22d',
  name: 'nameOfCookie',
  store: new MongoStore({
    url: 'mongodb://admin_remine:WinniePooh8@remineme-shard-00-00-h4vdb.mongodb.net:27017,remineme-shard-00-01-h4vdb.mongodb.net:27017,remineme-shard-00-02-h4vdb.mongodb.net:27017/Portal?ssl=true&replicaSet=RemineMe-shard-0&authSource=admin',
    autoRemove: 'native',
    collection: 'session'
  }),
  proxy: true,
  resave: true,
  saveUninitialized: false
}));
module.exports.router = router;
module.exports.express = express;
// module.exports.io = io;

