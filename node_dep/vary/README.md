# vary

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Manipulate the HTTP Vary header

## Installation

<<<<<<< HEAD
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally): 

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```sh
$ npm install vary
```

## API

<<<<<<< HEAD
<!-- eslint-disable no-unused-vars -->

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```js
var vary = require('vary')
```

### vary(res, field)

Adds the given header `field` to the `Vary` response header of `res`.
This can be a string of a single field, a string of a valid `Vary`
header, or an array of multiple fields.

This will append the header if not already listed, otherwise leaves
it listed in the current location.

<<<<<<< HEAD
<!-- eslint-disable no-undef -->

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```js
// Append "Origin" to the Vary header of the response
vary(res, 'Origin')
```

### vary.append(header, field)

Adds the given header `field` to the `Vary` response header string `header`.
This can be a string of a single field, a string of a valid `Vary` header,
or an array of multiple fields.

This will append the header if not already listed, otherwise leaves
it listed in the current location. The new header string is returned.

<<<<<<< HEAD
<!-- eslint-disable no-undef -->

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```js
// Get header string appending "Origin" to "Accept, User-Agent"
vary.append('Accept, User-Agent', 'Origin')
```

## Examples

### Updating the Vary header when content is based on it

```js
var http = require('http')
var vary = require('vary')

<<<<<<< HEAD
http.createServer(function onRequest (req, res) {
=======
http.createServer(function onRequest(req, res) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
  // about to user-agent sniff
  vary(res, 'User-Agent')

  var ua = req.headers['user-agent'] || ''
  var isMobile = /mobi|android|touch|mini/i.test(ua)

  // serve site, depending on isMobile
  res.setHeader('Content-Type', 'text/html')
  res.end('You are (probably) ' + (isMobile ? '' : 'not ') + 'a mobile user')
})
```

## Testing

```sh
$ npm test
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/vary.svg
[npm-url]: https://npmjs.org/package/vary
[node-version-image]: https://img.shields.io/node/v/vary.svg
<<<<<<< HEAD
[node-version-url]: https://nodejs.org/en/download
=======
[node-version-url]: http://nodejs.org/download/
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
[travis-image]: https://img.shields.io/travis/jshttp/vary/master.svg
[travis-url]: https://travis-ci.org/jshttp/vary
[coveralls-image]: https://img.shields.io/coveralls/jshttp/vary/master.svg
[coveralls-url]: https://coveralls.io/r/jshttp/vary
[downloads-image]: https://img.shields.io/npm/dm/vary.svg
[downloads-url]: https://npmjs.org/package/vary
