'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createTester = require('./internal/createTester');

var _createTester2 = _interopRequireDefault(_createTester);

<<<<<<< HEAD
var _doParallelLimit = require('./internal/doParallelLimit');

var _doParallelLimit2 = _interopRequireDefault(_doParallelLimit);
=======
var _eachOfLimit = require('./eachOfLimit');

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

var _identity = require('lodash/identity');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
 *
 * @name someLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anyLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
<<<<<<< HEAD
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
=======
 * @param {Function} iteratee - A truth test to apply to each item in the array
 * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
 * be called with a boolean argument once it has completed. Invoked with
 * (item, callback).
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
<<<<<<< HEAD
exports.default = (0, _doParallelLimit2.default)((0, _createTester2.default)(Boolean, _identity2.default));
=======
exports.default = (0, _createTester2.default)(_eachOfLimit2.default, Boolean, _identity2.default);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
module.exports = exports['default'];