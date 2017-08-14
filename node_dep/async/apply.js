'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

<<<<<<< HEAD
exports.default = function (fn /*, ...args*/) {
    var args = (0, _slice2.default)(arguments, 1);
    return function () /*callArgs*/{
        var callArgs = (0, _slice2.default)(arguments);
        return fn.apply(null, args.concat(callArgs));
    };
};

var _slice = require('./internal/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

=======
var _rest = require('./internal/rest');

var _rest2 = _interopRequireDefault(_rest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
/**
 * Creates a continuation function with some arguments already applied.
 *
 * Useful as a shorthand when combined with other control flow functions. Any
 * arguments passed to the returned function are added to the arguments
 * originally passed to apply.
 *
 * @name apply
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
<<<<<<< HEAD
 * @param {Function} fn - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
 * @returns {Function} the partially-applied function
=======
 * @param {Function} function - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * @example
 *
 * // using apply
 * async.parallel([
 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
 *     async.apply(fs.writeFile, 'testfile2', 'test2')
 * ]);
 *
 *
 * // the same process without using apply
 * async.parallel([
 *     function(callback) {
 *         fs.writeFile('testfile1', 'test1', callback);
 *     },
 *     function(callback) {
 *         fs.writeFile('testfile2', 'test2', callback);
 *     }
 * ]);
 *
 * // It's possible to pass any number of additional arguments when calling the
 * // continuation:
 *
 * node> var fn = async.apply(sys.puts, 'one');
 * node> fn('two', 'three');
 * one
 * two
 * three
 */
<<<<<<< HEAD
=======
exports.default = (0, _rest2.default)(function (fn, args) {
    return (0, _rest2.default)(function (callArgs) {
        return fn.apply(null, args.concat(callArgs));
    });
});
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
module.exports = exports['default'];