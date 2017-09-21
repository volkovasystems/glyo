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

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("glyo", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`glyo( Symbol( 'hello' ) )`", function () {
		it("should return Glyph instance", function () {
			//: @ignore:
   			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof glyo( Symbol( "hello" ) ); } ).value, "object" );
   			//: @end-ignore

			//: @ignore:
   			assert.equal( browser.url( bridgeURL ).execute( ( ) => glyo( Symbol( "hello" ) ).constructor.name ).value, "Glyph" );
   			//: @end-ignore

			//: @ignore:
   			assert.equal( browser.url( bridgeURL ).execute( ( ) => glyo( Symbol( "hello" ) ).toString( ) ).value, "Symbol(hello)" );
   			//: @end-ignore
		});
	});

	describe("`glyo( 'hello' )`", function () {
		it("should return Glyph instance", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = glyo( "hello" );
   
   					let test = typeof data == "object" &&
   						data.constructor.name == "Glyph" &&
   						data.valueOf( ).toString( ) == "Symbol(hello)";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`glyo( Symbol( 'hello' ) ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = glyo( Symbol( "hello" ) ).toString( );
   
   					let test = typeof data == "string" &&
   						data == "Symbol(hello)";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`glyo( Symbol( 'hello' ) ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = glyo( Symbol( "hello" ) ).toNumber( );
   
   					let test = typeof data == "number" &&
   						data.toString( ) == "NaN";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`glyo( Symbol( 'hello' ) ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = glyo( Symbol( "hello" ) ).toBoolean( );
   
   					let test = typeof data == "boolean" && data == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`glyo( Symbol( 'hello' ) ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = glyo( Symbol( "hello" ) ).toObject( );
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true &&
   						descriptor.type == "symbol" &&
   						descriptor.name == "Symbol" &&
   						descriptor.value == "[symbol Symbol:Symbol(hello)]" &&
   						descriptor.format == "data-url-tag";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`glyo( 'hello' ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let result = glyo( "hello" ).toString( );
   
   					let test = typeof result == "string" &&
   						result == "Symbol(hello)";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`glyo( 'hello' ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let result = glyo( "hello" ).toNumber( );
   
   					let test = typeof result == "number" &&
   						result.toString( ) == "NaN";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`glyo( 'hello' ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let result = glyo( "hello" ).toBoolean( );
   
   					let test = typeof result == "boolean" &&
   						result == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`glyo( 'hello' ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = glyo( "hello" ).toObject( );
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true &&
   						descriptor.type == "symbol" &&
   						descriptor.name == "Symbol" &&
   						descriptor.value == "[symbol Symbol:Symbol(hello)]" &&
   						descriptor.format == "data-url-tag";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7O0FBRUFFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DSSxLQUFJLDhCQUFKLEVBQW9DLFlBQU87QUFDMUM7QUFDSDs7O0FBR0E7O0FBRUc7QUFDSDs7O0FBR0E7O0FBRUc7QUFDSDs7O0FBR0E7QUFDRyxHQWxCRDtBQW1CQSxFQXBCRDs7QUFzQkFKLFVBQVUsbUJBQVYsRUFBK0IsWUFBTztBQUNyQ0ksS0FBSSw4QkFBSixFQUFvQyxZQUFPO0FBQzFDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQWVBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FyQkQ7QUFzQkEsRUF2QkQ7O0FBeUJBTixVQUFVLHlDQUFWLEVBQXFELFlBQU87QUFDM0RJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FwQkQ7QUFxQkEsRUF0QkQ7O0FBd0JBTixVQUFVLHlDQUFWLEVBQXFELFlBQU87QUFDM0RJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FwQkQ7QUFxQkEsRUF0QkQ7O0FBd0JBTixVQUFVLDBDQUFWLEVBQXNELFlBQU87QUFDNURJLEtBQUksNEJBQUosRUFBa0MsWUFBTztBQUN4QztBQUNIOzs7Ozs7Ozs7Ozs7O0FBYUE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQW5CRDtBQW9CQSxFQXJCRDs7QUF1QkFOLFVBQVUseUNBQVYsRUFBcUQsWUFBTztBQUMzREksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBM0JEO0FBNEJBLEVBN0JEOztBQStCQU4sVUFBVSwrQkFBVixFQUEyQyxZQUFPO0FBQ2pESSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FuQkQ7QUFvQkEsRUFyQkQ7O0FBdUJBTixVQUFVLCtCQUFWLEVBQTJDLFlBQU87QUFDakRJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FwQkQ7QUFxQkEsRUF0QkQ7O0FBd0JBTixVQUFVLGdDQUFWLEVBQTRDLFlBQU87QUFDbERJLEtBQUksNEJBQUosRUFBa0MsWUFBTztBQUN4QztBQUNIOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FwQkQ7QUFxQkEsRUF0QkQ7O0FBd0JBTixVQUFVLCtCQUFWLEVBQTJDLFlBQU87QUFDakRJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQTNCRDtBQTRCQSxFQTdCRDs7QUErQkEsQ0EvUEQ7O0FBaVFBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJnbHlvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJnbHlvL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9nbHlvLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJnbHlvXCI6IFwiZ2x5b1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcImdseW9cIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYGdseW8oIFN5bWJvbCggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBHbHlwaCBpbnN0YW5jZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggZnVuY3Rpb24oICl7IHJldHVybiB0eXBlb2YgZ2x5byggU3ltYm9sKCBcImhlbGxvXCIgKSApOyB9ICkudmFsdWUsIFwib2JqZWN0XCIgKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGdseW8oIFN5bWJvbCggXCJoZWxsb1wiICkgKS5jb25zdHJ1Y3Rvci5uYW1lICkudmFsdWUsIFwiR2x5cGhcIiApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZ2x5byggU3ltYm9sKCBcImhlbGxvXCIgKSApLnRvU3RyaW5nKCApICkudmFsdWUsIFwiU3ltYm9sKGhlbGxvKVwiICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGdseW8oICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEdseXBoIGluc3RhbmNlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBnbHlvKCBcImhlbGxvXCIgKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0ZGF0YS5jb25zdHJ1Y3Rvci5uYW1lID09IFwiR2x5cGhcIiAmJlxuXHRcdFx0XHRcdFx0ZGF0YS52YWx1ZU9mKCApLnRvU3RyaW5nKCApID09IFwiU3ltYm9sKGhlbGxvKVwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBnbHlvKCBTeW1ib2woICdoZWxsbycgKSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGdseW8oIFN5bWJvbCggXCJoZWxsb1wiICkgKS50b1N0cmluZyggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRhdGEgPT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHRcdFx0ZGF0YSA9PSBcIlN5bWJvbChoZWxsbylcIjtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggU3ltYm9sKCAnaGVsbG8nICkgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBnbHlvKCBTeW1ib2woIFwiaGVsbG9cIiApICkudG9OdW1iZXIoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkYXRhID09IFwibnVtYmVyXCIgJiZcblx0XHRcdFx0XHRcdGRhdGEudG9TdHJpbmcoICkgPT0gXCJOYU5cIjtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggU3ltYm9sKCAnaGVsbG8nICkgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGdseW8oIFN5bWJvbCggXCJoZWxsb1wiICkgKS50b0Jvb2xlYW4oICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkYXRhID09IFwiYm9vbGVhblwiICYmIGRhdGEgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggU3ltYm9sKCAnaGVsbG8nICkgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBnbHlvKCBTeW1ib2woIFwiaGVsbG9cIiApICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRvci50eXBlID09IFwic3ltYm9sXCIgJiZcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3IubmFtZSA9PSBcIlN5bWJvbFwiICYmXG5cdFx0XHRcdFx0XHRkZXNjcmlwdG9yLnZhbHVlID09IFwiW3N5bWJvbCBTeW1ib2w6U3ltYm9sKGhlbGxvKV1cIiAmJlxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRvci5mb3JtYXQgPT0gXCJkYXRhLXVybC10YWdcIjtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggJ2hlbGxvJyApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gZ2x5byggXCJoZWxsb1wiICkudG9TdHJpbmcoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiByZXN1bHQgPT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHRcdFx0cmVzdWx0ID09IFwiU3ltYm9sKGhlbGxvKVwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggJ2hlbGxvJyApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gZ2x5byggXCJoZWxsb1wiICkudG9OdW1iZXIoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiByZXN1bHQgPT0gXCJudW1iZXJcIiAmJlxuXHRcdFx0XHRcdFx0cmVzdWx0LnRvU3RyaW5nKCApID09IFwiTmFOXCI7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGdseW8oICdoZWxsbycgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gZ2x5byggXCJoZWxsb1wiICkudG9Cb29sZWFuKCApO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgcmVzdWx0ID09IFwiYm9vbGVhblwiICYmXG5cdFx0XHRcdFx0XHRyZXN1bHQgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggJ2hlbGxvJyApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IGdseW8oIFwiaGVsbG9cIiApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgZGVzY3JpcHRvciA9PSBcIm9iamVjdFwiICYmXG5cdFx0XHRcdFx0XHRcInR5cGVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwibmFtZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3IudHlwZSA9PSBcInN5bWJvbFwiICYmXG5cdFx0XHRcdFx0XHRkZXNjcmlwdG9yLm5hbWUgPT0gXCJTeW1ib2xcIiAmJlxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRvci52YWx1ZSA9PSBcIltzeW1ib2wgU3ltYm9sOlN5bWJvbChoZWxsbyldXCIgJiZcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3IuZm9ybWF0ID09IFwiZGF0YS11cmwtdGFnXCI7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
