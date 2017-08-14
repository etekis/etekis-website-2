'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reflect;

var _initialParams = require('./internal/initialParams');

var _initialParams2 = _interopRequireDefault(_initialParams);

<<<<<<< HEAD
var _slice = require('./internal/slice');

var _slice2 = _interopRequireDefault(_slice);

var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
=======
var _rest = require('./internal/rest');

var _rest2 = _interopRequireDefault(_rest);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
<<<<<<< HEAD
 * Wraps the async function in another function that always completes with a
 * result object, even when it errors.
 *
 * The result object has either the property `error` or `value`.
=======
 * Wraps the function in another function that always returns data even when it
 * errors.
 *
 * The object returned has either the property `error` or `value`.
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 *
 * @name reflect
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
<<<<<<< HEAD
 * @param {AsyncFunction} fn - The async function you want to wrap
=======
 * @param {Function} fn - The function you want to wrap
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @returns {Function} - A function that always passes null to it's callback as
 * the error. The second argument to the callback will be an `object` with
 * either an `error` or a `value` property.
 * @example
 *
 * async.parallel([
 *     async.reflect(function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff but error ...
 *         callback('bad stuff happened');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     })
 * ],
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = 'bad stuff happened'
 *     // results[2].value = 'two'
 * });
 */
function reflect(fn) {
<<<<<<< HEAD
    var _fn = (0, _wrapAsync2.default)(fn);
    return (0, _initialParams2.default)(function reflectOn(args, reflectCallback) {
        args.push(function callback(error, cbArg) {
            if (error) {
                reflectCallback(null, { error: error });
            } else {
                var value;
                if (arguments.length <= 2) {
                    value = cbArg;
                } else {
                    value = (0, _slice2.default)(arguments, 1);
                }
                reflectCallback(null, { value: value });
            }
        });

        return _fn.apply(this, args);
=======
    return (0, _initialParams2.default)(function reflectOn(args, reflectCallback) {
        args.push((0, _rest2.default)(function callback(err, cbArgs) {
            if (err) {
                reflectCallback(null, {
                    error: err
                });
            } else {
                var value = null;
                if (cbArgs.length === 1) {
                    value = cbArgs[0];
                } else if (cbArgs.length > 1) {
                    value = cbArgs;
                }
                reflectCallback(null, {
                    value: value
                });
            }
        }));

        return fn.apply(this, args);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    });
}
module.exports = exports['default'];