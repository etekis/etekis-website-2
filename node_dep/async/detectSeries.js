'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

<<<<<<< HEAD
var _detectLimit = require('./detectLimit');

var _detectLimit2 = _interopRequireDefault(_detectLimit);

var _doLimit = require('./internal/doLimit');

var _doLimit2 = _interopRequireDefault(_doLimit);
=======
var _identity = require('lodash/identity');

var _identity2 = _interopRequireDefault(_identity);

var _createTester = require('./internal/createTester');

var _createTester2 = _interopRequireDefault(_createTester);

var _eachOfSeries = require('./eachOfSeries');

var _eachOfSeries2 = _interopRequireDefault(_eachOfSeries);

var _findGetResult = require('./internal/findGetResult');

var _findGetResult2 = _interopRequireDefault(_findGetResult);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
 *
 * @name detectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findSeries
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
<<<<<<< HEAD
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
=======
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee is passed a `callback(err, truthValue)` which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
<<<<<<< HEAD
exports.default = (0, _doLimit2.default)(_detectLimit2.default, 1);
=======
exports.default = (0, _createTester2.default)(_eachOfSeries2.default, _identity2.default, _findGetResult2.default);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
module.exports = exports['default'];