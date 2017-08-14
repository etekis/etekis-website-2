'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _createTester;

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _breakLoop = require('./breakLoop');

var _breakLoop2 = _interopRequireDefault(_breakLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
function _createTester(check, getResult) {
    return function (eachfn, arr, iteratee, cb) {
        cb = cb || _noop2.default;
        var testPassed = false;
        var testResult;
        eachfn(arr, function (value, _, callback) {
            iteratee(value, function (err, result) {
                if (err) {
                    callback(err);
                } else if (check(result) && !testResult) {
                    testPassed = true;
                    testResult = getResult(true, value);
                    callback(null, _breakLoop2.default);
=======
function _createTester(eachfn, check, getResult) {
    return function (arr, limit, iteratee, cb) {
        function done() {
            if (cb) {
                cb(null, getResult(false));
            }
        }
        function wrappedIteratee(x, _, callback) {
            if (!cb) return callback();
            iteratee(x, function (err, v) {
                // Check cb as another iteratee may have resolved with a
                // value or error since we started this iteratee
                if (cb && (err || check(v))) {
                    if (err) cb(err);else cb(err, getResult(true, x));
                    cb = iteratee = false;
                    callback(err, _breakLoop2.default);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
                } else {
                    callback();
                }
            });
<<<<<<< HEAD
        }, function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, testPassed ? testResult : getResult(false));
            }
        });
=======
        }
        if (arguments.length > 3) {
            cb = cb || _noop2.default;
            eachfn(arr, limit, wrappedIteratee, done);
        } else {
            cb = iteratee;
            cb = cb || _noop2.default;
            iteratee = limit;
            eachfn(arr, wrappedIteratee, done);
        }
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    };
}
module.exports = exports['default'];