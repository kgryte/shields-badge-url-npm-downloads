NPM Downloads Badge URLs
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates [Shields.io][shields] badge URLs for a package's [NPM][npm] downloads.


## Installation

``` bash
$ npm install shields-badge-url-npm-downloads
```


## Usage

``` javascript
var urls = require( 'shields-badge-url-npm-downloads' );
```

#### urls( opts )

Creates [Shields.io][shields] badge URLs for a package's [NPM][npm] downloads.

``` javascript
var opts = {
	'package': 'dstructs-matrix'
};

var out = urls( opts );
/*
	{
		"image": "https://img.shields.io/npm/dm/dstructs-matrix.svg?style=flat",
		"url": "https://npmjs.com/package/dstructs-matrix"
	}
*/ 
```

The `function` accepts the following `options`:
*	__package__: package name (*required*).
*	__period__: observation period. Supported observation periods:
	-	`monthly`, `m` (default)
	-	`lifetime`
*	__style__: badge style. Default: `flat`.
*	__format__: badge format. Default: `svg`.

The default observation `period` is `monthly`. To create badge URLs for a package's lifetime [NPM][npm] downloads, set the `period` option.

``` javascript
var opts = {
	'package': 'dstructs-array',
	'period': 'lifetime'
};

var out = urls( opts );
/*
	{
		"image": "https://img.shields.io/npm/dt/dstructs-array.svg?style=flat",
		"url": "https://npmjs.com/package/dstructs-array"
	}
*/ 
```


## Examples

``` javascript
var list = require( 'npm-list-author-packages' );
var urls = require( 'shields-badge-url-npm-downloads' );

// Generate badge URLs for all of an author's packages...
list( {'username': 'kgryte'}, onList );

function onList( error, list ) {
	var badge;
	var i;
	if ( error ) {
		throw error;
	}
	if ( !list.length ) {
		return;
	}
	for ( i = 0; i < list.length; i++ ) {
		badge = urls({
			'package': list[ i ]
		});
		console.log( badge );
	}
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g shields-badge-url-npm-downloads
```


### Usage

``` bash
Usage: shields-npmd (<package> | --package=<name>) [options]

Options:

  -h,  --help                Print this message.
  -V,  --version             Print the package version.
       --package name        Package name.
       --period period       Observation period. Default: 'monthly'.
       --style style         Badge style. Default: 'flat'.
       --format format       Badge format. Default: 'svg'.
```


### Examples

``` bash
$ shields-npmd dstructs-matrix
# => {"image":"https://img.shields.io/npm/dm/dstructs-matrix.svg?style=flat","url":"https://npmjs.com/package/dstructs-matrix"}
```

or using `options`

``` bash
$ shields-npmd --package=dstructs-matrix
# => {"image":"https://img.shields.io/npm/dm/dstructs-matrix.svg?style=flat","url":"https://npmjs.com/package/dstructs-matrix"}
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/shields-badge-url-npm-downloads.svg
[npm-url]: https://npmjs.org/package/shields-badge-url-npm-downloads

[build-image]: http://img.shields.io/travis/kgryte/shields-badge-url-npm-downloads/master.svg
[build-url]: https://travis-ci.org/kgryte/shields-badge-url-npm-downloads

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/shields-badge-url-npm-downloads/master.svg
[coverage-url]: https://codecov.io/github/kgryte/shields-badge-url-npm-downloads?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/shields-badge-url-npm-downloads.svg
[dependencies-url]: https://david-dm.org/kgryte/shields-badge-url-npm-downloads

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/shields-badge-url-npm-downloads.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/shields-badge-url-npm-downloads

[github-issues-image]: http://img.shields.io/github/issues/kgryte/shields-badge-url-npm-downloads.svg
[github-issues-url]: https://github.com/kgryte/shields-badge-url-npm-downloads/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com
[npm]: https://npmjs.com
[shields]: http://shields.io/
