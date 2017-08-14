'use strict';

<<<<<<< HEAD
var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
=======
var Utils = require('./utils');

var defaults = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000,
    strictNullHandling: false,
    plainObjects: false,
    allowPrototypes: false,
    allowDots: false,
    decoder: Utils.decode
};

var parseValues = function parseValues(str, options) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

<<<<<<< HEAD
        var key, val;
        if (pos === -1) {
            key = options.decoder(part);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos));
            val = options.decoder(part.slice(pos + 1));
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
=======
        if (pos === -1) {
            obj[options.decoder(part)] = '';

            if (options.strictNullHandling) {
                obj[options.decoder(part)] = null;
            }
        } else {
            var key = options.decoder(part.slice(0, pos));
            var val = options.decoder(part.slice(pos + 1));

            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                obj[key] = [].concat(obj[key]).concat(val);
            } else {
                obj[key] = val;
            }
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        }
    }

    return obj;
};

<<<<<<< HEAD
var parseObject = function parseObjectRecursive(chain, val, options) {
=======
var parseObject = function parseObject(chain, val, options) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(parseObject(chain, val, options));
    } else {
        obj = options.plainObjects ? Object.create(null) : {};
<<<<<<< HEAD
        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
=======
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        var index = parseInt(cleanRoot, 10);
        if (
            !isNaN(index) &&
            root !== cleanRoot &&
            String(index) === cleanRoot &&
            index >= 0 &&
            (options.parseArrays && index <= options.arrayLimit)
        ) {
            obj = [];
            obj[index] = parseObject(chain, val, options);
        } else {
            obj[cleanRoot] = parseObject(chain, val, options);
        }
    }

    return obj;
};

<<<<<<< HEAD
var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
=======
var parseKeys = function parseKeys(givenKey, val, options) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
<<<<<<< HEAD
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
=======
    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

    // Stash the parent if it exists

    var keys = [];
<<<<<<< HEAD
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
=======
    if (segment[1]) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1])) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
            if (!options.allowPrototypes) {
                return;
            }
        }

<<<<<<< HEAD
        keys.push(parent);
=======
        keys.push(segment[1]);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
<<<<<<< HEAD
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
=======
        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
            if (!options.allowPrototypes) {
                continue;
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts || {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

<<<<<<< HEAD
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
=======
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
<<<<<<< HEAD
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
=======
        obj = Utils.merge(obj, newObj, options);
    }

    return Utils.compact(obj);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
};
