'use strict';

// MODULES //

var mustache = require( 'mustache' );
var validate = require( './validate.js' );


// TEMPLATES //

var URL = 'https://npmjs.com/package/{{package}}';
var IMAGE = 'https://img.shields.io/npm/d{{period}}/{{package}}.{{format}}?style={{style}}';

mustache.parse( URL );
mustache.parse( IMAGE );


// URLS //

/**
* FUNCTION: urls( options )
*	Creates Shields.io badge URLs.
*
* @param {Object} options - function options
* @param {String} options.package - package name
* @param {String} [options.period="monthly"] - observation period
* @param {String} [options.style="flat"] - badge style
* @param {String} [options.format="svg"] - badge format
* @returns {Object}
*/
function urls( options ) {
	var opts;
	var out;
	var err;

	opts = {};
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	opts.period = opts.period || 'm';
	opts.style = opts.style || 'flat';
	opts.format = opts.format || 'svg';

	out = {};
	out.image = mustache.render( IMAGE, opts );
	out.url = mustache.render( URL, opts );

	return out;
} // end FUNCTION urls()


// EXPORTS //

module.exports = urls;
