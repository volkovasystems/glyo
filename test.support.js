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
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var glyo = require("./glyo.support.js");
//: @end-client







//: @client:

describe("glyo", function () {

	describe("`glyo( Symbol( 'hello' ) )`", function () {
		it("should return Glyph instance", function () {
			var symbol = (0, _symbol2.default)("hello");

			var data = glyo(symbol);

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Glyph");

			assert.equal(data.valueOf(), symbol);
		});
	});

	describe("`glyo( 'hello' )`", function () {
		it("should return Glyph instance", function () {
			var data = glyo("hello");

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Glyph");

			assert.equal(data.valueOf().toString(), "Symbol(hello)");
		});
	});

	describe("`glyo( Symbol( 'hello' ) ).toString( )`", function () {
		it("should return string type", function () {
			var data = glyo((0, _symbol2.default)("hello")).toString();

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "string");

			assert.equal(data, "Symbol(hello)");
		});
	});

	describe("`glyo( Symbol( 'hello' ) ).toNumber( )`", function () {
		it("should return number type", function () {
			var data = glyo((0, _symbol2.default)("hello")).toNumber();

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "number");

			assert.equal(data.toString(), "NaN");
		});
	});

	describe("`glyo( Symbol( 'hello' ) ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			var data = glyo((0, _symbol2.default)("hello")).toBoolean();

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "boolean");

			assert.equal(data, true);
		});
	});

	describe("`glyo( Symbol( 'hello' ) ).toObject( )`", function () {
		it("should return object type", function () {
			var descriptor = glyo((0, _symbol2.default)("hello")).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

			assert.deepEqual(descriptor, { "type": "symbol", "name": "Symbol", "value": "[symbol Symbol:Symbol(hello)]", "format": "data-url-tag" });
		});
	});

	describe("`glyo( 'hello' ).toString( )`", function () {
		it("should return string type", function () {
			var result = glyo("hello").toString();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "string");

			assert.equal(result, "Symbol(hello)");

		});
	});

	describe("`glyo( 'hello' ).toNumber( )`", function () {
		it("should return number type", function () {
			var result = glyo("hello").toNumber();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "number");

			assert.equal(result.toString(), "NaN");

		});
	});

	describe("`glyo( 'hello' ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			var result = glyo("hello").toBoolean();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "boolean");

			assert.equal(result, true);

		});
	});

	describe("`glyo( 'hello' ).toObject( )`", function () {
		it("should return object type", function () {
			var descriptor = glyo("hello").toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

			assert.deepEqual(descriptor, { "type": "symbol", "name": "Symbol", "value": "[symbol Symbol:Symbol(hello)]", "format": "data-url-tag" });

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZ2x5byIsImRlc2NyaWJlIiwiaXQiLCJzeW1ib2wiLCJkYXRhIiwiZXF1YWwiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0b051bWJlciIsInRvQm9vbGVhbiIsImRlc2NyaXB0b3IiLCJ0b09iamVjdCIsImRlZXBFcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0MsS0FBSSw4QkFBSixFQUFvQyxZQUFPO0FBQzFDLE9BQUlDLFNBQVMsc0JBQVEsT0FBUixDQUFiOztBQUVBLE9BQUlDLE9BQU9KLEtBQU1HLE1BQU4sQ0FBWDs7QUFFQUwsVUFBT08sS0FBUCxRQUFxQkQsSUFBckIsdURBQXFCQSxJQUFyQixHQUEyQixRQUEzQjs7QUFFQU4sVUFBT08sS0FBUCxDQUFjRCxLQUFLRSxXQUFMLENBQWlCQyxJQUEvQixFQUFxQyxPQUFyQzs7QUFFQVQsVUFBT08sS0FBUCxDQUFjRCxLQUFLSSxPQUFMLEVBQWQsRUFBK0JMLE1BQS9CO0FBQ0EsR0FWRDtBQVdBLEVBWkQ7O0FBY0FGLFVBQVUsbUJBQVYsRUFBK0IsWUFBTztBQUNyQ0MsS0FBSSw4QkFBSixFQUFvQyxZQUFPO0FBQzFDLE9BQUlFLE9BQU9KLEtBQU0sT0FBTixDQUFYOztBQUVBRixVQUFPTyxLQUFQLFFBQXFCRCxJQUFyQix1REFBcUJBLElBQXJCLEdBQTJCLFFBQTNCOztBQUVBTixVQUFPTyxL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LFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNsREMsS0FBSSw0QkFBSixFQUFrQyxZQUFPO0FBQ3hDLE9BQUlhLFNBQVNmLEtBQU0sT0FBTixFQUFnQlcsU0FBaEIsRUFBYjs7QUFFQWIsVUFBT08sS0FBUCxRQUFxQlUsTUFBckIsdURBQXFCQSxNQUFyQixHQUE2QixTQUE3Qjs7QUFFQWpCLFVBQU9PLEtBQVAsQ0FBY1UsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQWQsVUFBVSwrQkFBVixFQUEyQyxZQUFPO0FBQ2pEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSVUsYUFBYVosS0FBTSxPQUFOLEVBQWdCYSxRQUFoQixFQUFqQjs7QUFFQWYsVUFBT08sS0FBUCxRQUFxQk8sVUFBckIsdURBQXFCQSxVQUFyQixHQUFpQyxRQUFqQzs7QUFFQWQsVUFBT08sS0FBUCxDQUFjLFVBQVVPLFVBQXhCLEVBQW9DLElBQXBDOztBQUVBZCxVQUFPTyxLQUFQLENBQWMsVUFBVU8sVUFBeEIsRUFBb0MsSUFBcEM7O0FBRUFkLFVBQU9PLEtBQVAsQ0FBYyxXQUFXTyxVQUF6QixFQUFxQyxJQUFyQzs7QUFFQWQsVUFBT08sS0FBUCxDQUFjLFlBQVlPLFVBQTFCLEVBQXNDLElBQXRDOztBQUVBZCxVQUFPZ0IsU0FBUCxDQUFrQkYsVUFBbEIsRUFBOEIsRUFBRSxRQUFRLFFBQVYsRUFBb0IsUUFBUSxRQUE1QixFQUFzQyxTQUFTLCtCQUEvQyxFQUFnRixVQUFVLGNBQTFGLEVBQTlCOztBQUVBLEdBZkQ7QUFnQkEsRUFqQkQ7O0FBbUJBLENBaElEOztBQWtJQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImdseW9cIixcblx0XHRcdFwicGF0aFwiOiBcImdseW8vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2dseW8uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImdseW9cIjogXCJnbHlvXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBnbHlvID0gcmVxdWlyZSggXCIuL2dseW8uc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcImdseW9cIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggU3ltYm9sKCAnaGVsbG8nICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEdseXBoIGluc3RhbmNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgc3ltYm9sID0gU3ltYm9sKCBcImhlbGxvXCIgKTtcblxuXHRcdFx0bGV0IGRhdGEgPSBnbHlvKCBzeW1ib2wgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGF0YSwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEuY29uc3RydWN0b3IubmFtZSwgXCJHbHlwaFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS52YWx1ZU9mKCApLCBzeW1ib2wgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gR2x5cGggaW5zdGFuY2VcIiwgKCApID0+IHtcblx0XHRcdGxldCBkYXRhID0gZ2x5byggXCJoZWxsb1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRhdGEsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkYXRhLmNvbnN0cnVjdG9yLm5hbWUsIFwiR2x5cGhcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEudmFsdWVPZiggKS50b1N0cmluZyggKSwgXCJTeW1ib2woaGVsbG8pXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggU3ltYm9sKCAnaGVsbG8nICkgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IGdseW8oIFN5bWJvbCggXCJoZWxsb1wiICkgKS50b1N0cmluZyggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGF0YSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEsIFwiU3ltYm9sKGhlbGxvKVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGdseW8oIFN5bWJvbCggJ2hlbGxvJyApICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSBnbHlvKCBTeW1ib2woIFwiaGVsbG9cIiApICkudG9OdW1iZXIoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRhdGEsIFwibnVtYmVyXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkYXRhLnRvU3RyaW5nKCApLCBcIk5hTlwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGdseW8oIFN5bWJvbCggJ2hlbGxvJyApICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYm9vbGVhbiB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IGdseW8oIFN5bWJvbCggXCJoZWxsb1wiICkgKS50b0Jvb2xlYW4oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRhdGEsIFwiYm9vbGVhblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBnbHlvKCBTeW1ib2woICdoZWxsbycgKSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBkZXNjcmlwdG9yID0gZ2x5byggU3ltYm9sKCBcImhlbGxvXCIgKSApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkZXNjcmlwdG9yLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ0eXBlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwibmFtZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInZhbHVlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkZXNjcmlwdG9yLCB7IFwidHlwZVwiOiBcInN5bWJvbFwiLCBcIm5hbWVcIjogXCJTeW1ib2xcIiwgXCJ2YWx1ZVwiOiBcIltzeW1ib2wgU3ltYm9sOlN5bWJvbChoZWxsbyldXCIsIFwiZm9ybWF0XCI6IFwiZGF0YS11cmwtdGFnXCIgfSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBnbHlvKCAnaGVsbG8nICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGdseW8oIFwiaGVsbG9cIiApLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiByZXN1bHQsIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwiU3ltYm9sKGhlbGxvKVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggJ2hlbGxvJyApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBnbHlvKCBcImhlbGxvXCIgKS50b051bWJlciggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcmVzdWx0LCBcIm51bWJlclwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnRvU3RyaW5nKCApLCBcIk5hTlwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZ2x5byggJ2hlbGxvJyApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGdseW8oIFwiaGVsbG9cIiApLnRvQm9vbGVhbiggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcmVzdWx0LCBcImJvb2xlYW5cIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGdseW8oICdoZWxsbycgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IGdseW8oIFwiaGVsbG9cIiApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkZXNjcmlwdG9yLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ0eXBlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwibmFtZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInZhbHVlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkZXNjcmlwdG9yLCB7IFwidHlwZVwiOiBcInN5bWJvbFwiLCBcIm5hbWVcIjogXCJTeW1ib2xcIiwgXCJ2YWx1ZVwiOiBcIltzeW1ib2wgU3ltYm9sOlN5bWJvbChoZWxsbyldXCIsIFwiZm9ybWF0XCI6IFwiZGF0YS11cmwtdGFnXCIgfSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
