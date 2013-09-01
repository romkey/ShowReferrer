/*
 * Chrome extension to extract the referer and display it on a page
 *
 */
var ShowReferrer = {
    init: function() {
	var referrer = document.referrer;

	console.log( 'referrer' + referrer );

	if( !referrer )
	    return;

	$( 'body' ).append( '<div style="z-index: 9999; border-radius: 5px; border: 1px solid black; background-color: white; opacity: 0.75; position: absolute; top: 10px; left: 10px; padding: 1em; font-family: helvetica;">&lsaquo; <a href="' + referrer + '">' + referrer.split( '/' )[ 2 ] + '</a></div>' );
    }
};

$( document).ready( ShowReferrer.init );
