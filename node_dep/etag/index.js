/*!
 * etag
<<<<<<< HEAD
 * Copyright(c) 2014-2016 Douglas Christopher Wilson
=======
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * MIT Licensed
 */

'use strict'

/**
 * Module exports.
 * @public
 */

module.exports = etag

/**
 * Module dependencies.
 * @private
 */

var crypto = require('crypto')
var Stats = require('fs').Stats

/**
 * Module variables.
 * @private
 */

var base64PadCharRegExp = /=+$/
var toString = Object.prototype.toString

/**
 * Generate an entity tag.
 *
 * @param {Buffer|string} entity
 * @return {string}
 * @private
 */

<<<<<<< HEAD
function entitytag (entity) {
  if (entity.length === 0) {
    // fast-path empty
    return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"'
=======
function entitytag(entity) {
  if (entity.length === 0) {
    // fast-path empty
    return '"0-1B2M2Y8AsgTpgAmY7PhCfg"'
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  }

  // compute hash of entity
  var hash = crypto
<<<<<<< HEAD
    .createHash('sha1')
=======
    .createHash('md5')
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    .update(entity, 'utf8')
    .digest('base64')
    .replace(base64PadCharRegExp, '')

  // compute length of entity
  var len = typeof entity === 'string'
    ? Buffer.byteLength(entity, 'utf8')
    : entity.length

  return '"' + len.toString(16) + '-' + hash + '"'
}

/**
 * Create a simple ETag.
 *
 * @param {string|Buffer|Stats} entity
 * @param {object} [options]
 * @param {boolean} [options.weak]
 * @return {String}
 * @public
 */

<<<<<<< HEAD
function etag (entity, options) {
=======
function etag(entity, options) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  if (entity == null) {
    throw new TypeError('argument entity is required')
  }

  // support fs.Stats object
  var isStats = isstats(entity)
  var weak = options && typeof options.weak === 'boolean'
    ? options.weak
    : isStats

  // validate argument
  if (!isStats && typeof entity !== 'string' && !Buffer.isBuffer(entity)) {
    throw new TypeError('argument entity must be string, Buffer, or fs.Stats')
  }

  // generate entity tag
  var tag = isStats
    ? stattag(entity)
    : entitytag(entity)

  return weak
    ? 'W/' + tag
    : tag
}

/**
 * Determine if object is a Stats object.
 *
 * @param {object} obj
 * @return {boolean}
 * @api private
 */

<<<<<<< HEAD
function isstats (obj) {
=======
function isstats(obj) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  // genuine fs.Stats
  if (typeof Stats === 'function' && obj instanceof Stats) {
    return true
  }

  // quack quack
<<<<<<< HEAD
  return obj && typeof obj === 'object' &&
    'ctime' in obj && toString.call(obj.ctime) === '[object Date]' &&
    'mtime' in obj && toString.call(obj.mtime) === '[object Date]' &&
    'ino' in obj && typeof obj.ino === 'number' &&
    'size' in obj && typeof obj.size === 'number'
=======
  return obj && typeof obj === 'object'
    && 'ctime' in obj && toString.call(obj.ctime) === '[object Date]'
    && 'mtime' in obj && toString.call(obj.mtime) === '[object Date]'
    && 'ino' in obj && typeof obj.ino === 'number'
    && 'size' in obj && typeof obj.size === 'number'
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
}

/**
 * Generate a tag for a stat.
 *
 * @param {object} stat
 * @return {string}
 * @private
 */

<<<<<<< HEAD
function stattag (stat) {
=======
function stattag(stat) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  var mtime = stat.mtime.getTime().toString(16)
  var size = stat.size.toString(16)

  return '"' + size + '-' + mtime + '"'
}
