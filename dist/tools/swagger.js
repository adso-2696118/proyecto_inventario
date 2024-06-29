"use strict";

var _swaggerAutogen = _interopRequireDefault(require("swagger-autogen"));
var _dotenv = require("dotenv");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _dotenv.config)();
var port = process.env.PORT || 3000;
var doc = {
  info: {
    title: 'BACKEND',
    description: 'Manejo de procesos'
  },
  host: 'localhost:' + port + '/api'
};
var outputFile = './swagger-output.json';
var routes = ['../routes/routes.product.js', '../routes/routes.user.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

(0, _swaggerAutogen["default"])()(outputFile, routes, doc);