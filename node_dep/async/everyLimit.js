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

var _notId = require('./internal/notId');

var _notId2 = _interopRequireDefault(_notId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
<<<<<<< HEAD
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
=======
 * @param {Function} iteratee - A truth test to apply to each item in the
 * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
 * which must be called with a  boolean argument once it has completed. Invoked
 * with (item, callback).
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
<<<<<<< HEAD
exports.default = (0, _doParallelLimit2.default)((0, _createTester2.default)(_notId2.default, _notId2.default));
=======
exports.default = (0, _createTester2.default)(_eachOfLimit2.default, _notId2.default, _notId2.default);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
module.exports = exports['default'];