'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

<<<<<<< HEAD
exports.default = function () /*...args*/{
  return _seq2.default.apply(null, (0, _slice2.default)(arguments).reverse());
};

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
var _seq = require('./seq');

var _seq2 = _interopRequireDefault(_seq);

<<<<<<< HEAD
var _slice = require('./internal/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

=======
var _rest = require('./internal/rest');

var _rest2 = _interopRequireDefault(_rest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
/**
 * Creates a function which is a composition of the passed asynchronous
 * functions. Each function consumes the return value of the function that
 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name compose
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
<<<<<<< HEAD
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
=======
 * @param {...Function} functions - the asynchronous functions to compose
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @returns {Function} an asynchronous function that is the composed
 * asynchronous `functions`
 * @example
 *
 * function add1(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n + 1);
 *     }, 10);
 * }
 *
 * function mul3(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n * 3);
 *     }, 10);
 * }
 *
 * var add1mul3 = async.compose(mul3, add1);
 * add1mul3(4, function (err, result) {
 *     // result now equals 15
 * });
 */
<<<<<<< HEAD
=======
exports.default = (0, _rest2.default)(function (args) {
  return _seq2.default.apply(null, args.reverse());
});
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
module.exports = exports['default'];