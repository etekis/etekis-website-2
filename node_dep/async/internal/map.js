'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _asyncMap;

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

<<<<<<< HEAD
var _wrapAsync = require('./wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || _noop2.default;
    arr = arr || [];
    var results = [];
    var counter = 0;
<<<<<<< HEAD
    var _iteratee = (0, _wrapAsync2.default)(iteratee);

    eachfn(arr, function (value, _, callback) {
        var index = counter++;
        _iteratee(value, function (err, v) {
=======

    eachfn(arr, function (value, _, callback) {
        var index = counter++;
        iteratee(value, function (err, v) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
            results[index] = v;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}
module.exports = exports['default'];