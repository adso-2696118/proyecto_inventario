"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAuth = void 0;
var _auth = require("../middleware/auth.js");
// chequeo del autenticador
var checkAuth = exports.checkAuth = function checkAuth(req, res, next) {
  var CORREO = req.body.correo;
  _auth.checkToken.confirmToken(req, CORREO);
  next();
};