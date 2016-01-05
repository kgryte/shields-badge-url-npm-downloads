'use strict';

var list = require( 'npm-list-author-packages' );
var urls = require( './../lib' );

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
