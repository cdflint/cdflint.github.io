'use strict';
//enable ES6 
require("babel-register");

let app = require('./app'),
  port = require('./config').port;

app.listen(port);
console.log('Server listening on port ' + port);
console.log('Server environment: ' + app.get('env'));
