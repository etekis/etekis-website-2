'use strict';

<<<<<<< HEAD
var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
=======
var Stringify = require('./stringify');
var Parse = require('./parse');

module.exports = {
    stringify: Stringify,
    parse: Parse
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
};
