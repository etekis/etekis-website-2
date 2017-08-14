"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = unmemoize;
/**
 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
 * unmemoized form. Handy for testing.
 *
 * @name unmemoize
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.memoize]{@link module:Utils.memoize}
 * @category Util
<<<<<<< HEAD
 * @param {AsyncFunction} fn - the memoized function
 * @returns {AsyncFunction} a function that calls the original unmemoized function
=======
 * @param {Function} fn - the memoized function
 * @returns {Function} a function that calls the original unmemoized function
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 */
function unmemoize(fn) {
    return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
    };
}
module.exports = exports["default"];