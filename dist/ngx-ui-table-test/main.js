(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ngx-ui-table/src/lib/components/checkbox/checkbox.component.html":
/*!***************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/checkbox/checkbox.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"lbl\">\n  <input type=\"checkbox\"\n         [name]=\"label\"\n         [checked]=\"_item?.checked\"\n         (change)=\"onCheckboxChanged($event)\"/>\n</label>\n"

/***/ }),

/***/ "../ngx-ui-table/src/lib/components/checkbox/checkbox.component.scss":
/*!***************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/checkbox/checkbox.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"checkbox\"] {\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  background: lightgray;\n  height: 16px;\n  width: 16px;\n  border: 1px solid white; }\n\ninput[type=\"checkbox\"]:checked {\n  background: #2aa1c0; }\n\ninput[type=\"checkbox\"]:hover {\n  -webkit-filter: brightness(90%);\n          filter: brightness(90%); }\n\ninput[type=\"checkbox\"]:disabled {\n  background: #e6e6e6;\n  opacity: 0.6;\n  pointer-events: none; }\n\ninput[type=\"checkbox\"]:after {\n  content: '';\n  position: relative;\n  left: 36%;\n  top: 11%;\n  width: 21%;\n  height: 54%;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  display: none; }\n\ninput[type=\"checkbox\"]:checked:after {\n  display: block; }\n\ninput[type=\"checkbox\"]:disabled:after {\n  border-color: #7b7b7b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC11aS10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvRDpcXGNyZWF0ZVBsdWdpbnNcXG5wbS1wcm9qZWN0XFxuZ3gtdWktdGFibGUvcHJvamVjdHNcXG5neC11aS10YWJsZVxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGNoZWNrYm94XFxjaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtdWktdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQ6ICMyYWExYzA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpob3ZlciB7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDM2JTtcclxuICB0b3A6IDExJTtcclxuICB3aWR0aDogMjElO1xyXG4gIGhlaWdodDogNTQlO1xyXG4gIGJvcmRlcjogc29saWQgI2ZmZjtcclxuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZDphZnRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjN2I3YjdiO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "../ngx-ui-table/src/lib/components/checkbox/checkbox.component.ts":
/*!*************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/checkbox/checkbox.component.ts ***!
  \*************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.checkBoxAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.label = '';
    }
    Object.defineProperty(CheckboxComponent.prototype, "setItem", {
        set: function (item) {
            if (item) {
                this._item = item;
                if (!this._item.hasOwnProperty('checked')) {
                    this._item.checked = false;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.onCheckboxChanged = function (event) {
        if (this.selectedType === 'all') {
            this.checkBoxAction.emit({
                payload: {
                    checked: event.target.checked
                },
                type: 'CHECKBOX_SELECTED_ALL'
            });
        }
        else {
            this.addOrRemoveItem(this._item);
            this.checkBoxAction.emit({
                payload: this.selectedItems,
                type: 'CHECKBOX_SELECTED_ITEMS_CHANGED'
            });
        }
        event.stopPropagation();
    };
    CheckboxComponent.prototype.addOrRemoveItem = function (item) {
        var index = this.selectedItems.indexOf(item);
        if (index === -1) {
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.splice(index, 1);
        }
    };
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CheckboxComponent.prototype, "checkBoxAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponent.prototype, "selectedType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "selectedItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CheckboxComponent.prototype, "setItem", null);
    CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "../ngx-ui-table/src/lib/components/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "../ngx-ui-table/src/lib/components/checkbox/checkbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.component.css":
/*!****************************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtdWktdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2R5bmFtaWMtY29udGVudC9keW5hbWljLWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.component.html":
/*!*****************************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container #container></ng-container>\n"

/***/ }),

/***/ "../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.component.ts":
/*!***************************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DynamicContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicContentComponent", function() { return DynamicContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DynamicContentComponent = /** @class */ (function () {
    function DynamicContentComponent(compiler) {
        this.compiler = compiler;
    }
    Object.defineProperty(DynamicContentComponent.prototype, "setTemplateString", {
        set: function (tplString) {
            var _this = this;
            if (tplString) {
                this.compiler.clearCache();
                var component = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tplString,
                })(/** @class */ (function () {
                    function class_1() {
                    }
                    return class_1;
                }()));
                // Define the module using NgModule decorator.
                var module = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [component]
                })(/** @class */ (function () {
                    function class_2() {
                    }
                    return class_2;
                }()));
                // Asynchronously (recommended) compile the module and the component.
                this.compiler.compileModuleAndAllComponentsAsync(module)
                    .then(function (factories) {
                    // Get the component factory.
                    var componentFactory = factories.componentFactories[0];
                    // Create the component and add to the view.
                    var componentRef = _this.container.createComponent(componentFactory);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    DynamicContentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], DynamicContentComponent.prototype, "container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('templateString'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DynamicContentComponent.prototype, "setTemplateString", null);
    DynamicContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dynamic-content',
            template: __webpack_require__(/*! ./dynamic-content.component.html */ "../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./dynamic-content.component.css */ "../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]])
    ], DynamicContentComponent);
    return DynamicContentComponent;
}());



/***/ }),

/***/ "../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.module.ts":
/*!************************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.module.ts ***!
  \************************************************************************************/
/*! exports provided: createCompiler, DynamicContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompiler", function() { return createCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicContentModule", function() { return DynamicContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dynamic_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-content.component */ "../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.component.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");





function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
var DynamicContentModule = /** @class */ (function () {
    function DynamicContentModule() {
    }
    DynamicContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dynamic_content_component__WEBPACK_IMPORTED_MODULE_3__["DynamicContentComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _dynamic_content_component__WEBPACK_IMPORTED_MODULE_3__["DynamicContentComponent"]
            ],
            providers: [
                // Compiler is not included in AOT-compiled bundle.
                // Must explicitly provide compiler to be able to compile templates at runtime.
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["COMPILER_OPTIONS"], useValue: {}, multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["CompilerFactory"], useClass: _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__["JitCompilerFactory"], deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["COMPILER_OPTIONS"]] },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"], useFactory: createCompiler, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CompilerFactory"]] }
            ],
        })
    ], DynamicContentModule);
    return DynamicContentModule;
}());



/***/ }),

/***/ "../ngx-ui-table/src/lib/components/ngx-ui-table-column/ngx-ui-table-column.component.html":
/*!*************************************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/ngx-ui-table-column/ngx-ui-table-column.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdx-table-column-container {{col.className}}\">\n  <div class=\"sorting\" (click)=\"onSortChanged()\" *ngIf=\"!col.notSorted\">\n    <div class=\"{{col.sort}}\"></div>\n    <div class=\"column-name\" >\n      {{col.name}}\n    </div>\n  </div>\n  <div class=\"column-name\" *ngIf=\"col.notSorted\">\n    {{col.name}}\n  </div>\n  <!--<div *ngIf=\"filter\" class=\"filter\">-->\n    <!--<app-ui-dropdown-icon-->\n      <!--[className]=\"'table-filters'\"-->\n      <!--[items]=\"filter\"-->\n      <!--[showFilterIcon]=\"true\"-->\n      <!--[rowName]=\"'name'\">-->\n    <!--</app-ui-dropdown-icon>-->\n  <!--</div>-->\n\n</div>\n"

/***/ }),

/***/ "../ngx-ui-table/src/lib/components/ngx-ui-table-column/ngx-ui-table-column.component.scss":
/*!*************************************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/ngx-ui-table-column/ngx-ui-table-column.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "virtual-scroller {\n  width: 100%;\n  height: 95vh; }\n\n.sorting {\n  display: flex; }\n\n.sorting .asc, .sorting .desc {\n    width: 18px; }\n\n.sorting .asc:after {\n    content: ' \\25B2';\n    color: lightgrey; }\n\n.sorting .desc:after {\n    content: ' \\25BC';\n    color: lightgrey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC11aS10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LXVpLXRhYmxlLWNvbHVtbi9EOlxcY3JlYXRlUGx1Z2luc1xcbnBtLXByb2plY3RcXG5neC11aS10YWJsZS9wcm9qZWN0c1xcbmd4LXVpLXRhYmxlXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcbmd4LXVpLXRhYmxlLWNvbHVtblxcbmd4LXVpLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFJRSxhQUFhLEVBQUE7O0FBSmY7SUFFSSxXQUFXLEVBQUE7O0FBRmY7SUFNSSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7O0FBUHBCO0lBVUksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InByb2plY3RzL25neC11aS10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LXVpLXRhYmxlLWNvbHVtbi9uZ3gtdWktdGFibGUtY29sdW1uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlydHVhbC1zY3JvbGxlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5NXZoO1xyXG59XHJcbi5zb3J0aW5nIHtcclxuICAuYXNjLCAuZGVzYyB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICB9XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAuYXNjOmFmdGVye1xyXG4gICAgY29udGVudDogJyBcXDI1QjInO1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgLmRlc2M6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnIFxcMjVCQyc7XHJcbiAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "../ngx-ui-table/src/lib/components/ngx-ui-table-column/ngx-ui-table-column.component.ts":
/*!***********************************************************************************************!*\
  !*** ../ngx-ui-table/src/lib/components/ngx-ui-table-column/ngx-ui-table-column.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NgxUiTableColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiTableColumnComponent", function() { return NgxUiTableColumnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ngx_ui_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/ngx-ui-column */ "../ngx-ui-table/src/lib/models/ngx-ui-column.ts");



var NgxUiTableColumnComponent = /** @class */ (function () {
    function NgxUiTableColumnComponent() {
        this.columnActions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NgxUiTableColumnComponent.prototype, "setColumn", {
        set: function (column) {
            if (column) {
                console.log(column);
                this.col = column;
                if (column.isHaveFilter) {
                    // create filter //
                }
                if (!column.hasOwnProperty('sort')) {
                    this.col.sort = 'asc';
                }
                else if (this.col.sort === 'desc') {
                    this.columnActions.emit({
                        payload: this.col,
                        type: 'COLUMN_SORT_CHANGED'
                    });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxUiTableColumnComponent.prototype.ngOnInit = function () {
    };
    NgxUiTableColumnComponent.prototype.onSortChanged = function () {
        this.col.sort = this.col.sort === 'asc' ? 'desc' : 'asc';
        this.columnActions.emit({
            payload: this.col,
            type: 'COLUMN_SORT_CHANGED'
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxUiTableColumnComponent.prototype, "columnActions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('column'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_ngx_ui_column__WEBPACK_IMPORTED_MODULE_2__["NgxUiColumn"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_ngx_ui_column__WEBPACK_IMPORTED_MODULE_2__["NgxUiColumn"]])
    ], NgxUiTableColumnComponent.prototype, "setColumn", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxUiTableColumnComponent.prototype, "tableData", void 0);
    NgxUiTableColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-ui-table-column',
            template: __webpack_require__(/*! ./ngx-ui-table-column.component.html */ "../ngx-ui-table/src/lib/components/ngx-ui-table-column/ngx-ui-table-column.component.html"),
            styles: [__webpack_require__(/*! ./ngx-ui-table-column.component.scss */ "../ngx-ui-table/src/lib/components/ngx-ui-table-column/ngx-ui-table-column.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxUiTableColumnComponent);
    return NgxUiTableColumnComponent;
}());



/***/ }),

/***/ "../ngx-ui-table/src/lib/models/ngx-ui-column.ts":
/*!*******************************************************!*\
  !*** ../ngx-ui-table/src/lib/models/ngx-ui-column.ts ***!
  \*******************************************************/
/*! exports provided: NgxUiColumn, TableTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiColumn", function() { return NgxUiColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableTemplate", function() { return TableTemplate; });
var NgxUiColumn = /** @class */ (function () {
    function NgxUiColumn() {
    }
    return NgxUiColumn;
}());

var TableTemplate = /** @class */ (function () {
    function TableTemplate() {
    }
    return TableTemplate;
}());



/***/ }),

/***/ "../ngx-ui-table/src/lib/models/ngx-ui-table-options.ts":
/*!**************************************************************!*\
  !*** ../ngx-ui-table/src/lib/models/ngx-ui-table-options.ts ***!
  \**************************************************************/
/*! exports provided: NgxUiTableOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiTableOptions", function() { return NgxUiTableOptions; });
var NgxUiTableOptions = /** @class */ (function () {
    function NgxUiTableOptions() {
    }
    return NgxUiTableOptions;
}());



/***/ }),

/***/ "../ngx-ui-table/src/lib/ngx-ui-table.component.html":
/*!***********************************************************!*\
  !*** ../ngx-ui-table/src/lib/ngx-ui-table.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-ui-table-container\" [ngStyle]=\"{'height': tableOptions?.tableHeight || '600px'}\">\n  <virtual-scroller #scroll [items]=\"tableDataCopy\">\n    <table  class=\"table\" [ngClass]=\"(tableOptions?.tableHover) ? 'table-hover': ''\">\n      <thead #header >\n      <tr class=\"table-header\">\n        <th  class=\"tbl-xs\">\n          <div class=\"checkbox-selected-all\">\n            <checkbox [selectedType]=\"'all'\"\n                          [item]=\"selectedAll\"\n                          (checkBoxAction)=\"onSelectedAllChecked($event)\">\n            </checkbox>\n          </div>\n        </th>\n        <th *ngFor=\"let column of  tableColumns | ngxUiColumnsPipe\" >\n          <div class=\"sortable\" *ngIf=\"!column.hide\">\n            <ngx-ui-table-column\n              (columnActions)=\"columnActions($event)\"\n              [tableData]=\"tableDataCopy\"\n              [column]=\"column\">\n            </ngx-ui-table-column>\n          </div>\n        </th>\n      </tr>\n      </thead>\n      <tbody  #container>\n      <tr *ngFor=\"let row of  scroll.viewPortItems\" class=\"mdx-table-row\">\n        <td class=\"tbl-xs\">\n          <checkbox\n            [item]=\"row\"\n            [selectedItems]=\"selectedItems\"\n            (checkBoxAction)=\"onOneItemChecked($event)\">\n          </checkbox>\n        </td>\n        <td *ngFor=\"let column of tableColumns  | ngxUiColumnsPipe\" [ngClass]=\"(column.size) ? column.size : 'tbl-md'\"\n            (click)=\"onRowClicked($event, row)\">\n          <div *ngIf=\"!column.hide\">\n            <div *ngIf=\"hasTemplate(column); else defaultRow\">\n              <div *ngIf=\"column.template.htmlString; else ngTemplate\">\n                <dynamic-content [templateString]=\"column.template.htmlString(row, column)\">\n                </dynamic-content>\n              </div>\n              <ng-template  #ngTemplate\n                            [ngTemplateOutlet]=\"column.template.ngTemplate\"\n                            [ngTemplateOutletContext]=\"{row: row,column: column}\">\n              </ng-template>\n            </div>\n            <ng-template #defaultRow>\n              <div>{{ row[column.field]}}</div>\n            </ng-template>\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </virtual-scroller>\n</div>\n"

/***/ }),

/***/ "../ngx-ui-table/src/lib/ngx-ui-table.component.scss":
/*!***********************************************************!*\
  !*** ../ngx-ui-table/src/lib/ngx-ui-table.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "virtual-scroller {\n  height: inherit; }\n\n.ngx-ui-table-container .table-header {\n  box-shadow: 1px 2px 6px 3px rgba(0, 0, 0, 0.1);\n  height: 40px;\n  border-radius: 2px;\n  background-color: #fdfdfd; }\n\n.ngx-ui-table-container .table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n  margin-top: -2px; }\n\n.ngx-ui-table-container table {\n  background-color: transparent; }\n\n.ngx-ui-table-container .table > thead > tr > th {\n  vertical-align: middle;\n  padding: 8px; }\n\n.ngx-ui-table-container .table > tbody > tr > td, .ngx-ui-table-container .table > tbody > tr > th, .ngx-ui-table-container .table > tfoot > tr > td, .ngx-ui-table-container .table > tfoot > tr > th, .ngx-ui-table-container .table > thead > tr > td, .ngx-ui-table-container .table > thead > tr > th {\n  padding: 2px;\n  vertical-align: middle; }\n\n.ngx-ui-table-container th {\n  text-align: left; }\n\n.ngx-ui-table-container td, .ngx-ui-table-container th {\n  padding: 0; }\n\n.ngx-ui-table-container .table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n  cursor: pointer; }\n\n.ngx-ui-table-container .tbl-xs {\n  width: 0.5%; }\n\n.ngx-ui-table-container .tbl-sm {\n  width: 14%; }\n\n.ngx-ui-table-container .tbl-md {\n  width: 18%; }\n\n.ngx-ui-table-container .tbl-lg {\n  width: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC11aS10YWJsZS9zcmMvbGliL0Q6XFxjcmVhdGVQbHVnaW5zXFxucG0tcHJvamVjdFxcbmd4LXVpLXRhYmxlL3Byb2plY3RzXFxuZ3gtdWktdGFibGVcXHNyY1xcbGliXFxuZ3gtdWktdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxlQUFlLEVBQUE7O0FBSWpCO0VBR0ksOENBQThDO0VBQzlDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBTjdCO0VBU0ksV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBWnBCO0VBZUksNkJBQTZCLEVBQUE7O0FBZmpDO0VBa0JJLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBbkJoQjtFQXVCSSxZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBeEIxQjtFQTJCSSxnQkFBZ0IsRUFBQTs7QUEzQnBCO0VBOEJJLFVBQVUsRUFBQTs7QUE5QmQ7RUFpQ0kseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFsQ25CO0VBcUNJLFdBQVcsRUFBQTs7QUFyQ2Y7RUF3Q0ksVUFBVSxFQUFBOztBQXhDZDtFQTJDSSxVQUFVLEVBQUE7O0FBM0NkO0VBOENJLFVBQVUsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtdWktdGFibGUvc3JjL2xpYi9uZ3gtdWktdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ2aXJ0dWFsLXNjcm9sbGVyIHtcclxuICAvL3dpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgLy9oZWlnaHQ6IDYwMHB4O1xyXG5cclxufVxyXG4ubmd4LXVpLXRhYmxlLWNvbnRhaW5lciB7XHJcblxyXG4gIC50YWJsZS1oZWFkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XHJcbiAgfVxyXG4gIC50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnRhYmxlPnRoZWFkPnRyPnRoIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIC50YWJsZT50Ym9keT50cj50ZCwgLnRhYmxlPnRib2R5PnRyPnRoLCAudGFibGU+dGZvb3Q+dHI+dGQsIC50YWJsZT50Zm9vdD50cj50aCwgLnRhYmxlPnRoZWFkPnRyPnRkLCAudGFibGU+dGhlYWQ+dHI+dGgge1xyXG5cclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIHRkLCB0aCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAudGFibGUtaG92ZXI+dGJvZHk+dHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRibC14cyB7XHJcbiAgICB3aWR0aDogMC41JTtcclxuICB9XHJcbiAgLnRibC1zbSB7XHJcbiAgICB3aWR0aDogMTQlO1xyXG4gIH1cclxuICAudGJsLW1kIHtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgfVxyXG4gIC50YmwtbGcge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgLnRibC1uby1zaXplIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "../ngx-ui-table/src/lib/ngx-ui-table.component.ts":
/*!*********************************************************!*\
  !*** ../ngx-ui-table/src/lib/ngx-ui-table.component.ts ***!
  \*********************************************************/
/*! exports provided: NgxUiTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiTableComponent", function() { return NgxUiTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ngx_ui_table_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/ngx-ui-table-options */ "../ngx-ui-table/src/lib/models/ngx-ui-table-options.ts");



var NgxUiTableComponent = /** @class */ (function () {
    function NgxUiTableComponent() {
        this.tableActions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tableDataCopy = [];
        this.tableColumns = [];
        this.selectedItems = [];
        this.selectedAll = {};
        this.tableKeys = [];
    }
    Object.defineProperty(NgxUiTableComponent.prototype, "setColumns", {
        set: function (columns) {
            if (columns) {
                this.tableColumns = columns.map(function (col) {
                    if (!col.hasOwnProperty('hide')) {
                        col.hide = false;
                    }
                    return col;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxUiTableComponent.prototype, "setSearch", {
        set: function (str) {
            var _this = this;
            if (str) {
                this.tableDataCopy = this.tableData.filter(function (val) {
                    return _this.tableKeys.filter(function (col) {
                        return val[col].toString().toLocaleLowerCase().includes(str.toString());
                    }).length > 0;
                });
            }
            else {
                this.tableDataCopy = this.tableData;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxUiTableComponent.prototype.ngOnInit = function () {
        this.tableKeys = Object.keys(this.tableData[0]);
        this.tableDataCopy = this.tableData.slice();
    };
    NgxUiTableComponent.prototype.hasTemplate = function (column) {
        return !!column.template && (!!column.template.htmlString || !!column.template.ngTemplate);
    };
    NgxUiTableComponent.prototype.onRowClicked = function (event, row) {
        console.log(row);
        event.stopPropagation();
    };
    NgxUiTableComponent.prototype.onSelectedAllChecked = function (event) {
        switch (event.type) {
            case 'CHECKBOX_SELECTED_ALL':
                if (event.payload.checked) {
                    this.selectedItems = this.tableData;
                }
                else {
                    this.selectedItems = [];
                }
                console.log(event.payload);
                var tblData = this.tableData.map(function (tableData) {
                    tableData.checked = false;
                    return tableData;
                });
                this.tableData = tblData.map(function (tableData) {
                    tableData.checked = event.payload.checked;
                    return tableData;
                });
                this.tableActions.emit({
                    type: 'CHECKBOX_SELECTED_ALL',
                    payload: this.tableData
                });
                break;
        }
    };
    NgxUiTableComponent.prototype.onOneItemChecked = function (event) {
        console.log(event);
        switch (event.type) {
            case 'CHECKBOX_SELECTED_ITEMS_CHANGED':
                if (this.selectedItems.length === 0) {
                    this.selectedItems = event.payload;
                }
                this.tableActions.emit(event);
                break;
        }
    };
    NgxUiTableComponent.prototype.columnActions = function (event) {
        var payload = event.payload, type = event.type;
        switch (type) {
            case 'COLUMN_SORT_CHANGED':
                if (payload.sort === 'asc') {
                    this.tableDataCopy = [].concat(this.tableDataCopy || [])
                        .sort(function (a, b) { return -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field]); });
                }
                else {
                    this.tableDataCopy = [].concat(this.tableDataCopy || [])
                        .sort(function (b, a) { return -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field]); });
                }
                break;
        }
        this.tableActions.emit(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxUiTableComponent.prototype, "tableActions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxUiTableComponent.prototype, "tableData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('columns'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], NgxUiTableComponent.prototype, "setColumns", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_ngx_ui_table_options__WEBPACK_IMPORTED_MODULE_2__["NgxUiTableOptions"])
    ], NgxUiTableComponent.prototype, "tableOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], NgxUiTableComponent.prototype, "setSearch", null);
    NgxUiTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-ui-table',
            template: __webpack_require__(/*! ./ngx-ui-table.component.html */ "../ngx-ui-table/src/lib/ngx-ui-table.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./ngx-ui-table.component.scss */ "../ngx-ui-table/src/lib/ngx-ui-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxUiTableComponent);
    return NgxUiTableComponent;
}());



/***/ }),

/***/ "../ngx-ui-table/src/lib/ngx-ui-table.module.ts":
/*!******************************************************!*\
  !*** ../ngx-ui-table/src/lib/ngx-ui-table.module.ts ***!
  \******************************************************/
/*! exports provided: NgxUiTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiTableModule", function() { return NgxUiTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_ui_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-ui-table.component */ "../ngx-ui-table/src/lib/ngx-ui-table.component.ts");
/* harmony import */ var _components_ngx_ui_table_column_ngx_ui_table_column_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ngx-ui-table-column/ngx-ui-table-column.component */ "../ngx-ui-table/src/lib/components/ngx-ui-table-column/ngx-ui-table-column.component.ts");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-virtual-scroller */ "../../node_modules/ngx-virtual-scroller/fesm5/ngx-virtual-scroller.js");
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ "../ngx-ui-table/src/lib/components/checkbox/checkbox.component.ts");
/* harmony import */ var _components_dynamic_content_dynamic_content_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dynamic-content/dynamic-content.module */ "../ngx-ui-table/src/lib/components/dynamic-content/dynamic-content.module.ts");
/* harmony import */ var _pipes_ngx_ui_columns_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/ngx-ui-columns.pipe */ "../ngx-ui-table/src/lib/pipes/ngx-ui-columns.pipe.ts");









var NgxUiTableModule = /** @class */ (function () {
    function NgxUiTableModule() {
    }
    NgxUiTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _ngx_ui_table_component__WEBPACK_IMPORTED_MODULE_3__["NgxUiTableComponent"],
                _components_ngx_ui_table_column_ngx_ui_table_column_component__WEBPACK_IMPORTED_MODULE_4__["NgxUiTableColumnComponent"],
                _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"],
                _pipes_ngx_ui_columns_pipe__WEBPACK_IMPORTED_MODULE_8__["NgxUiColumnsPipe"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__["VirtualScrollerModule"],
                _components_dynamic_content_dynamic_content_module__WEBPACK_IMPORTED_MODULE_7__["DynamicContentModule"]
            ],
            exports: [
                _ngx_ui_table_component__WEBPACK_IMPORTED_MODULE_3__["NgxUiTableComponent"]
            ]
        })
    ], NgxUiTableModule);
    return NgxUiTableModule;
}());



/***/ }),

/***/ "../ngx-ui-table/src/lib/pipes/ngx-ui-columns.pipe.ts":
/*!************************************************************!*\
  !*** ../ngx-ui-table/src/lib/pipes/ngx-ui-columns.pipe.ts ***!
  \************************************************************/
/*! exports provided: NgxUiColumnsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiColumnsPipe", function() { return NgxUiColumnsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NgxUiColumnsPipe = /** @class */ (function () {
    function NgxUiColumnsPipe() {
    }
    NgxUiColumnsPipe.prototype.transform = function (items) {
        return items.filter(function (item) {
            if (item.hasOwnProperty('hide')) {
                return !!!item.hide;
            }
            else {
                return item;
            }
        });
    };
    NgxUiColumnsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ngxUiColumnsPipe'
        })
    ], NgxUiColumnsPipe);
    return NgxUiColumnsPipe;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtdWktdGFibGUtdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-ui-table\n  [tableData]=\"tableData\"\n  [columns]=\"columns\">\n\n</ngx-ui-table>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.tableData = [];
        this.title = 'ngx-ui-table-test';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setTableData();
        this.setColumns();
    };
    AppComponent.prototype.setColumns = function () {
        this.columns = [
            {
                field: 'id',
                name: 'id',
                size: 'tbl-sm',
                sort: 'desc'
            },
            {
                field: 'isActive',
                name: 'isActive',
                template: {
                    htmlString: function (row, column) { return "<h4>" + row[column.field] + "</h4>"; }
                },
                size: 'tbl-sm',
                hide: false
            },
            {
                field: 'name',
                name: 'Name',
                size: 'tbl-lg'
            }
        ];
    };
    AppComponent.prototype.setTableData = function () {
        this.tableData = [
            {
                'id': 100,
                'name': 'john doe01',
                'image': 'https://picsum.photos/200/300?random=01',
                'isActive': true,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            },
            {
                'id': 101,
                'name': 'john doe11',
                'image': 'https://picsum.photos/200/300?random=11',
                'isActive': false,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            },
            {
                'id': 102,
                'name': 'john doe21',
                'image': 'https://picsum.photos/200/300?random=21',
                'isActive': true,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            },
            {
                'id': 103,
                'name': 'john doe31',
                'image': 'https://picsum.photos/200/300?random=31',
                'isActive': false,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            },
            {
                'id': 104,
                'name': 'john doe41',
                'image': 'https://picsum.photos/200/300?random=41',
                'isActive': true,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            },
            {
                'id': 105,
                'name': 'john doe51',
                'image': 'https://picsum.photos/200/300?random=51',
                'isActive': false,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            },
            {
                'id': 106,
                'name': 'john doe61',
                'image': 'https://picsum.photos/200/300?random=61',
                'isActive': true,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            },
            {
                'id': 107,
                'name': 'john doe71',
                'image': 'https://picsum.photos/200/300?random=71',
                'isActive': false,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            },
            {
                'id': 108,
                'name': 'john doe81',
                'image': 'https://picsum.photos/200/300?random=81',
                'isActive': true,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            },
            {
                'id': 109,
                'name': 'john doe91',
                'image': 'https://picsum.photos/200/300?random=91',
                'isActive': false,
                'lastSeen': '2019-04-25T18:00:09.543Z'
            }
        ];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_ui_table_src_lib_ngx_ui_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ngx-ui-table/src/lib/ngx-ui-table.module */ "../ngx-ui-table/src/lib/ngx-ui-table.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngx_ui_table_src_lib_ngx_ui_table_module__WEBPACK_IMPORTED_MODULE_4__["NgxUiTableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\createPlugins\npm-project\ngx-ui-table\projects\ngx-ui-table-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map