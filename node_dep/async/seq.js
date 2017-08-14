'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
<<<<<<< HEAD
exports.default = seq;
=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

<<<<<<< HEAD
var _slice = require('./internal/slice');

var _slice2 = _interopRequireDefault(_slice);
=======
var _rest = require('./internal/rest');

var _rest2 = _interopRequireDefault(_rest);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

<<<<<<< HEAD
var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

var _arrayMap = require('lodash/_arrayMap');

var _arrayMap2 = _interopRequireDefault(_arrayMap);

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Version of the compose function that is more natural to read. Each function
 * consumes the return value of the previous function. It is the equivalent of
 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name seq
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.compose]{@link module:ControlFlow.compose}
 * @category Control Flow
<<<<<<< HEAD
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
=======
 * @param {...Function} functions - the asynchronous functions to compose
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @returns {Function} a function that composes the `functions` in order
 * @example
 *
 * // Requires lodash (or underscore), express3 and dresende's orm2.
 * // Part of an app, that fetches cats of the logged user.
 * // This example uses `seq` function to avoid overnesting and error
 * // handling clutter.
 * app.get('/cats', function(request, response) {
 *     var User = request.models.User;
 *     async.seq(
 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
 *         function(user, fn) {
 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
 *         }
 *     )(req.session.user_id, function (err, cats) {
 *         if (err) {
 *             console.error(err);
 *             response.json({ status: 'error', message: err.message });
 *         } else {
 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
 *         }
 *     });
 * });
 */
<<<<<<< HEAD
function seq() /*...functions*/{
    var _functions = (0, _arrayMap2.default)(arguments, _wrapAsync2.default);
    return function () /*...args*/{
        var args = (0, _slice2.default)(arguments);
=======
exports.default = (0, _rest2.default)(function seq(functions) {
    return (0, _rest2.default)(function (args) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        var that = this;

        var cb = args[args.length - 1];
        if (typeof cb == 'function') {
            args.pop();
        } else {
            cb = _noop2.default;
        }

<<<<<<< HEAD
        (0, _reduce2.default)(_functions, args, function (newargs, fn, cb) {
            fn.apply(that, newargs.concat(function (err /*, ...nextargs*/) {
                var nextargs = (0, _slice2.default)(arguments, 1);
                cb(err, nextargs);
            }));
        }, function (err, results) {
            cb.apply(that, [err].concat(results));
        });
    };
}
=======
        (0, _reduce2.default)(functions, args, function (newargs, fn, cb) {
            fn.apply(that, newargs.concat([(0, _rest2.default)(function (err, nextargs) {
                cb(err, nextargs);
            })]));
        }, function (err, results) {
            cb.apply(that, [err].concat(results));
        });
    });
});
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
module.exports = exports['default'];