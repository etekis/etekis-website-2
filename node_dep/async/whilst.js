'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = whilst;

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

<<<<<<< HEAD
var _slice = require('./internal/slice');

var _slice2 = _interopRequireDefault(_slice);
=======
var _rest = require('./internal/rest');

var _rest2 = _interopRequireDefault(_rest);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

var _onlyOnce = require('./internal/onlyOnce');

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

<<<<<<< HEAD
var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs.
 *
 * @name whilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
<<<<<<< HEAD
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` passes. Invoked with (callback).
=======
 * @param {Function} iteratee - A function which is called each time `test` passes.
 * The function is passed a `callback(err)`, which must be called once it has
 * completed with an optional `err` argument. Invoked with (callback).
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns undefined
 * @example
 *
 * var count = 0;
 * async.whilst(
 *     function() { return count < 5; },
 *     function(callback) {
 *         count++;
 *         setTimeout(function() {
 *             callback(null, count);
 *         }, 1000);
 *     },
 *     function (err, n) {
 *         // 5 seconds have passed, n = 5
 *     }
 * );
 */
function whilst(test, iteratee, callback) {
    callback = (0, _onlyOnce2.default)(callback || _noop2.default);
<<<<<<< HEAD
    var _iteratee = (0, _wrapAsync2.default)(iteratee);
    if (!test()) return callback(null);
    var next = function (err /*, ...args*/) {
        if (err) return callback(err);
        if (test()) return _iteratee(next);
        var args = (0, _slice2.default)(arguments, 1);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
=======
    if (!test()) return callback(null);
    var next = (0, _rest2.default)(function (err, args) {
        if (err) return callback(err);
        if (test()) return iteratee(next);
        callback.apply(null, [null].concat(args));
    });
    iteratee(next);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
}
module.exports = exports['default'];