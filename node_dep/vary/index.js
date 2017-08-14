/*!
 * vary
<<<<<<< HEAD
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'
=======
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

/**
 * Module exports.
 */

<<<<<<< HEAD
module.exports = vary
module.exports.append = append

/**
 * Regular expression to split on commas, trimming spaces
 * @private
 */

var ARRAY_SPLIT_REGEXP = / *, */
=======
module.exports = vary;
module.exports.append = append;
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

/**
 * RegExp to match field-name in RFC 7230 sec 3.2
 *
 * field-name    = token
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 */

<<<<<<< HEAD
var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/
=======
var fieldNameRegExp = /^[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+$/
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

/**
 * Append a field to a vary header.
 *
 * @param {String} header
 * @param {String|Array} field
 * @return {String}
<<<<<<< HEAD
 * @public
 */

function append (header, field) {
  if (typeof header !== 'string') {
    throw new TypeError('header argument is required')
  }

  if (!field) {
    throw new TypeError('field argument is required')
=======
 * @api public
 */

function append(header, field) {
  if (typeof header !== 'string') {
    throw new TypeError('header argument is required');
  }

  if (!field) {
    throw new TypeError('field argument is required');
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  }

  // get fields array
  var fields = !Array.isArray(field)
    ? parse(String(field))
<<<<<<< HEAD
    : field

  // assert on invalid field names
  for (var j = 0; j < fields.length; j++) {
    if (!FIELD_NAME_REGEXP.test(fields[j])) {
      throw new TypeError('field argument contains an invalid header name')
=======
    : field;

  // assert on invalid field names
  for (var i = 0; i < fields.length; i++) {
    if (!fieldNameRegExp.test(fields[i])) {
      throw new TypeError('field argument contains an invalid header name');
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    }
  }

  // existing, unspecified vary
  if (header === '*') {
<<<<<<< HEAD
    return header
  }

  // enumerate current values
  var val = header
  var vals = parse(header.toLowerCase())

  // unspecified vary
  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
    return '*'
  }

  for (var i = 0; i < fields.length; i++) {
    var fld = fields[i].toLowerCase()

    // append value (case-preserving)
    if (vals.indexOf(fld) === -1) {
      vals.push(fld)
      val = val
        ? val + ', ' + fields[i]
        : fields[i]
    }
  }

  return val
=======
    return header;
  }

  // enumerate current values
  var val = header;
  var vals = parse(header.toLowerCase());

  // unspecified vary
  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
    return '*';
  }

  for (var i = 0; i < fields.length; i++) {
    var fld = fields[i].toLowerCase();

    // append value (case-preserving)
    if (vals.indexOf(fld) === -1) {
      vals.push(fld);
      val = val
        ? val + ', ' + fields[i]
        : fields[i];
    }
  }

  return val;
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
}

/**
 * Parse a vary header into an array.
 *
 * @param {String} header
 * @return {Array}
<<<<<<< HEAD
 * @private
 */

function parse (header) {
  return header.trim().split(ARRAY_SPLIT_REGEXP)
=======
 * @api private
 */

function parse(header) {
  return header.trim().split(/ *, */);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
}

/**
 * Mark that a request is varied on a header field.
 *
 * @param {Object} res
 * @param {String|Array} field
<<<<<<< HEAD
 * @public
 */

function vary (res, field) {
  if (!res || !res.getHeader || !res.setHeader) {
    // quack quack
    throw new TypeError('res argument is required')
=======
 * @api public
 */

function vary(res, field) {
  if (!res || !res.getHeader || !res.setHeader) {
    // quack quack
    throw new TypeError('res argument is required');
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  }

  // get existing header
  var val = res.getHeader('Vary') || ''
  var header = Array.isArray(val)
    ? val.join(', ')
<<<<<<< HEAD
    : String(val)

  // set new header
  if ((val = append(header, field))) {
    res.setHeader('Vary', val)
=======
    : String(val);

  // set new header
  if ((val = append(header, field))) {
    res.setHeader('Vary', val);
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  }
}
