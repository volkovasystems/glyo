"use strict";

/*;
              	@submodule-license:
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
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "glyph",
              			"path": "glyph/glyph.module.js",
              			"file": "glyph.module.js",
              			"module": "glyph",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/glyph.git",
              			"test": "glyph-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Glyph class wrapper for Symbol.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var SYMBOL_NAME = "Symbol";
var SYMBOL_TYPE = "symbol";

var SERIALIZE_SYMBOL_TAG_PATTERN = /^\[symbol Symbol(?:\:(.+?))?\]$/;var

Glyph = function (_Meta) {(0, _inherits3.default)(Glyph, _Meta);(0, _createClass3.default)(Glyph, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			/*;
             	@meta-configuration:
             		{
             			"instance:required": "*"
             		}
             	@end-meta-configuration
             */

			return (
				(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == SYMBOL_TYPE ||
				instance === _symbol2.default ||
				typeof instance == "function" && instance.name === SYMBOL_NAME ||
				Meta.instanceOf(instance, this));

		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			return Meta.deserialize(data, this);
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			/*;
        	@meta-configuration:
        		{
        			"tag": "string"
        		}
        	@end-meta-configuration
        */

			if (typeof tag != "string") {
				return false;
			}

			return SERIALIZE_SYMBOL_TAG_PATTERN.test(tag);
		} }]);

	function Glyph(entity) {(0, _classCallCheck3.default)(this, Glyph);
		/*;
                                                                     	@meta-configuration:
                                                                     		{
                                                                     			"entity:required": "symbol"
                                                                     		}
                                                                     	@end-meta-configuration
                                                                     */return (0, _possibleConstructorReturn3.default)(this, (Glyph.__proto__ || (0, _getPrototypeOf2.default)(Glyph)).call(this,

		entity, SYMBOL_NAME));
	}(0, _createClass3.default)(Glyph, [{ key: "check", value: function check(

		entity) {
			return (typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == SYMBOL_TYPE;
		} }, { key: "serialize", value: function serialize()













		{
			return this.tag(this.stringify());
		} }, { key: "isEqual", value: function isEqual(

		symbol) {
			if (
			symbol instanceof Glyph ||
			(typeof symbol === "undefined" ? "undefined" : (0, _typeof3.default)(symbol)) == SYMBOL_TYPE)
			{
				return this.toString() == symbol.toString();
			}

			return false;
		} }, { key: Meta.BOOLEAN, get: function get() {return true;} }, { key: Meta.STRING, get: function get() {return this.valueOf().toString();} }, { key: Meta.NUMBER, get: function get() {return NaN;} }]);return Glyph;}(Meta);


module.exports = Glyph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdseXBoLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiTWV0YSIsInJlcXVpcmUiLCJTWU1CT0xfTkFNRSIsIlNZTUJPTF9UWVBFIiwiU0VSSUFMSVpFX1NZTUJPTF9UQUdfUEFUVEVSTiIsIkdseXBoIiwiaW5zdGFuY2UiLCJuYW1lIiwiaW5zdGFuY2VPZiIsImRhdGEiLCJwYXJzZXIiLCJibHVlcHJpbnQiLCJkZXNlcmlhbGl6ZSIsInRhZyIsInRlc3QiLCJlbnRpdHkiLCJzdHJpbmdpZnkiLCJzeW1ib2wiLCJ0b1N0cmluZyIsIkJPT0xFQU4iLCJTVFJJTkciLCJ2YWx1ZU9mIiwiTlVNQkVSIiwiTmFOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxLQUFULEdBQWI7O0FBRUEsSUFBTUMsY0FBYyxRQUFwQjtBQUNBLElBQU1DLGNBQWMsUUFBcEI7O0FBRUEsSUFBTUMsK0JBQStCLGlDQUFyQyxDOztBQUVNQyxLO0FBQzBCQyxVLEVBQVU7QUFDeEM7Ozs7Ozs7O0FBUUE7QUFDQyxZQUFPQSxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CSCxXQUFuQjtBQUNHRyxpQ0FESDtBQUVHLFdBQU9BLFFBQVAsSUFBbUIsVUFBbkIsSUFBaUNBLFNBQVNDLElBQVQsS0FBa0JMLFdBRnREO0FBR0dGLFNBQUtRLFVBQUwsQ0FBaUJGLFFBQWpCLEVBQTJCLElBQTNCLENBSko7O0FBTUEsRzs7QUFFbUJHLE0sRUFBTUMsTSxFQUFRQyxTLEVBQVc7QUFDNUM7Ozs7Ozs7Ozs7QUFVQSxVQUFPWCxLQUFLWSxXQUFMLENBQWtCSCxJQUFsQixFQUF3QixJQUF4QixDQUFQO0FBQ0EsRzs7QUFFb0JJLEssRUFBSztBQUN6Qjs7Ozs7Ozs7QUFRQSxPQUFJLE9BQU9BLEdBQVAsSUFBYyxRQUFsQixFQUE0QjtBQUMzQixXQUFPLEtBQVA7QUFDQTs7QUFFRCxVQUFPVCw2QkFBNkJVLElBQTdCLENBQW1DRCxHQUFuQyxDQUFQO0FBQ0EsRzs7QUFFRCxnQkFBYUUsTUFBYixFQUFxQjtBQUNwQjs7Ozs7O3VFQURvQjs7QUFTYkEsUUFUYSxFQVNMYixXQVRLO0FBVXBCLEU7O0FBRU1hLFEsRUFBUTtBQUNkLFVBQU8sUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQlosV0FBeEI7QUFDQSxHOzs7Ozs7Ozs7Ozs7OztBQWNXO0FBQ1gsVUFBTyxLQUFLVSxHQUFMLENBQVUsS0FBS0csU0FBTCxFQUFWLENBQVA7QUFDQSxHOztBQUVRQyxRLEVBQVE7QUFDaEI7QUFDQ0EscUJBQWtCWixLQUFsQjtBQUNHLFdBQU9ZLE1BQVAsdURBQU9BLE1BQVAsTUFBaUJkLFdBRnJCO0FBR0M7QUFDQSxXQUFPLEtBQUtlLFFBQUwsTUFBb0JELE9BQU9DLFFBQVAsRUFBM0I7QUFDQTs7QUFFRCxVQUFPLEtBQVA7QUFDQSxHLFdBekJLbEIsS0FBS21CLE8sc0JBQVksQ0FDdEIsT0FBTyxJQUFQLENBQ0EsQyxXQUVLbkIsS0FBS29CLE0sc0JBQVcsQ0FDckIsT0FBTyxLQUFLQyxPQUFMLEdBQWdCSCxRQUFoQixFQUFQLENBQ0EsQyxXQUVLbEIsS0FBS3NCLE0sc0JBQVcsQ0FDckIsT0FBT0MsR0FBUCxDQUNBLEMsb0JBMUVrQnZCLEk7OztBQTRGcEJ3QixPQUFPQyxPQUFQLEdBQWlCcEIsS0FBakIiLCJmaWxlIjoiZ2x5cGguc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZ2x5cGhcIixcblx0XHRcdFwicGF0aFwiOiBcImdseXBoL2dseXBoLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZ2x5cGgubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImdseXBoXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9nbHlwaC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImdseXBoLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEdseXBoIGNsYXNzIHdyYXBwZXIgZm9yIFN5bWJvbC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgTWV0YSA9IHJlcXVpcmUoIFwiZWhtXCIgKSggKTtcblxuY29uc3QgU1lNQk9MX05BTUUgPSBcIlN5bWJvbFwiO1xuY29uc3QgU1lNQk9MX1RZUEUgPSBcInN5bWJvbFwiO1xuXG5jb25zdCBTRVJJQUxJWkVfU1lNQk9MX1RBR19QQVRURVJOID0gL15cXFtzeW1ib2wgU3ltYm9sKD86XFw6KC4rPykpP1xcXSQvO1xuXG5jbGFzcyBHbHlwaCBleHRlbmRzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gU1lNQk9MX1RZUEVcblx0XHRcdHx8IGluc3RhbmNlID09PSBTeW1ib2xcblx0XHRcdHx8IHR5cGVvZiBpbnN0YW5jZSA9PSBcImZ1bmN0aW9uXCIgJiYgaW5zdGFuY2UubmFtZSA9PT0gU1lNQk9MX05BTUVcblx0XHRcdHx8IE1ldGEuaW5zdGFuY2VPZiggaW5zdGFuY2UsIHRoaXMgKVxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIGRhdGEsIHRoaXMgKTtcblx0fVxuXG5cdHN0YXRpYyBpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGFnXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB0YWcgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBTRVJJQUxJWkVfU1lNQk9MX1RBR19QQVRURVJOLnRlc3QoIHRhZyApO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoIGVudGl0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwic3ltYm9sXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0c3VwZXIoIGVudGl0eSwgU1lNQk9MX05BTUUgKTtcblx0fVxuXG5cdGNoZWNrKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gdHlwZW9mIGVudGl0eSA9PSBTWU1CT0xfVFlQRTtcblx0fVxuXG5cdGdldCBbIE1ldGEuQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5TVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApLnRvU3RyaW5nKCApO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5OVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gTmFOO1xuXHR9XG5cblx0c2VyaWFsaXplKCApe1xuXHRcdHJldHVybiB0aGlzLnRhZyggdGhpcy5zdHJpbmdpZnkoICkgKTtcblx0fVxuXG5cdGlzRXF1YWwoIHN5bWJvbCApe1xuXHRcdGlmKFxuXHRcdFx0c3ltYm9sIGluc3RhbmNlb2YgR2x5cGhcblx0XHRcdHx8IHR5cGVvZiBzeW1ib2wgPT0gU1lNQk9MX1RZUEVcblx0XHQpe1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICkgPT0gc3ltYm9sLnRvU3RyaW5nKCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdseXBoO1xuIl19
//# sourceMappingURL=glyph.support.js.map
