'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = asyncify;

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _initialParams = require('./internal/initialParams');

var _initialParams2 = _interopRequireDefault(_initialParams);

<<<<<<< HEAD
var _setImmediate = require('./internal/setImmediate');

var _setImmediate2 = _interopRequireDefault(_setImmediate);

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
<<<<<<< HEAD
 * This also means you can asyncify ES2017 `async` functions.
=======
 * This also means you can asyncify ES2016 `async` functions.
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
<<<<<<< HEAD
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
=======
 * @param {Function} func - The synchronous function to convert to an
 * asynchronous function.
 * @returns {Function} An asynchronous wrapper of the `func`. To be invoked with
 * (callback).
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
<<<<<<< HEAD
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
=======
 * // es6 example
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */
function asyncify(func) {
    return (0, _initialParams2.default)(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if ((0, _isObject2.default)(result) && typeof result.then === 'function') {
            result.then(function (value) {
<<<<<<< HEAD
                invokeCallback(callback, null, value);
            }, function (err) {
                invokeCallback(callback, err.message ? err : new Error(err));
=======
                callback(null, value);
            }, function (err) {
                callback(err.message ? err : new Error(err));
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
            });
        } else {
            callback(null, result);
        }
    });
}
<<<<<<< HEAD

function invokeCallback(callback, error, value) {
    try {
        callback(error, value);
    } catch (e) {
        (0, _setImmediate2.default)(rethrow, e);
    }
}

function rethrow(error) {
    throw error;
}
=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
module.exports = exports['default'];