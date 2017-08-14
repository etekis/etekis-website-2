'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

<<<<<<< HEAD
var _doLimit = require('./internal/doLimit');

var _doLimit2 = _interopRequireDefault(_doLimit);

var _concatLimit = require('./concatLimit');

var _concatLimit2 = _interopRequireDefault(_concatLimit);
=======
var _concat = require('./internal/concat');

var _concat2 = _interopRequireDefault(_concat);

var _doSeries = require('./internal/doSeries');

var _doSeries2 = _interopRequireDefault(_doSeries);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
 *
 * @name concatSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
<<<<<<< HEAD
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
 * The iteratee should complete with an array an array of results.
=======
 * @param {Function} iteratee - A function to apply to each item in `coll`.
 * The iteratee is passed a `callback(err, results)` which must be called once
 * it has completed with an error (which can be `null`) and an array of results.
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
<<<<<<< HEAD
exports.default = (0, _doLimit2.default)(_concatLimit2.default, 1);
=======
exports.default = (0, _doSeries2.default)(_concat2.default);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
module.exports = exports['default'];