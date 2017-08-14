/*!
 * finalhandler
<<<<<<< HEAD
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
=======
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var debug = require('debug')('finalhandler')
<<<<<<< HEAD
var encodeUrl = require('encodeurl')
var escapeHtml = require('escape-html')
var onFinished = require('on-finished')
var parseUrl = require('parseurl')
=======
var escapeHtml = require('escape-html')
var onFinished = require('on-finished')
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
var statuses = require('statuses')
var unpipe = require('unpipe')

/**
 * Module variables.
 * @private
 */

<<<<<<< HEAD
var DOUBLE_SPACE_REGEXP = /\x20{2}/g
var NEWLINE_REGEXP = /\n/g

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function (fn) { process.nextTick(fn.bind.apply(fn, arguments)) }
var isFinished = onFinished.isFinished

/**
<<<<<<< HEAD
 * Create a minimal HTML document.
 *
 * @param {string} message
 * @private
 */

function createHtmlDocument (message) {
  var body = escapeHtml(message)
    .replace(NEWLINE_REGEXP, '<br>')
    .replace(DOUBLE_SPACE_REGEXP, ' &nbsp;')

  return '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '<meta charset="utf-8">\n' +
    '<title>Error</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '<pre>' + body + '</pre>\n' +
    '</body>\n' +
    '</html>\n'
}

/**
=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * Module exports.
 * @public
 */

module.exports = finalhandler

/**
 * Create a function to handle the final response.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Object} [options]
 * @return {Function}
 * @public
 */

function finalhandler (req, res, options) {
  var opts = options || {}

  // get environment
  var env = opts.env || process.env.NODE_ENV || 'development'

  // get error callback
  var onerror = opts.onerror

  return function (err) {
<<<<<<< HEAD
    var headers
    var msg
=======
    var headers = Object.create(null)
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    var status

    // ignore 404 on in-flight response
    if (!err && res._header) {
      debug('cannot 404 after headers sent')
      return
    }

    // unhandled error
    if (err) {
      // respect status code from error
<<<<<<< HEAD
      status = getErrorStatusCode(err)

      // respect headers from error
      if (status !== undefined) {
        headers = getErrorHeaders(err)
      }

      // fallback to status code on response
      if (status === undefined) {
        status = getResponseStatusCode(res)
      }

      // get error message
      msg = getErrorMessage(err, status, env)
    } else {
      // not found
      status = 404
      msg = 'Cannot ' + req.method + ' ' + encodeUrl(parseUrl.original(req).pathname)
=======
      status = getErrorStatusCode(err) || res.statusCode

      // default status code to 500 if outside valid range
      if (typeof status !== 'number' || status < 400 || status > 599) {
        status = 500
      }

      // respect err.headers
      if (err.headers && (err.status === status || err.statusCode === status)) {
        var keys = Object.keys(err.headers)
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i]
          headers[key] = err.headers[key]
        }
      }

      // production gets a basic error message
      var msg = env === 'production'
        ? statuses[status]
        : err.stack || err.toString()
      msg = escapeHtml(msg)
        .replace(/\n/g, '<br>')
        .replace(/\x20{2}/g, ' &nbsp;') + '\n'
    } else {
      status = 404
      msg = 'Cannot ' + escapeHtml(req.method) + ' ' + escapeHtml(req.originalUrl || req.url) + '\n'
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    }

    debug('default %s', status)

    // schedule onerror callback
    if (err && onerror) {
      defer(onerror, err, req, res)
    }

    // cannot actually respond
    if (res._header) {
      debug('cannot %d after headers sent', status)
      req.socket.destroy()
      return
    }

    // send response
    send(req, res, status, headers, msg)
  }
}

/**
<<<<<<< HEAD
 * Get headers from Error object.
 *
 * @param {Error} err
 * @return {object}
 * @private
 */

function getErrorHeaders (err) {
  if (!err.headers || typeof err.headers !== 'object') {
    return undefined
  }

  var headers = Object.create(null)
  var keys = Object.keys(err.headers)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    headers[key] = err.headers[key]
  }

  return headers
}

/**
 * Get message from Error object, fallback to status message.
 *
 * @param {Error} err
 * @param {number} status
 * @param {string} env
 * @return {string}
 * @private
 */

function getErrorMessage (err, status, env) {
  var msg

  if (env !== 'production') {
    // use err.stack, which typically includes err.message
    msg = err.stack

    // fallback to err.toString() when possible
    if (!msg && typeof err.toString === 'function') {
      msg = err.toString()
    }
  }

  return msg || statuses[status]
}

/**
=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * Get status code from Error object.
 *
 * @param {Error} err
 * @return {number}
 * @private
 */

function getErrorStatusCode (err) {
  // check err.status
  if (typeof err.status === 'number' && err.status >= 400 && err.status < 600) {
    return err.status
  }

  // check err.statusCode
  if (typeof err.statusCode === 'number' && err.statusCode >= 400 && err.statusCode < 600) {
    return err.statusCode
  }

  return undefined
}

/**
<<<<<<< HEAD
 * Get status code from response.
 *
 * @param {OutgoingMessage} res
 * @return {number}
 * @private
 */

function getResponseStatusCode (res) {
  var status = res.statusCode

  // default status code to 500 if outside valid range
  if (typeof status !== 'number' || status < 400 || status > 599) {
    status = 500
  }

  return status
}

/**
=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * Send response.
 *
 * @param {IncomingMessage} req
 * @param {OutgoingMessage} res
 * @param {number} status
 * @param {object} headers
<<<<<<< HEAD
 * @param {string} message
 * @private
 */

function send (req, res, status, headers, message) {
  function write () {
    // response body
    var body = createHtmlDocument(message)

=======
 * @param {string} body
 * @private
 */

function send (req, res, status, headers, body) {
  function write () {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    // response status
    res.statusCode = status
    res.statusMessage = statuses[status]

    // response headers
<<<<<<< HEAD
    setHeaders(res, headers)

    // security headers
    res.setHeader('Content-Security-Policy', "default-src 'self'")
=======
    var keys = Object.keys(headers)
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      res.setHeader(key, headers[key])
    }

    // security header for content sniffing
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    res.setHeader('X-Content-Type-Options', 'nosniff')

    // standard headers
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Content-Length', Buffer.byteLength(body, 'utf8'))

    if (req.method === 'HEAD') {
      res.end()
      return
    }

    res.end(body, 'utf8')
  }

  if (isFinished(req)) {
    write()
    return
  }

  // unpipe everything from the request
  unpipe(req)

  // flush the request
  onFinished(req, write)
  req.resume()
}
<<<<<<< HEAD

/**
 * Set response headers from an object.
 *
 * @param {OutgoingMessage} res
 * @param {object} headers
 * @private
 */

function setHeaders (res, headers) {
  if (!headers) {
    return
  }

  var keys = Object.keys(headers)
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    res.setHeader(key, headers[key])
  }
}
=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
