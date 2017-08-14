'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasNextTick = exports.hasSetImmediate = undefined;
exports.fallback = fallback;
exports.wrap = wrap;

<<<<<<< HEAD
var _slice = require('./slice');

var _slice2 = _interopRequireDefault(_slice);
=======
var _rest = require('./rest');

var _rest2 = _interopRequireDefault(_rest);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasSetImmediate = exports.hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = exports.hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
    setTimeout(fn, 0);
}

function wrap(defer) {
<<<<<<< HEAD
    return function (fn /*, ...args*/) {
        var args = (0, _slice2.default)(arguments, 1);
        defer(function () {
            fn.apply(null, args);
        });
    };
=======
    return (0, _rest2.default)(function (fn, args) {
        defer(function () {
            fn.apply(null, args);
        });
    });
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
}

var _defer;

if (hasSetImmediate) {
    _defer = setImmediate;
} else if (hasNextTick) {
    _defer = process.nextTick;
} else {
    _defer = fallback;
}

exports.default = wrap(_defer);