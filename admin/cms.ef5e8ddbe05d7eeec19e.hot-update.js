webpackHotUpdate("cms",{

/***/ "./src/components/Menu/MenuItem.js":
/*!*****************************************!*\
  !*** ./src/components/Menu/MenuItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "./node_modules/gatsby/node_modules/core-js/modules/es6.string.ends-with.js");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ "./src/components/Menu/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuLink */ "./src/components/Menu/MenuLink.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_7__);





var _this = undefined,
    _jsxFileName = "/Users/johanahlin/Desktop/3.Projects/LFDS-website/src/components/Menu/MenuItem.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_7___default.a.bind(_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a);

var MenuItem = function MenuItem(_ref) {
  var item = _ref.item,
      location = _ref.location;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useLayoutEffect"])(function () {
    var url = location.pathname.replace(/\/$/, "");
    url = location.pathname.split('/');
    url.pop();
    item.childLink.filter(function (active) {
      if (active.node.fields.slug.match(location.pathname) && url.length >= 3) {
        setOpen(true);
      }

      return null;
    });
  }, [item, location]);

  var stripTrailingSlash = function stripTrailingSlash(str) {
    return str.endsWith('/') ? str.slice(0, -1) : str;
  };

  var className = cx({
    Menu__item: true,
    'Menu__item--active': open,
    '': !open
  });

  var toggleSubMenu = function toggleSubMenu() {
    setOpen(!open);
  };

  var renderSubMenuItems = function renderSubMenuItems(items) {
    return items.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Menu__item,
        key: item.node.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MenuLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: item.node.frontmatter.title,
        path: stripTrailingSlash(item.node.fields.slug),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 61
        }
      }));
    });
  };

  var hasCategory = !(item.parentLink === 'NoCategory' || 'null');
  return hasCategory ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    key: item.childLink[0].node.id,
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MenuLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    parent: true,
    path: item.childLink[0].node.fields.contentType,
    title: item.parentLink.replace(/-/g, ' '),
    collapse: toggleSubMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Menu__sub,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, renderSubMenuItems(item.childLink))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, renderSubMenuItems(item.childLink));
};

__signature__(MenuItem, "useState{[open, setOpen](false)}\nuseLayoutEffect{}");

var _default = MenuItem;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(cx, "cx", "/Users/johanahlin/Desktop/3.Projects/LFDS-website/src/components/Menu/MenuItem.js");
  reactHotLoader.register(MenuItem, "MenuItem", "/Users/johanahlin/Desktop/3.Projects/LFDS-website/src/components/Menu/MenuItem.js");
  reactHotLoader.register(_default, "default", "/Users/johanahlin/Desktop/3.Projects/LFDS-website/src/components/Menu/MenuItem.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.ef5e8ddbe05d7eeec19e.hot-update.js.map