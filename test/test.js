'use strict';

// MODULES //

var test = require( 'tape' );
var urls = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof urls === 'function', 'main export is a function' );
	t.end();
});

test( 'an `options` argument is required', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();

	function foo() {
		urls();
	}
});

test( 'a `package` must be specified', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();

	function foo() {
		urls( {} );
	}
});

test( 'the function returns an object containing `image` and `url` fields', function test( t ) {
	var out = urls({
		'package': 'beep'
	});

	t.equal( typeof out.image, 'string', 'image field is a string' );
	t.equal( typeof out.url, 'string', 'url field is a string' );
	t.end();
});

test( 'the `image` field corresponds to a shields.io badge url', function test( t ) {
	var out = urls({
		'package': 'beep'
	});
	t.equal( out.image, 'https://img.shields.io/npm/dm/beep.svg?style=flat', 'image url' );
	t.end();
});

test( 'the `url` field corresponds to the package url on NPM', function test( t ) {
	var out = urls({
		'package': 'beep'
	});
	t.equal( out.url, 'https://npmjs.com/package/beep', 'NPM url' );
	t.end();
});

test( 'the default observation period is monthly', function test( t ) {
	var out = urls({
		'package': 'beep'
	});
	t.equal( out.image, 'https://img.shields.io/npm/dm/beep.svg?style=flat', 'image url' );
	t.end();
});

test( 'the observation period can be specified', function test( t ) {
	var out;

	// Lifetime:
	out = urls({
		'package': 'beep',
		'period': 'lifetime'
	});
	t.equal( out.image, 'https://img.shields.io/npm/dt/beep.svg?style=flat', 'image url (lifetime)' );

	// Monthly (full):
	out = urls({
		'package': 'beep',
		'period': 'monthly'
	});
	t.equal( out.image, 'https://img.shields.io/npm/dm/beep.svg?style=flat', 'image url (monthly)' );

	// Monthly (abbrev):
	out = urls({
		'package': 'beep',
		'period': 'm'
	});
	t.equal( out.image, 'https://img.shields.io/npm/dm/beep.svg?style=flat', 'image url (m)' );

	t.end();
});

test( 'the default badge style is `flat`', function test( t ) {
	var out = urls({
		'package': 'beep'
	});
	t.equal( out.image, 'https://img.shields.io/npm/dm/beep.svg?style=flat', 'image url' );
	t.end();
});

test( 'the badge style can be specified', function test( t ) {
	var out = urls({
		'package': 'beep',
		'style': 'flat-square'
	});
	t.equal( out.image, 'https://img.shields.io/npm/dm/beep.svg?style=flat-square', 'image url' );
	t.end();
});

test( 'the default badge format is `svg`', function test( t ) {
	var out = urls({
		'package': 'beep'
	});
	t.equal( out.image, 'https://img.shields.io/npm/dm/beep.svg?style=flat', 'image url' );
	t.end();
});

test( 'the badge format can be specified', function test( t ) {
	var out = urls({
		'package': 'beep',
		'format': 'png'
	});
	t.equal( out.image, 'https://img.shields.io/npm/dm/beep.png?style=flat', 'image url' );
	t.end();
});
