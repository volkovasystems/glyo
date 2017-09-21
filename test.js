"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "glyo",
			"path": "glyo/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/glyo.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"glyo": "glyo"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const glyo = require( "./glyo.js" );
//: @end-server






//: @server:

describe( "glyo", ( ) => {

	describe( "`glyo( Symbol( 'hello' ) )`", ( ) => {
		it( "should return Glyph instance", ( ) => {
			let symbol = Symbol( "hello" );

			let data = glyo( symbol );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Glyph" );

			assert.equal( data.valueOf( ), symbol );

		} );
	} );

	describe( "`glyo( 'hello' )`", ( ) => {
		it( "should return Glyph instance", ( ) => {
			let data = glyo( "hello" );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Glyph" );

			assert.equal( data.valueOf( ).toString( ), "Symbol(hello)" );

		} );
	} );

	describe( "`glyo( Symbol( 'hello' ) ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let data = glyo( Symbol( "hello" ) ).toString( );

			assert.equal( typeof data, "string" );

			assert.equal( data, "Symbol(hello)" );

		} );
	} );

	describe( "`glyo( Symbol( 'hello' ) ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let data = glyo( Symbol( "hello" ) ).toNumber( );

			assert.equal( typeof data, "number" );

			assert.equal( data.toString( ), "NaN" );

		} );
	} );

	describe( "`glyo( Symbol( 'hello' ) ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let data = glyo( Symbol( "hello" ) ).toBoolean( );

			assert.equal( typeof data, "boolean" );

			assert.equal( data, true );

		} );
	} );

	describe( "`glyo( Symbol( 'hello' ) ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = glyo( Symbol( "hello" ) ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

			assert.deepEqual( descriptor, { "type": "symbol", "name": "Symbol", "value": "[symbol Symbol:Symbol(hello)]", "format": "data-url-tag" } );

		} );
	} );

	describe( "`glyo( 'hello' ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let result = glyo( "hello" ).toString( );

			assert.equal( typeof result, "string" );

			assert.equal( result, "Symbol(hello)" );

		} );
	} );

	describe( "`glyo( 'hello' ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let result = glyo( "hello" ).toNumber( );

			assert.equal( typeof result, "number" );

			assert.equal( result.toString( ), "NaN" );

		} );
	} );

	describe( "`glyo( 'hello' ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let result = glyo( "hello" ).toBoolean( );

			assert.equal( typeof result, "boolean" );

			assert.equal( result, true );

		} );
	} );

	describe( "`glyo( 'hello' ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = glyo( "hello" ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

			assert.deepEqual( descriptor, { "type": "symbol", "name": "Symbol", "value": "[symbol Symbol:Symbol(hello)]", "format": "data-url-tag" } );

		} );
	} );

} );

//: @end-server






