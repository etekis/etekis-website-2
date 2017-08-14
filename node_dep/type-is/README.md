# type-is

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Infer the content-type of a request.

### Install

<<<<<<< HEAD
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```sh
$ npm install type-is
```

## API

```js
var http = require('http')
<<<<<<< HEAD
var typeis = require('type-is')

http.createServer(function (req, res) {
  var istext = typeis(req, ['text/*'])
=======
var is   = require('type-is')

http.createServer(function (req, res) {
  var istext = is(req, ['text/*'])
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  res.end('you ' + (istext ? 'sent' : 'did not send') + ' me text')
})
```

<<<<<<< HEAD
### type = typeis(request, types)

`request` is the node HTTP request. `types` is an array of types.

<!-- eslint-disable no-undef -->

```js
// req.headers.content-type = 'application/json'

typeis(req, ['json'])             // 'json'
typeis(req, ['html', 'json'])     // 'json'
typeis(req, ['application/*'])    // 'application/json'
typeis(req, ['application/json']) // 'application/json'

typeis(req, ['html']) // false
```

### typeis.hasBody(request)
=======
### type = is(request, types)

`request` is the node HTTP request. `types` is an array of types.

```js
// req.headers.content-type = 'application/json'

is(req, ['json'])             // 'json'
is(req, ['html', 'json'])     // 'json'
is(req, ['application/*'])    // 'application/json'
is(req, ['application/json']) // 'application/json'

is(req, ['html']) // false
```

### is.hasBody(request)
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

Returns a Boolean if the given `request` has a body, regardless of the
`Content-Type` header.

Having a body has no relation to how large the body is (it may be 0 bytes).
This is similar to how file existence works. If a body does exist, then this
indicates that there is data to read from the Node.js request stream.

<<<<<<< HEAD
<!-- eslint-disable no-undef -->

```js
if (typeis.hasBody(req)) {
=======
```js
if (is.hasBody(req)) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  // read the body, since there is one

  req.on('data', function (chunk) {
    // ...
  })
}
```

<<<<<<< HEAD
### type = typeis.is(mediaType, types)

`mediaType` is the [media type](https://tools.ietf.org/html/rfc6838) string. `types` is an array of types.

<!-- eslint-disable no-undef -->

```js
var mediaType = 'application/json'

typeis.is(mediaType, ['json'])             // 'json'
typeis.is(mediaType, ['html', 'json'])     // 'json'
typeis.is(mediaType, ['application/*'])    // 'application/json'
typeis.is(mediaType, ['application/json']) // 'application/json'

typeis.is(mediaType, ['html']) // false
=======
### type = is.is(mediaType, types)

`mediaType` is the [media type](https://tools.ietf.org/html/rfc6838) string. `types` is an array of types.

```js
var mediaType = 'application/json'

is.is(mediaType, ['json'])             // 'json'
is.is(mediaType, ['html', 'json'])     // 'json'
is.is(mediaType, ['application/*'])    // 'application/json'
is.is(mediaType, ['application/json']) // 'application/json'

is.is(mediaType, ['html']) // false
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```

### Each type can be:

- An extension name such as `json`. This name will be returned if matched.
- A mime type such as `application/json`.
- A mime type with a wildcard such as `*/*` or `*/json` or `application/*`. The full mime type will be returned if matched.
- A suffix such as `+json`. This can be combined with a wildcard such as `*/vnd+json` or `application/*+json`. The full mime type will be returned if matched.

`false` will be returned if no type matches or the content type is invalid.

`null` will be returned if the request does not have a body.

## Examples

<<<<<<< HEAD
### Example body parser

```js
var express = require('express')
var typeis = require('type-is')

var app = express()

app.use(function bodyParser (req, res, next) {
  if (!typeis.hasBody(req)) {
    return next()
  }

  switch (typeis(req, ['urlencoded', 'json', 'multipart'])) {
    case 'urlencoded':
      // parse urlencoded body
      throw new Error('implement urlencoded body parsing')
    case 'json':
      // parse json body
      throw new Error('implement json body parsing')
    case 'multipart':
      // parse multipart body
      throw new Error('implement multipart body parsing')
=======
#### Example body parser

```js
var is = require('type-is');

function bodyParser(req, res, next) {
  if (!is.hasBody(req)) {
    return next()
  }

  switch (is(req, ['urlencoded', 'json', 'multipart'])) {
    case 'urlencoded':
      // parse urlencoded body
      throw new Error('implement urlencoded body parsing')
      break
    case 'json':
      // parse json body
      throw new Error('implement json body parsing')
      break
    case 'multipart':
      // parse multipart body
      throw new Error('implement multipart body parsing')
      break
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    default:
      // 415 error code
      res.statusCode = 415
      res.end()
<<<<<<< HEAD
      break
  }
})
=======
      return
  }
}
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/type-is.svg
[npm-url]: https://npmjs.org/package/type-is
[node-version-image]: https://img.shields.io/node/v/type-is.svg
[node-version-url]: https://nodejs.org/en/download/
[travis-image]: https://img.shields.io/travis/jshttp/type-is/master.svg
[travis-url]: https://travis-ci.org/jshttp/type-is
[coveralls-image]: https://img.shields.io/coveralls/jshttp/type-is/master.svg
[coveralls-url]: https://coveralls.io/r/jshttp/type-is?branch=master
[downloads-image]: https://img.shields.io/npm/dm/type-is.svg
[downloads-url]: https://npmjs.org/package/type-is
