# etag

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

<<<<<<< HEAD
Create simple HTTP ETags

This module generates HTTP ETags (as defined in RFC 7232) for use in
HTTP responses.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

=======
Create simple ETags

## Installation

>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```sh
$ npm install etag
```

## API

<<<<<<< HEAD
<!-- eslint-disable no-unused-vars --> 

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```js
var etag = require('etag')
```

### etag(entity, [options])

Generate a strong ETag for the given entity. This should be the complete
body of the entity. Strings, `Buffer`s, and `fs.Stats` are accepted. By
default, a strong ETag is generated except for `fs.Stats`, which will
generate a weak ETag (this can be overwritten by `options.weak`).

<<<<<<< HEAD
<!-- eslint-disable no-undef --> 

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```js
res.setHeader('ETag', etag(body))
```

#### Options

`etag` accepts these properties in the options object.

##### weak

Specifies if the generated ETag will include the weak validator mark (that
is, the leading `W/`). The actual entity tag is the same. The default value
is `false`, unless the `entity` is `fs.Stats`, in which case it is `true`.

## Testing

```sh
$ npm test
```

## Benchmark

```bash
$ npm run-script bench

<<<<<<< HEAD
> etag@1.8.0 bench nodejs-etag
> node benchmark/index.js

  http_parser@2.7.0
  node@6.9.1
  v8@5.1.281.84
  uv@1.9.1
  zlib@1.2.8
  ares@1.10.1-DEV
  icu@57.1
  modules@48
  openssl@1.0.2j
=======
> etag@1.6.0 bench nodejs-etag
> node benchmark/index.js

  http_parser@1.0
  node@0.10.33
  v8@3.14.5.9
  ares@1.9.0-DEV
  uv@0.10.29
  zlib@1.2.3
  modules@11
  openssl@1.0.1j
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

> node benchmark/body0-100b.js

  100B body

<<<<<<< HEAD
  4 tests completed.

* buffer - strong x 498,600 ops/sec ±0.82% (191 runs sampled)
* buffer - weak   x 496,249 ops/sec ±0.59% (179 runs sampled)
  string - strong x 466,298 ops/sec ±0.88% (186 runs sampled)
  string - weak   x 464,298 ops/sec ±0.84% (184 runs sampled)
=======
  1 test completed.
  2 tests completed.
  3 tests completed.
  4 tests completed.

* buffer - strong x 289,198 ops/sec ±1.09% (190 runs sampled)
* buffer - weak   x 287,838 ops/sec ±0.91% (189 runs sampled)
* string - strong x 284,586 ops/sec ±1.05% (192 runs sampled)
* string - weak   x 287,439 ops/sec ±0.82% (192 runs sampled)
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

> node benchmark/body1-1kb.js

  1KB body

<<<<<<< HEAD
  4 tests completed.

* buffer - strong x 346,535 ops/sec ±0.32% (189 runs sampled)
* buffer - weak   x 344,958 ops/sec ±0.52% (185 runs sampled)
  string - strong x 259,672 ops/sec ±0.82% (191 runs sampled)
  string - weak   x 260,931 ops/sec ±0.76% (190 runs sampled)
=======
  1 test completed.
  2 tests completed.
  3 tests completed.
  4 tests completed.

* buffer - strong x 212,423 ops/sec ±0.75% (193 runs sampled)
* buffer - weak   x 211,871 ops/sec ±0.74% (194 runs sampled)
  string - strong x 205,291 ops/sec ±0.86% (194 runs sampled)
  string - weak   x 208,463 ops/sec ±0.79% (192 runs sampled)
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

> node benchmark/body2-5kb.js

  5KB body

<<<<<<< HEAD
  4 tests completed.

* buffer - strong x 136,510 ops/sec ±0.62% (189 runs sampled)
* buffer - weak   x 136,604 ops/sec ±0.51% (191 runs sampled)
  string - strong x  80,903 ops/sec ±0.84% (192 runs sampled)
  string - weak   x  82,785 ops/sec ±0.50% (193 runs sampled)
=======
  1 test completed.
  2 tests completed.
  3 tests completed.
  4 tests completed.

* buffer - strong x 92,901 ops/sec ±0.58% (195 runs sampled)
* buffer - weak   x 93,045 ops/sec ±0.65% (192 runs sampled)
  string - strong x 89,621 ops/sec ±0.68% (194 runs sampled)
  string - weak   x 90,070 ops/sec ±0.70% (196 runs sampled)
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

> node benchmark/body3-10kb.js

  10KB body

<<<<<<< HEAD
  4 tests completed.

* buffer - strong x 78,650 ops/sec ±0.31% (193 runs sampled)
* buffer - weak   x 78,685 ops/sec ±0.41% (193 runs sampled)
  string - strong x 43,999 ops/sec ±0.43% (193 runs sampled)
  string - weak   x 44,081 ops/sec ±0.45% (192 runs sampled)
=======
  1 test completed.
  2 tests completed.
  3 tests completed.
  4 tests completed.

* buffer - strong x 54,220 ops/sec ±0.85% (192 runs sampled)
* buffer - weak   x 54,069 ops/sec ±0.83% (191 runs sampled)
  string - strong x 53,078 ops/sec ±0.53% (194 runs sampled)
  string - weak   x 53,849 ops/sec ±0.47% (197 runs sampled)
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb

> node benchmark/body4-100kb.js

  100KB body

<<<<<<< HEAD
  4 tests completed.

  buffer - strong x 8,860 ops/sec ±0.66% (191 runs sampled)
* buffer - weak   x 9,030 ops/sec ±0.26% (193 runs sampled)
  string - strong x 4,838 ops/sec ±0.16% (194 runs sampled)
  string - weak   x 4,800 ops/sec ±0.52% (192 runs sampled)

> node benchmark/stats.js

  stat

  4 tests completed.

* real - strong x 1,468,073 ops/sec ±0.32% (191 runs sampled)
* real - weak   x 1,446,852 ops/sec ±0.64% (190 runs sampled)
  fake - strong x   635,707 ops/sec ±0.33% (194 runs sampled)
  fake - weak   x   627,708 ops/sec ±0.36% (192 runs sampled)
=======
  1 test completed.
  2 tests completed.
  3 tests completed.
  4 tests completed.

* buffer - strong x 6,673 ops/sec ±0.15% (197 runs sampled)
* buffer - weak   x 6,716 ops/sec ±0.12% (198 runs sampled)
  string - strong x 6,357 ops/sec ±0.14% (197 runs sampled)
  string - weak   x 6,344 ops/sec ±0.21% (197 runs sampled)

> node benchmark/stats.js

  stats

  1 test completed.
  2 tests completed.
  3 tests completed.
  4 tests completed.

* real - strong x 1,671,989 ops/sec ±0.13% (197 runs sampled)
* real - weak   x 1,681,297 ops/sec ±0.12% (198 runs sampled)
  fake - strong x   927,063 ops/sec ±0.14% (198 runs sampled)
  fake - weak   x   914,461 ops/sec ±0.41% (191 runs sampled)
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/etag.svg
[npm-url]: https://npmjs.org/package/etag
[node-version-image]: https://img.shields.io/node/v/etag.svg
<<<<<<< HEAD
[node-version-url]: https://nodejs.org/en/download/
=======
[node-version-url]: http://nodejs.org/download/
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
[travis-image]: https://img.shields.io/travis/jshttp/etag/master.svg
[travis-url]: https://travis-ci.org/jshttp/etag
[coveralls-image]: https://img.shields.io/coveralls/jshttp/etag/master.svg
[coveralls-url]: https://coveralls.io/r/jshttp/etag?branch=master
[downloads-image]: https://img.shields.io/npm/dm/etag.svg
[downloads-url]: https://npmjs.org/package/etag
