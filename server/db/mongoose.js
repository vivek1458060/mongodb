//mongoose configuration in a separate file

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds245357.mlab.com:45357/db235733');

module.exports = {mongoose};
