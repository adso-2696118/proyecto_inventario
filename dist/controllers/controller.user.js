"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarUser = exports.modificarUser = exports.loginUser = exports.listarUser = exports.eliminarUser = exports.crearUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysqldb = require("../config/mysqldb");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _dotenv = require("dotenv");
var _auth = require("../middleware/auth");
var _mensajes = _interopRequireDefault(require("../messages/mensajes"));
(0, _dotenv.config)();

// Mostrar Usuario
var mostrarUser = exports.mostrarUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, rest;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params['id'];
          _context.prev = 1;
          _context.next = 4;
          return _mysqldb.pool.query("call SP_MOSTRARU(".concat(id, ");"));
        case 4:
          rest = _context.sent;
          res.json({
            "respuesta": rest
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.json({
            "error": _context.t0
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function mostrarUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Listar Usuario
var listarUser = exports.listarUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var rest;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _mysqldb.pool.query("call SP_LISTARU();");
        case 3:
          rest = _context2.sent;
          res.json({
            "respuesta": rest[0]
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.json({
            "error": _context2.t0
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function listarUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Crear Usuario
var crearUser = exports.crearUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var NOMBRE, APELLIDO, CORREO, DOCUMENTO, CLAVE, CLAVESINCIFRAR, FECHA_NACIMIENTO, CELULAR, hash, _CLAVE, respuesta, message, _message;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          NOMBRE = req.body.nombre;
          APELLIDO = req.body.apellido;
          CORREO = req.body.correo;
          DOCUMENTO = req.body.documento;
          CLAVE = req.body.clave;
          CLAVESINCIFRAR = req.body.clave;
          FECHA_NACIMIENTO = req.body.fecha_nacimiento;
          CELULAR = req.body.celular;
          _context3.prev = 8;
          _context3.next = 11;
          return _bcrypt["default"].hash(CLAVESINCIFRAR, 5);
        case 11:
          hash = _context3.sent;
          _CLAVE = hash;
          _context3.next = 15;
          return _mysqldb.pool.query("CALL SP_CREARU ('".concat(NOMBRE, "', '").concat(APELLIDO, "', '").concat(CORREO, "', '").concat(DOCUMENTO, "', '").concat(_CLAVE, "', '").concat(FECHA_NACIMIENTO, "', '").concat(CELULAR, "');"));
        case 15:
          respuesta = _context3.sent;
          if (respuesta[0].affectedRows == 1) {
            message = "Usuario Creado";
            _mensajes["default"].success(req, res, message, 201);
          } else {
            _message = "Usuario no creado";
            _mensajes["default"].error(req, res, _message, 400);
          }
          _context3.next = 22;
          break;
        case 19:
          _context3.prev = 19;
          _context3.t0 = _context3["catch"](8);
          res.json({
            "error": _context3.t0
          });
        case 22:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[8, 19]]);
  }));
  return function crearUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Modificar Uusario
var modificarUser = exports.modificarUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var ID, NOMBRE, APELLIDO, CORREO, DOCUMENTO, CLAVE, FECHA_NACIMIENTO, CELULAR, rest;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          ID = req.body.id;
          NOMBRE = req.body.nombre;
          APELLIDO = req.body.apellido;
          CORREO = req.body.correo;
          DOCUMENTO = req.body.documento;
          CLAVE = req.body.clave;
          FECHA_NACIMIENTO = req.body.fecha_nacimiento;
          CELULAR = req.body.celular;
          _context4.prev = 8;
          _context4.next = 11;
          return _mysqldb.pool.query("call SP_MODIFICARU('".concat(ID, "' ,'").concat(NOMBRE, "', '").concat(APELLIDO, "', '").concat(CORREO, "', '").concat(DOCUMENTO, "', '").concat(CLAVE, "', '").concat(FECHA_NACIMIENTO, "', '").concat(CELULAR, "');"));
        case 11:
          rest = _context4.sent;
          res.json({
            "respuesta": rest
          });
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](8);
          res.json({
            "error": _context4.t0
          });
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[8, 15]]);
  }));
  return function modificarUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Eliminar Usuario
var eliminarUser = exports.eliminarUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var ID, respuesta, message, _message2;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          ID = req.body.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _mysqldb.pool.query("call SP_ELIMINARU(".concat(ID, ");"));
        case 4:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows === 1) {
            message = "Usuario eliminado";
            _mensajes["default"].success(req, res, message, 201);
          } else {
            _message2 = "Usuario no eliminado";
            _mensajes["default"].error(req, res, _message2, 400);
          }
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.json({
            "error": _context5.t0
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminarUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// login Usuario
var loginUser = exports.loginUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var CORREO, CLAVE, data, message, verifyBcrypt, _message3, token;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          CORREO = req.body.correo;
          CLAVE = req.body.clave;
          _context6.next = 5;
          return _mysqldb.pool.query("call SP_LOGINU(?);", [CORREO]);
        case 5:
          data = _context6.sent;
          if (!(data[0][0] == 0)) {
            _context6.next = 10;
            break;
          }
          message = "Correo no encontrado";
          _mensajes["default"].error(req, res, message, 404);
          return _context6.abrupt("return");
        case 10:
          ;

          // VERIFICAR LA CONTRASEÑA ENCRIPTADA
          _context6.next = 13;
          return _bcrypt["default"].compare(CLAVE, data[0][0][0].CLAVE);
        case 13:
          verifyBcrypt = _context6.sent;
          if (verifyBcrypt) {
            _context6.next = 18;
            break;
          }
          _message3 = "Contraseña Incorrecta";
          _mensajes["default"].error(req, res, _message3, 201);
          return _context6.abrupt("return");
        case 18:
          token = (0, _auth.assignToken)(data[0][0][0]);
          _mensajes["default"].success(req, res, [token, CORREO], 200);
          _context6.next = 25;
          break;
        case 22:
          _context6.prev = 22;
          _context6.t0 = _context6["catch"](0);
          res.json({
            "error": _context6.t0
          });
        case 25:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 22]]);
  }));
  return function loginUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();