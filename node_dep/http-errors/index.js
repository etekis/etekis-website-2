/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

<<<<<<< HEAD
var deprecate = require('depd')('http-errors')
=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
var setPrototypeOf = require('setprototypeof')
var statuses = require('statuses')
var inherits = require('inherits')

/**
 * Module exports.
 * @public
 */

module.exports = createError
module.exports.HttpError = createHttpErrorConstructor()

// Populate exports for all constructors
populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError)

/**
<<<<<<< HEAD
 * Get the code class of a status code.
 * @private
 */

function codeClass (status) {
  return Number(String(status).charAt(0) + '00')
}

/**
=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
 * Create a new HTTP Error.
 *
 * @returns {Error}
 * @public
 */

function createError () {
  // so much arity going on ~_~
  var err
  var msg
  var status = 500
  var props = {}
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    if (arg instanceof Error) {
      err = arg
      status = err.status || err.statusCode || status
      continue
    }
    switch (typeof arg) {
      case 'string':
        msg = arg
        break
      case 'number':
        status = arg
<<<<<<< HEAD
        if (i !== 0) {
          deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)')
        }
=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        break
      case 'object':
        props = arg
        break
    }
  }

<<<<<<< HEAD
  if (typeof status === 'number' && (status < 400 || status >= 600)) {
    deprecate('non-error status code; use only 4xx or 5xx status codes')
  }

  if (typeof status !== 'number' ||
    (!statuses[status] && (status < 400 || status >= 600))) {
=======
  if (typeof status !== 'number' || !statuses[status]) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    status = 500
  }

  // constructor
<<<<<<< HEAD
  var HttpError = createError[status] || createError[codeClass(status)]
=======
  var HttpError = createError[status]
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

  if (!err) {
    // create error
    err = HttpError
      ? new HttpError(msg)
      : new Error(msg || statuses[status])
    Error.captureStackTrace(err, createError)
  }

<<<<<<< HEAD
  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
=======
  if (!HttpError || !(err instanceof HttpError)) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    // add properties to generic error
    err.expose = status < 500
    err.status = err.statusCode = status
  }

  for (var key in props) {
    if (key !== 'status' && key !== 'statusCode') {
      err[key] = props[key]
    }
  }

  return err
}

/**
 * Create HTTP error abstract base class.
 * @private
 */

function createHttpErrorConstructor () {
  function HttpError () {
    throw new TypeError('cannot construct abstract class')
  }

  inherits(HttpError, Error)

  return HttpError
}

/**
 * Create a constructor for a client error.
 * @private
 */

function createClientErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ClientError (message) {
    // create the error object
<<<<<<< HEAD
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)
=======
    var err = new Error(message != null ? message : statuses[code])
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ClientError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ClientError.prototype)

<<<<<<< HEAD
    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ClientError, HttpError)

  ClientError.prototype.status = code
  ClientError.prototype.statusCode = code
  ClientError.prototype.expose = true

  return ClientError
}

/**
 * Create a constructor for a server error.
 * @private
 */

function createServerErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ServerError (message) {
    // create the error object
<<<<<<< HEAD
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)
=======
    var err = new Error(message != null ? message : statuses[code])
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ServerError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ServerError.prototype)

<<<<<<< HEAD
    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ServerError, HttpError)

  ServerError.prototype.status = code
  ServerError.prototype.statusCode = code
  ServerError.prototype.expose = false

  return ServerError
}

/**
 * Populate the exports object with constructors for every error class.
 * @private
 */

function populateConstructorExports (exports, codes, HttpError) {
  codes.forEach(function forEachCode (code) {
    var CodeError
    var name = toIdentifier(statuses[code])

<<<<<<< HEAD
    switch (codeClass(code)) {
      case 400:
        CodeError = createClientErrorConstructor(HttpError, name, code)
        break
      case 500:
=======
    switch (String(code).charAt(0)) {
      case '4':
        CodeError = createClientErrorConstructor(HttpError, name, code)
        break
      case '5':
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        CodeError = createServerErrorConstructor(HttpError, name, code)
        break
    }

    if (CodeError) {
      // export the constructor
      exports[code] = CodeError
      exports[name] = CodeError
    }
  })

  // backwards-compatibility
<<<<<<< HEAD
  exports["I'mateapot"] = deprecate.function(exports.ImATeapot,
    '"I\'mateapot"; use "ImATeapot" instead')
=======
  exports["I'mateapot"] = exports.ImATeapot
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
}

/**
 * Convert a string of words to a JavaScript identifier.
 * @private
 */

function toIdentifier (str) {
  return str.split(' ').map(function (token) {
    return token.slice(0, 1).toUpperCase() + token.slice(1)
  }).join('').replace(/[^ _0-9a-z]/gi, '')
}
