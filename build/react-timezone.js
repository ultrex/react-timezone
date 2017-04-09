(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactTimezone"] = factory(require("react"));
	else
		root["ReactTimezone"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TimezonePicker = function (_React$Component) {
	  _inherits(TimezonePicker, _React$Component);

	  function TimezonePicker(props) {
	    _classCallCheck(this, TimezonePicker);

	    var _this = _possibleConstructorReturn(this, (TimezonePicker.__proto__ || Object.getPrototypeOf(TimezonePicker)).call(this, props));

	    _this.timezones = Object.keys(props.timezones);

	    _this.state = {
	      open: false,
	      timezones: _this.timezones,
	      focused: 0,
	      value: _this.getTimezone(props.defaultValue || props.value)
	    };
	    return _this;
	  }

	  _createClass(TimezonePicker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this.props.value) {
	        var newValue = this.getTimezone(nextProps.value);
	        this.field.value = newValue || '';
	        this.setState({ value: newValue });
	      }
	    }
	  }, {
	    key: 'getTimezone',
	    value: function getTimezone(query) {
	      var _this2 = this;

	      if (!query) return null;
	      return this.timezones.find(function (zone) {
	        return query === _this2.props.timezones[zone] || query === zone;
	      });
	    }
	  }, {
	    key: 'filterItems',
	    value: function filterItems(filter) {
	      if (!filter.trim() === '') return function () {
	        return true;
	      };
	      return function (zone) {
	        return zone.toLowerCase().includes(filter.toLowerCase().replace(/\s/g, ''));
	      };
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      this.field.value = '';
	      this.setState({ open: true });

	      if (typeof this.props.inputProps.onFocus === 'function') {
	        this.props.inputProps.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      this.field.value = this.state.value || '';
	      this.setState({ open: false });

	      if (typeof this.props.inputProps.onBlur === 'function') {
	        this.props.inputProps.onBlur(e);
	      }
	    }
	  }, {
	    key: 'handleFilterChange',
	    value: function handleFilterChange(e) {
	      var filter = this.field.value.trim();
	      this.setState({
	        timezones: this.timezones.filter(this.filterItems(filter)),
	        focused: 0
	      });

	      if (typeof this.props.inputProps.onChange === 'function') {
	        this.props.inputProps.onChange(e);
	      }
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      if (e.which === 38 || e.which === 40) {
	        e.preventDefault();
	        var focused = this.state.focused;
	        if (e.which === 38) {
	          focused -= 1;
	          if (focused < 1) focused = this.state.timezones.length;
	        } else {
	          focused += 1;
	          if (focused > this.state.timezones.length) focused = 1;
	        }
	        this.setState({ focused: focused });
	        this.options.children[focused - 1].scrollIntoView();
	      } else if (this.state.focused !== 0) {
	        if (e.which === 13) {
	          this.handleSelect(this.state.focused - 1);
	          e.target.blur();
	        } else {
	          this.setState({ focused: 0 });
	        }
	      }
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(index) {
	      this.setState({
	        timezones: this.timezones,
	        focused: 0,
	        open: false
	      });

	      if (this.props.onChange) {
	        this.props.onChange(this.props.timezones[this.state.timezones[index]]);
	      } else {
	        this.field.value = this.state.timezones[index];
	        this.setState({ value: this.state.timezones[index] });
	      }
	    }
	  }, {
	    key: 'value',
	    value: function value() {
	      var currentValue = this.state.value;
	      if (!currentValue) return null;

	      return this.props.timezones[currentValue];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var inputProps = this.props.inputProps;

	      var value = this.state.value;

	      var isSelected = !this.state.open && value;
	      var isOpen = this.state.open;

	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)('timezone-picker', {
	            'timezone-picker-open': isOpen,
	            'timezone-picker-selected': isSelected
	          }, this.props.className),
	          style: this.props.style
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'timezone-picker-textfield' },
	          _react2.default.createElement('input', _extends({
	            disabled: this.props.disabled,
	            type: 'text',
	            onFocus: function onFocus(e) {
	              return _this3.handleFocus(e);
	            },
	            onBlur: function onBlur(e) {
	              return _this3.handleBlur(e);
	            },
	            onChange: function onChange(e) {
	              return _this3.handleFilterChange(e);
	            },
	            onKeyDown: function onKeyDown(e) {
	              return _this3.handleKeyPress(e);
	            },
	            defaultValue: value,
	            ref: function ref(field) {
	              _this3.field = field;
	            }
	          }, inputProps))
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'timezone-picker-list', ref: function ref(options) {
	              _this3.options = options;
	            } },
	          this.state.timezones.map(function (zone, index) {
	            var focused = _this3.state.focused === index + 1;
	            return _react2.default.createElement(
	              'li',
	              {
	                key: index,
	                title: zone,
	                onMouseDown: function onMouseDown() {
	                  return _this3.handleSelect(index);
	                },
	                className: (0, _classnames2.default)('timezone-picker-list-item', { 'timezone-picker-list-item-active': focused })
	              },
	              zone
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return TimezonePicker;
	}(_react2.default.Component);

	exports.default = TimezonePicker;


	TimezonePicker.propTypes = {
	  defaultValue: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  value: _react.PropTypes.string,
	  onChange: _react.PropTypes.func,
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object, // eslint-disable-line
	  inputProps: _react.PropTypes.object, // eslint-disable-line
	  timezones: _react.PropTypes.object };

	TimezonePicker.defaultProps = {
	  disabled: false,
	  inputProps: {},
	  timezones: __webpack_require__(7) };

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./styles.styl", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./styles.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".timezone-picker {\n  display: inline-block;\n  font: 13px sans-serif;\n  position: relative;\n}\n.timezone-picker-textfield input {\n  width: 100%;\n  padding: 9px 12px;\n  font: inherit;\n  box-sizing: border-box;\n  outline: 0;\n  background: #fff;\n  border: 1px solid #e6ebec;\n  border-radius: 2px;\n}\n.timezone-picker-list {\n  position: relative;\n  top: 100%;\n  left: 0;\n  right: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #e6ebec;\n  margin-top: -1px;\n  border-radius: 0 0 3px 3px;\n  display: none;\n}\n.timezone-picker-list-item {\n  color: #444;\n  padding: 5px 12px;\n  cursor: pointer;\n}\n.timezone-picker-list-item:hover,\n.timezone-picker-list-item-active {\n  background: #ececec;\n}\n.timezone-picker-open .timezone-picker-list {\n  display: block;\n}\n.timezone-picker-selected .timezone-picker-textfield input {\n  color: #474747;\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
		"(GMT-11:00) Niue": "Pacific/Niue",
		"(GMT-11:00) Pago Pago": "Pacific/Pago_Pago",
		"(GMT-10:00) Hawaii Time": "Pacific/Honolulu",
		"(GMT-10:00) Rarotonga": "Pacific/Rarotonga",
		"(GMT-10:00) Tahiti": "Pacific/Tahiti",
		"(GMT-09:30) Marquesas": "Pacific/Marquesas",
		"(GMT-09:00) Alaska Time": "America/Anchorage",
		"(GMT-09:00) Gambier": "Pacific/Gambier",
		"(GMT-08:00) Pacific Time": "America/Los_Angeles",
		"(GMT-08:00) Pacific Time - Tijuana": "America/Tijuana",
		"(GMT-08:00) Pacific Time - Vancouver": "America/Vancouver",
		"(GMT-08:00) Pacific Time - Whitehorse": "America/Whitehorse",
		"(GMT-08:00) Pitcairn": "Pacific/Pitcairn",
		"(GMT-07:00) Mountain Time - Dawson Creek": "America/Dawson_Creek",
		"(GMT-07:00) Mountain Time": "America/Denver",
		"(GMT-07:00) Mountain Time - Edmonton": "America/Edmonton",
		"(GMT-07:00) Mountain Time - Hermosillo": "America/Hermosillo",
		"(GMT-07:00) Mountain Time - Chihuahua, Mazatlan": "America/Mazatlan",
		"(GMT-07:00) Mountain Time - Arizona": "America/Phoenix",
		"(GMT-07:00) Mountain Time - Yellowknife": "America/Yellowknife",
		"(GMT-06:00) Belize": "America/Belize",
		"(GMT-06:00) Central Time": "America/Chicago",
		"(GMT-06:00) Costa Rica": "America/Costa_Rica",
		"(GMT-06:00) El Salvador": "America/El_Salvador",
		"(GMT-06:00) Guatemala": "America/Guatemala",
		"(GMT-06:00) Managua": "America/Managua",
		"(GMT-06:00) Central Time - Mexico City": "America/Mexico_City",
		"(GMT-06:00) Central Time - Regina": "America/Regina",
		"(GMT-06:00) Central Time - Tegucigalpa": "America/Tegucigalpa",
		"(GMT-06:00) Central Time - Winnipeg": "America/Winnipeg",
		"(GMT-06:00) Galapagos": "Pacific/Galapagos",
		"(GMT-05:00) Bogota": "America/Bogota",
		"(GMT-05:00) America Cancun": "America/Cancun",
		"(GMT-05:00) Cayman": "America/Cayman",
		"(GMT-05:00) Guayaquil": "America/Guayaquil",
		"(GMT-05:00) Havana": "America/Havana",
		"(GMT-05:00) Eastern Time - Iqaluit": "America/Iqaluit",
		"(GMT-05:00) Jamaica": "America/Jamaica",
		"(GMT-05:00) Lima": "America/Lima",
		"(GMT-05:00) Nassau": "America/Nassau",
		"(GMT-05:00) Eastern Time": "America/New_York",
		"(GMT-05:00) Panama": "America/Panama",
		"(GMT-05:00) Port-au-Prince": "America/Port-au-Prince",
		"(GMT-05:00) Rio Branco": "America/Rio_Branco",
		"(GMT-05:00) Eastern Time - Toronto": "America/Toronto",
		"(GMT-05:00) Easter Island": "Pacific/Easter",
		"(GMT-04:30) Caracas": "America/Caracas",
		"(GMT-03:00) Asuncion": "America/Asuncion",
		"(GMT-04:00) Barbados": "America/Barbados",
		"(GMT-04:00) Boa Vista": "America/Boa_Vista",
		"(GMT-03:00) Campo Grande": "America/Campo_Grande",
		"(GMT-03:00) Cuiaba": "America/Cuiaba",
		"(GMT-04:00) Curacao": "America/Curacao",
		"(GMT-04:00) Grand Turk": "America/Grand_Turk",
		"(GMT-04:00) Guyana": "America/Guyana",
		"(GMT-04:00) Atlantic Time - Halifax": "America/Halifax",
		"(GMT-04:00) La Paz": "America/La_Paz",
		"(GMT-04:00) Manaus": "America/Manaus",
		"(GMT-04:00) Martinique": "America/Martinique",
		"(GMT-04:00) Port of Spain": "America/Port_of_Spain",
		"(GMT-04:00) Porto Velho": "America/Porto_Velho",
		"(GMT-04:00) Puerto Rico": "America/Puerto_Rico",
		"(GMT-04:00) Santo Domingo": "America/Santo_Domingo",
		"(GMT-04:00) Thule": "America/Thule",
		"(GMT-04:00) Bermuda": "Atlantic/Bermuda",
		"(GMT-03:30) Newfoundland Time - St. Johns": "America/St_Johns",
		"(GMT-03:00) Araguaina": "America/Araguaina",
		"(GMT-03:00) Buenos Aires": "America/Argentina/Buenos_Aires",
		"(GMT-03:00) Salvador": "America/Bahia",
		"(GMT-03:00) Belem": "America/Belem",
		"(GMT-03:00) Cayenne": "America/Cayenne",
		"(GMT-03:00) Fortaleza": "America/Fortaleza",
		"(GMT-03:00) Godthab": "America/Godthab",
		"(GMT-03:00) Maceio": "America/Maceio",
		"(GMT-03:00) Miquelon": "America/Miquelon",
		"(GMT-03:00) Montevideo": "America/Montevideo",
		"(GMT-03:00) Paramaribo": "America/Paramaribo",
		"(GMT-03:00) Recife": "America/Recife",
		"(GMT-03:00) Santiago": "America/Santiago",
		"(GMT-02:00) Sao Paulo": "America/Sao_Paulo",
		"(GMT-03:00) Palmer": "Antarctica/Palmer",
		"(GMT-03:00) Rothera": "Antarctica/Rothera",
		"(GMT-03:00) Stanley": "Atlantic/Stanley",
		"(GMT-02:00) Noronha": "America/Noronha",
		"(GMT-02:00) South Georgia": "Atlantic/South_Georgia",
		"(GMT-01:00) Scoresbysund": "America/Scoresbysund",
		"(GMT-01:00) Azores": "Atlantic/Azores",
		"(GMT-01:00) Cape Verde": "Atlantic/Cape_Verde",
		"(GMT+00:00) Abidjan": "Africa/Abidjan",
		"(GMT+00:00) Accra": "Africa/Accra",
		"(GMT+00:00) Bissau": "Africa/Bissau",
		"(GMT+00:00) Casablanca": "Africa/Casablanca",
		"(GMT+00:00) El Aaiun": "Africa/El_Aaiun",
		"(GMT+00:00) Monrovia": "Africa/Monrovia",
		"(GMT+00:00) Danmarkshavn": "America/Danmarkshavn",
		"(GMT+00:00) Canary Islands": "Atlantic/Canary",
		"(GMT+00:00) Faeroe": "Atlantic/Faroe",
		"(GMT+00:00) Reykjavik": "Atlantic/Reykjavik",
		"(GMT+00:00) GMT (no daylight saving)": "Etc/GMT",
		"(GMT+00:00) Dublin": "Europe/Dublin",
		"(GMT+00:00) Lisbon": "Europe/Lisbon",
		"(GMT+00:00) London": "Europe/London",
		"(GMT+01:00) Algiers": "Africa/Algiers",
		"(GMT+01:00) Ceuta": "Africa/Ceuta",
		"(GMT+01:00) Lagos": "Africa/Lagos",
		"(GMT+01:00) Ndjamena": "Africa/Ndjamena",
		"(GMT+01:00) Tunis": "Africa/Tunis",
		"(GMT+02:00) Windhoek": "Africa/Windhoek",
		"(GMT+01:00) Amsterdam": "Europe/Amsterdam",
		"(GMT+01:00) Andorra": "Europe/Andorra",
		"(GMT+01:00) Central European Time - Belgrade": "Europe/Belgrade",
		"(GMT+01:00) Berlin": "Europe/Berlin",
		"(GMT+01:00) Brussels": "Europe/Brussels",
		"(GMT+01:00) Budapest": "Europe/Budapest",
		"(GMT+01:00) Copenhagen": "Europe/Copenhagen",
		"(GMT+01:00) Gibraltar": "Europe/Gibraltar",
		"(GMT+01:00) Luxembourg": "Europe/Luxembourg",
		"(GMT+01:00) Madrid": "Europe/Madrid",
		"(GMT+01:00) Malta": "Europe/Malta",
		"(GMT+01:00) Monaco": "Europe/Monaco",
		"(GMT+01:00) Oslo": "Europe/Oslo",
		"(GMT+01:00) Paris": "Europe/Paris",
		"(GMT+01:00) Central European Time - Prague": "Europe/Prague",
		"(GMT+01:00) Rome": "Europe/Rome",
		"(GMT+01:00) Stockholm": "Europe/Stockholm",
		"(GMT+01:00) Tirane": "Europe/Tirane",
		"(GMT+01:00) Vienna": "Europe/Vienna",
		"(GMT+01:00) Warsaw": "Europe/Warsaw",
		"(GMT+01:00) Zurich": "Europe/Zurich",
		"(GMT+02:00) Cairo": "Africa/Cairo",
		"(GMT+02:00) Johannesburg": "Africa/Johannesburg",
		"(GMT+02:00) Maputo": "Africa/Maputo",
		"(GMT+02:00) Tripoli": "Africa/Tripoli",
		"(GMT+02:00) Amman": "Asia/Amman",
		"(GMT+02:00) Beirut": "Asia/Beirut",
		"(GMT+02:00) Damascus": "Asia/Damascus",
		"(GMT+02:00) Gaza": "Asia/Gaza",
		"(GMT+02:00) Jerusalem": "Asia/Jerusalem",
		"(GMT+02:00) Nicosia": "Asia/Nicosia",
		"(GMT+02:00) Athens": "Europe/Athens",
		"(GMT+02:00) Bucharest": "Europe/Bucharest",
		"(GMT+02:00) Chisinau": "Europe/Chisinau",
		"(GMT+02:00) Helsinki": "Europe/Helsinki",
		"(GMT+02:00) Istanbul": "Europe/Istanbul",
		"(GMT+02:00) Moscow-01 - Kaliningrad": "Europe/Kaliningrad",
		"(GMT+02:00) Kiev": "Europe/Kiev",
		"(GMT+02:00) Riga": "Europe/Riga",
		"(GMT+02:00) Sofia": "Europe/Sofia",
		"(GMT+02:00) Tallinn": "Europe/Tallinn",
		"(GMT+02:00) Vilnius": "Europe/Vilnius",
		"(GMT+03:00) Khartoum": "Africa/Khartoum",
		"(GMT+03:00) Nairobi": "Africa/Nairobi",
		"(GMT+03:00) Syowa": "Antarctica/Syowa",
		"(GMT+03:00) Baghdad": "Asia/Baghdad",
		"(GMT+03:00) Qatar": "Asia/Qatar",
		"(GMT+03:00) Riyadh": "Asia/Riyadh",
		"(GMT+03:00) Minsk": "Europe/Minsk",
		"(GMT+03:00) Moscow+00 - Moscow": "Europe/Moscow",
		"(GMT+03:30) Tehran": "Asia/Tehran",
		"(GMT+04:00) Baku": "Asia/Baku",
		"(GMT+04:00) Dubai": "Asia/Dubai",
		"(GMT+04:00) Tbilisi": "Asia/Tbilisi",
		"(GMT+04:00) Yerevan": "Asia/Yerevan",
		"(GMT+04:00) Moscow+01 - Samara": "Europe/Samara",
		"(GMT+04:00) Mahe": "Indian/Mahe",
		"(GMT+04:00) Mauritius": "Indian/Mauritius",
		"(GMT+04:00) Reunion": "Indian/Reunion",
		"(GMT+04:30) Kabul": "Asia/Kabul",
		"(GMT+05:00) Mawson": "Antarctica/Mawson",
		"(GMT+05:00) Aqtau": "Asia/Aqtau",
		"(GMT+05:00) Aqtobe": "Asia/Aqtobe",
		"(GMT+05:00) Ashgabat": "Asia/Ashgabat",
		"(GMT+05:00) Dushanbe": "Asia/Dushanbe",
		"(GMT+05:00) Karachi": "Asia/Karachi",
		"(GMT+05:00) Tashkent": "Asia/Tashkent",
		"(GMT+05:00) Moscow+02 - Yekaterinburg": "Asia/Yekaterinburg",
		"(GMT+05:00) Kerguelen": "Indian/Kerguelen",
		"(GMT+05:00) Maldives": "Indian/Maldives",
		"(GMT+05:30) India Standard Time": "Asia/Calcutta",
		"(GMT+05:30) Colombo": "Asia/Colombo",
		"(GMT+05:45) Katmandu": "Asia/Katmandu",
		"(GMT+06:00) Vostok": "Antarctica/Vostok",
		"(GMT+06:00) Almaty": "Asia/Almaty",
		"(GMT+06:00) Bishkek": "Asia/Bishkek",
		"(GMT+06:00) Dhaka": "Asia/Dhaka",
		"(GMT+06:00) Moscow+03 - Omsk, Novosibirsk": "Asia/Omsk",
		"(GMT+06:00) Thimphu": "Asia/Thimphu",
		"(GMT+06:00) Chagos": "Indian/Chagos",
		"(GMT+06:30) Rangoon": "Asia/Rangoon",
		"(GMT+06:30) Cocos": "Indian/Cocos",
		"(GMT+07:00) Davis": "Antarctica/Davis",
		"(GMT+07:00) Bangkok": "Asia/Bangkok",
		"(GMT+07:00) Hovd": "Asia/Hovd",
		"(GMT+07:00) Jakarta": "Asia/Jakarta",
		"(GMT+07:00) Moscow+04 - Krasnoyarsk": "Asia/Krasnoyarsk",
		"(GMT+07:00) Hanoi": "Asia/Saigon",
		"(GMT+07:00) Christmas": "Indian/Christmas",
		"(GMT+08:00) Casey": "Antarctica/Casey",
		"(GMT+08:00) Brunei": "Asia/Brunei",
		"(GMT+08:00) Choibalsan": "Asia/Choibalsan",
		"(GMT+08:00) Hong Kong": "Asia/Hong_Kong",
		"(GMT+08:00) Moscow+05 - Irkutsk": "Asia/Irkutsk",
		"(GMT+08:00) Kuala Lumpur": "Asia/Kuala_Lumpur",
		"(GMT+08:00) Macau": "Asia/Macau",
		"(GMT+08:00) Makassar": "Asia/Makassar",
		"(GMT+08:00) Manila": "Asia/Manila",
		"(GMT+08:00) China Time - Beijing": "Asia/Shanghai",
		"(GMT+08:00) Singapore": "Asia/Singapore",
		"(GMT+08:00) Taipei": "Asia/Taipei",
		"(GMT+08:00) Ulaanbaatar": "Asia/Ulaanbaatar",
		"(GMT+08:00) Western Time - Perth": "Australia/Perth",
		"(GMT+08:30) Pyongyang": "Asia/Pyongyang",
		"(GMT+09:00) Dili": "Asia/Dili",
		"(GMT+09:00) Jayapura": "Asia/Jayapura",
		"(GMT+09:00) Seoul": "Asia/Seoul",
		"(GMT+09:00) Tokyo": "Asia/Tokyo",
		"(GMT+09:00) Moscow+06 - Yakutsk": "Asia/Yakutsk",
		"(GMT+09:00) Palau": "Pacific/Palau",
		"(GMT+10:30) Central Time - Adelaide": "Australia/Adelaide",
		"(GMT+09:30) Central Time - Darwin": "Australia/Darwin",
		"(GMT+10:00) Dumont D'Urville": "Antarctica/DumontDUrville",
		"(GMT+10:00) Moscow+07 - Magadan": "Asia/Magadan",
		"(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk": "Asia/Vladivostok",
		"(GMT+10:00) Eastern Time - Brisbane": "Australia/Brisbane",
		"(GMT+11:00) Eastern Time - Hobart": "Australia/Hobart",
		"(GMT+11:00) Eastern Time - Melbourne, Sydney": "Australia/Sydney",
		"(GMT+10:00) Truk": "Pacific/Chuuk",
		"(GMT+10:00) Guam": "Pacific/Guam",
		"(GMT+10:00) Port Moresby": "Pacific/Port_Moresby",
		"(GMT+11:00) Efate": "Pacific/Efate",
		"(GMT+11:00) Guadalcanal": "Pacific/Guadalcanal",
		"(GMT+11:00) Kosrae": "Pacific/Kosrae",
		"(GMT+11:00) Norfolk": "Pacific/Norfolk",
		"(GMT+11:00) Noumea": "Pacific/Noumea",
		"(GMT+11:00) Ponape": "Pacific/Pohnpei",
		"(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy": "Asia/Kamchatka",
		"(GMT+13:00) Auckland": "Pacific/Auckland",
		"(GMT+13:00) Fiji": "Pacific/Fiji",
		"(GMT+12:00) Funafuti": "Pacific/Funafuti",
		"(GMT+12:00) Kwajalein": "Pacific/Kwajalein",
		"(GMT+12:00) Majuro": "Pacific/Majuro",
		"(GMT+12:00) Nauru": "Pacific/Nauru",
		"(GMT+12:00) Tarawa": "Pacific/Tarawa",
		"(GMT+12:00) Wake": "Pacific/Wake",
		"(GMT+12:00) Wallis": "Pacific/Wallis",
		"(GMT+14:00) Apia": "Pacific/Apia",
		"(GMT+13:00) Enderbury": "Pacific/Enderbury",
		"(GMT+13:00) Fakaofo": "Pacific/Fakaofo",
		"(GMT+13:00) Tongatapu": "Pacific/Tongatapu",
		"(GMT+14:00) Kiritimati": "Pacific/Kiritimati"
	};

/***/ }
/******/ ])
});
;