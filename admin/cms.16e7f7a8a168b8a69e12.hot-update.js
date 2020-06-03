webpackHotUpdate("cms",{

/***/ "./src/components/Menu/index.js":
/*!**************************************!*\
  !*** ./src/components/Menu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/gatsby/node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/gatsby/node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItem */ "./src/components/Menu/MenuItem.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ "./src/components/Menu/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MenuToggle */ "./src/components/MenuToggle/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var _utils_AnimationCointainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/AnimationCointainer */ "./src/utils/AnimationCointainer.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../context/GlobalContextProvider */ "./src/context/GlobalContextProvider.js");




var _this = undefined,
    _jsxFileName = "/Users/johanahlin/Desktop/3.Projects/LFDS-website/src/components/Menu/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};














var Menu = function Menu(_ref) {
  var currentDirectory = _ref.currentDirectory;
  var data = Object(gatsby__WEBPACK_IMPORTED_MODULE_11__["useStaticQuery"])("2328760299");
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_13__["GlobalDispatchContext"]);
  var state = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_13__["GlobalStateContext"]);
  var location = _reach_router__WEBPACK_IMPORTED_MODULE_6__["globalHistory"].location.pathname;
  var useBreakpoint = Object(react_use__WEBPACK_IMPORTED_MODULE_9__["createBreakpoint"])({
    M: 1024,
    S: 768
  });

  if (typeof window !== "undefined") {
    currentDirectory = location.split('/');
    currentDirectory = currentDirectory.filter(function (item) {
      return item;
    });
    currentDirectory = currentDirectory.slice(0, 1).join('/');
  }

  var navigationItems = {
    items: data.allPages.hasOwnProperty('edges') ? data.allPages.edges.filter(function (items) {
      return items.node.fields.contentType.includes(currentDirectory);
    }) : false
  };
  console.log(navigationItems);

  var navigationStructure = lodash__WEBPACK_IMPORTED_MODULE_12___default()(navigationItems.items).chain().groupBy('node.frontmatter.category').map(function (value, key) {
    return {
      parentLink: key,
      childLink: value
    };
  }).value();

  var navigationStructureSorted = lodash__WEBPACK_IMPORTED_MODULE_12___default.a.orderBy(navigationStructure, [function (item) {
    var nestedObj = lodash__WEBPACK_IMPORTED_MODULE_12___default.a.get(item, 'childLink');

    item['childLink'] = lodash__WEBPACK_IMPORTED_MODULE_12___default.a.orderBy(nestedObj, ['node.frontmatter.priority', 'node.frontmatter.title'], ['asc', 'asc']);
    return [item.parentLink, item['childLink']];
  }], 'asc', 'asc');

  console.log(navigationStructureSorted);
  var breakpoint = useBreakpoint();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var handleOnClick = function handleOnClick() {
    setOpen(!isOpen);
    document.body.style.overflow = 'hidden';
  };

  var handleOnClickDesktop = function handleOnClickDesktop() {
    dispatch({
      type: "TOGGLE_SIDENAV"
    });
  };

  var handleOverlayClick = function handleOverlayClick() {
    setOpen(false);
    document.body.style.overflow = 'unset';
  };

  var renderMenuItems = function renderMenuItems(nav, loc) {
    return nav.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        item: item,
        key: index,
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Menu__item,
        location: loc,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, breakpoint === 'M' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_utils_AnimationCointainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: state.isMenuOpenDesktop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_MenuToggle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: state.isMenuOpenDesktop,
    onClick: handleOnClickDesktop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_MenuToggle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: isOpen,
    onClick: handleOnClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: handleOverlayClick,
    onKeyDown: handleOverlayClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Menu__overlay, isOpen ? _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['Menu__overlay--isVisible'] : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_6__["Location"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, function (_ref2) {
    var location = _ref2.location;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, breakpoint === 'M' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_utils_AnimationCointainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
      show: state.isMenuOpenDesktop,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Menu, state.isMenuOpenDesktop ? _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['Menu--isOpen'] : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Menu__list,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 19
      }
    }, renderMenuItems(navigationStructureSorted, location)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Menu, isOpen ? _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['Menu--isOpen'] : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Menu__list,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 25
      }
    }, renderMenuItems(navigationStructureSorted, location))));
  }));
};

__signature__(Menu, "useStaticQuery{data}\nuseContext{dispatch}\nuseContext{state}\nuseBreakpoint{breakpoint}\nuseState{[isOpen, setOpen](false)}", function () {
  return [gatsby__WEBPACK_IMPORTED_MODULE_11__["useStaticQuery"]];
});

var _default = Menu;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Menu, "Menu", "/Users/johanahlin/Desktop/3.Projects/LFDS-website/src/components/Menu/index.js");
  reactHotLoader.register(_default, "default", "/Users/johanahlin/Desktop/3.Projects/LFDS-website/src/components/Menu/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.16e7f7a8a168b8a69e12.hot-update.js.map