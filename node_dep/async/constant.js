'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

<<<<<<< HEAD
exports.default = function () /*...values*/{
    var values = (0, _slice2.default)(arguments);
    var args = [null].concat(values);
    return function () /*...ignoredArgs, callback*/{
        var callback = arguments[arguments.length - 1];
        return callback.apply(this, args);
    };
};

var _slice = require('./internal/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
=======
var _rest = require('./internal/rest');

var _rest2 = _interopRequireDefault(_rest);

var _initialParams = require('./internal/initialParams');

var _initialParams2 = _interopRequireDefault(_initialParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

/**
 * Returns a function that when called, calls-back with the values provided.
 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
 * [`auto`]{@link module:ControlFlow.auto}.
 *
 * @name constant
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {...*} arguments... - Any number of arguments to automatically invoke
 * callback with.
<<<<<<< HEAD
 * @returns {AsyncFunction} Returns a function that when invoked, automatically
=======
 * @returns {Function} Returns a function that when invoked, automatically
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * invokes the callback with the previous given arguments.
 * @example
 *
 * async.waterfall([
 *     async.constant(42),
 *     function (value, next) {
 *         // value === 42
 *     },
 *     //...
 * ], callback);
 *
 * async.waterfall([
 *     async.constant(filename, "utf8"),
 *     fs.readFile,
 *     function (fileData, next) {
 *         //...
 *     }
 *     //...
 * ], callback);
 *
 * async.auto({
 *     hostname: async.constant("https://server.net/"),
 *     port: findFreePort,
 *     launchServer: ["hostname", "port", function (options, cb) {
 *         startServer(options, cb);
 *     }],
 *     //...
 * }, callback);
 */
<<<<<<< HEAD
=======
exports.default = (0, _rest2.default)(function (values) {
    var args = [null].concat(values);
    return (0, _initialParams2.default)(function (ignoredArgs, callback) {
        return callback.apply(this, args);
    });
});
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
module.exports = exports['default'];