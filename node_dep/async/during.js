'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = during;

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _onlyOnce = require('./internal/onlyOnce');

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

<<<<<<< HEAD
var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
 * is passed a callback in the form of `function (err, truth)`. If error is
 * passed to `test` or `fn`, the main callback is immediately called with the
 * value of the error.
 *
 * @name during
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
<<<<<<< HEAD
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (callback).
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error, if one occurred, otherwise `null`.
=======
 * @param {Function} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (callback).
 * @param {Function} fn - A function which is called each time `test` passes.
 * The function is passed a `callback(err)`, which must be called once it has
 * completed with an optional `err` argument. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error, if one occured, otherwise `null`.
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @example
 *
 * var count = 0;
 *
 * async.during(
 *     function (callback) {
 *         return callback(null, count < 5);
 *     },
 *     function (callback) {
 *         count++;
 *         setTimeout(callback, 1000);
 *     },
 *     function (err) {
 *         // 5 seconds have passed
 *     }
 * );
 */
function during(test, fn, callback) {
    callback = (0, _onlyOnce2.default)(callback || _noop2.default);
<<<<<<< HEAD
    var _fn = (0, _wrapAsync2.default)(fn);
    var _test = (0, _wrapAsync2.default)(test);

    function next(err) {
        if (err) return callback(err);
        _test(check);
=======

    function next(err) {
        if (err) return callback(err);
        test(check);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
<<<<<<< HEAD
        _fn(next);
    }

    _test(check);
=======
        fn(next);
    }

    test(check);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
}
module.exports = exports['default'];