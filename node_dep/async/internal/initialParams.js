'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (fn) {
<<<<<<< HEAD
    return function () /*...args, callback*/{
        var args = (0, _slice2.default)(arguments);
        var callback = args.pop();
        fn.call(this, args, callback);
    };
};

var _slice = require('./slice');

var _slice2 = _interopRequireDefault(_slice);
=======
    return (0, _rest2.default)(function (args /*..., callback*/) {
        var callback = args.pop();
        fn.call(this, args, callback);
    });
};

var _rest = require('./rest');

var _rest2 = _interopRequireDefault(_rest);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];