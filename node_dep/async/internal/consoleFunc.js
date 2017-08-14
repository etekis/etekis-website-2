'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = consoleFunc;

var _arrayEach = require('lodash/_arrayEach');

var _arrayEach2 = _interopRequireDefault(_arrayEach);

<<<<<<< HEAD
var _slice = require('./slice');

var _slice2 = _interopRequireDefault(_slice);

var _wrapAsync = require('./wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
=======
var _rest = require('./rest');

var _rest2 = _interopRequireDefault(_rest);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function consoleFunc(name) {
<<<<<<< HEAD
    return function (fn /*, ...args*/) {
        var args = (0, _slice2.default)(arguments, 1);
        args.push(function (err /*, ...args*/) {
            var args = (0, _slice2.default)(arguments, 1);
=======
    return (0, _rest2.default)(function (fn, args) {
        fn.apply(null, args.concat([(0, _rest2.default)(function (err, args) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
            if (typeof console === 'object') {
                if (err) {
                    if (console.error) {
                        console.error(err);
                    }
                } else if (console[name]) {
                    (0, _arrayEach2.default)(args, function (x) {
                        console[name](x);
                    });
                }
            }
<<<<<<< HEAD
        });
        (0, _wrapAsync2.default)(fn).apply(null, args);
    };
=======
        })]));
    });
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
}
module.exports = exports['default'];