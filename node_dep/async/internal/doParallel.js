'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doParallel;

var _eachOf = require('../eachOf');

var _eachOf2 = _interopRequireDefault(_eachOf);

<<<<<<< HEAD
var _wrapAsync = require('./wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doParallel(fn) {
    return function (obj, iteratee, callback) {
<<<<<<< HEAD
        return fn(_eachOf2.default, obj, (0, _wrapAsync2.default)(iteratee), callback);
=======
        return fn(_eachOf2.default, obj, iteratee, callback);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    };
}
module.exports = exports['default'];