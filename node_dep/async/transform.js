'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = transform;

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _eachOf = require('./eachOf');

var _eachOf2 = _interopRequireDefault(_eachOf);

var _once = require('./internal/once');

var _once2 = _interopRequireDefault(_once);

<<<<<<< HEAD
var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
 * element in series, each step potentially mutating an `accumulator` value.
 * The type of the accumulator defaults to the type of collection passed in.
 *
 * @name transform
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
 * it will default to an empty Object or Array, depending on the type of `coll`
<<<<<<< HEAD
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator.
=======
 * @param {Function} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator. The `iteratee` is
 * passed a `callback(err)` which accepts an optional error as its first
 * argument. If an error is passed to the callback, the transform is stopped
 * and the main `callback` is immediately called with the error.
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * Invoked with (accumulator, item, key, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the transformed accumulator.
 * Invoked with (err, result).
 * @example
 *
 * async.transform([1,2,3], function(acc, item, index, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         acc.push(item * 2)
 *         callback(null)
 *     });
 * }, function(err, result) {
 *     // result is now equal to [2, 4, 6]
 * });
 *
 * @example
 *
 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
 *     setImmediate(function () {
 *         obj[key] = val * 2;
 *         callback();
 *     })
 * }, function (err, result) {
 *     // result is equal to {a: 2, b: 4, c: 6}
 * })
 */
function transform(coll, accumulator, iteratee, callback) {
<<<<<<< HEAD
    if (arguments.length <= 3) {
=======
    if (arguments.length === 3) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        callback = iteratee;
        iteratee = accumulator;
        accumulator = (0, _isArray2.default)(coll) ? [] : {};
    }
    callback = (0, _once2.default)(callback || _noop2.default);
<<<<<<< HEAD
    var _iteratee = (0, _wrapAsync2.default)(iteratee);

    (0, _eachOf2.default)(coll, function (v, k, cb) {
        _iteratee(accumulator, v, k, cb);
=======

    (0, _eachOf2.default)(coll, function (v, k, cb) {
        iteratee(accumulator, v, k, cb);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    }, function (err) {
        callback(err, accumulator);
    });
}
module.exports = exports['default'];