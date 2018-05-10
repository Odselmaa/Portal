var i18n = require('i18n');

i18n.configure({

//define how many languages we would support in our application
locales:['en', 'ru'],

//define the path to language json files, default is /locales
directory: __dirname + '/locales',

//define the default language
defaultLocale: 'ru',

// define a custom cookie name to parse locale settings from 
});
module.exports.i18n = i18n;