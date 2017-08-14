'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceRight;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

<<<<<<< HEAD
var _slice = require('./internal/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

=======
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slice = Array.prototype.slice;

>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
/**
 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
 *
 * @name reduceRight
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reduce]{@link module:Collections.reduce}
 * @alias foldr
 * @category Collection
 * @param {Array} array - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
<<<<<<< HEAD
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
=======
 * @param {Function} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction. The `iteratee` is passed a
 * `callback(err, reduction)` which accepts an optional error as its first
 * argument, and the state of the reduction as the second. If an error is
 * passed to the callback, the reduction is stopped and the main `callback` is
 * immediately called with the error. Invoked with (memo, item, callback).
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 */
function reduceRight(array, memo, iteratee, callback) {
<<<<<<< HEAD
  var reversed = (0, _slice2.default)(array).reverse();
=======
  var reversed = slice.call(array).reverse();
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  (0, _reduce2.default)(reversed, memo, iteratee, callback);
}
module.exports = exports['default'];