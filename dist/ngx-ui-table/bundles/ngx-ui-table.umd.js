(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-virtual-scroller'), require('@angular/common'), require('@angular/platform-browser-dynamic'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-ui-table', ['exports', 'ngx-virtual-scroller', '@angular/common', '@angular/platform-browser-dynamic', '@angular/core'], factory) :
    (factory((global['ngx-ui-table'] = {}),global.ngxVirtualScroller,global.ng.common,global.ng.platformBrowserDynamic,global.ng.core));
}(this, (function (exports,ngxVirtualScroller,common,platformBrowserDynamic,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiTableComponent = /** @class */ (function () {
        function NgxUiTableComponent() {
            this.tableActions = new core.EventEmitter();
            this.tableDataCopy = [];
            this.tableColumns = [];
            this.selectedItems = [];
            this.selectedAll = {};
            this.tableKeys = [];
        }
        Object.defineProperty(NgxUiTableComponent.prototype, "setColumns", {
            set: /**
             * @param {?} columns
             * @return {?}
             */ function (columns) {
                if (columns) {
                    this.tableColumns = columns.map(( /**
                     * @param {?} col
                     * @return {?}
                     */function (col) {
                        if (!col.hasOwnProperty('hide')) {
                            col.hide = false;
                        }
                        return col;
                    }));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxUiTableComponent.prototype, "setSearch", {
            set: /**
             * @param {?} str
             * @return {?}
             */ function (str) {
                var _this = this;
                if (str) {
                    this.tableDataCopy = this.tableData.filter(( /**
                     * @param {?} val
                     * @return {?}
                     */function (val) {
                        return _this.tableKeys.filter(( /**
                         * @param {?} col
                         * @return {?}
                         */function (col) {
                            return val[col].toString().toLocaleLowerCase().includes(str.toString());
                        })).length > 0;
                    }));
                }
                else {
                    this.tableDataCopy = this.tableData;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxUiTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.tableKeys = Object.keys(this.tableData[0]);
                this.tableDataCopy = __spread(this.tableData);
            };
        /**
         * @param {?} column
         * @return {?}
         */
        NgxUiTableComponent.prototype.hasTemplate = /**
         * @param {?} column
         * @return {?}
         */
            function (column) {
                return !!column.template && (!!column.template.htmlString || !!column.template.ngTemplate);
            };
        /**
         * @param {?} event
         * @param {?} row
         * @return {?}
         */
        NgxUiTableComponent.prototype.onRowClicked = /**
         * @param {?} event
         * @param {?} row
         * @return {?}
         */
            function (event, row) {
                this.tableActions.emit({
                    payload: row,
                    type: 'ROW_CLICKED'
                });
                event.stopPropagation();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxUiTableComponent.prototype.onSelectedAllChecked = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.type) {
                    case 'CHECKBOX_SELECTED_ALL':
                        if (event.payload.checked) {
                            this.selectedItems = this.tableData;
                        }
                        else {
                            this.selectedItems = [];
                        }
                        /** @type {?} */
                        var tblData = this.tableData.map(( /**
                         * @param {?} tableData
                         * @return {?}
                         */function (tableData) {
                            tableData.checked = false;
                            return tableData;
                        }));
                        this.tableData = tblData.map(( /**
                         * @param {?} tableData
                         * @return {?}
                         */function (tableData) {
                            tableData.checked = event.payload.checked;
                            return tableData;
                        }));
                        this.tableActions.emit({
                            type: 'CHECKBOX_SELECTED_ALL',
                            payload: this.tableData
                        });
                        break;
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxUiTableComponent.prototype.onOneItemChecked = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.type) {
                    case 'CHECKBOX_SELECTED_ITEMS_CHANGED':
                        if (this.selectedItems.length === 0) {
                            this.selectedItems = event.payload;
                        }
                        this.tableActions.emit(event);
                        break;
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxUiTableComponent.prototype.columnActions = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var payload = event.payload, type = event.type;
                switch (type) {
                    case 'COLUMN_SORT_CHANGED':
                        if (payload.sort === 'asc') {
                            this.tableDataCopy = [].concat(this.tableDataCopy || [])
                                .sort(( /**
                         * @param {?} a
                         * @param {?} b
                         * @return {?}
                         */function (a, b) { return -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field]); }));
                        }
                        else {
                            this.tableDataCopy = [].concat(this.tableDataCopy || [])
                                .sort(( /**
                         * @param {?} b
                         * @param {?} a
                         * @return {?}
                         */function (b, a) { return -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field]); }));
                        }
                        break;
                }
                this.tableActions.emit(event);
            };
        NgxUiTableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-ui-table',
                        template: "<div class=\"ngx-ui-table-container\" [ngStyle]=\"{'height': tableOptions?.tableHeight || '600px'}\">\n  <virtual-scroller #scroll [items]=\"tableDataCopy\">\n    <table  class=\"table\" [ngClass]=\"(tableOptions?.tableHover) ? 'table-hover': ''\">\n      <thead #header >\n      <tr class=\"table-header\">\n        <th  class=\"tbl-xs\">\n          <div class=\"checkbox-selected-all\">\n            <checkbox [selectedType]=\"'all'\"\n                          [item]=\"selectedAll\"\n                          (checkBoxAction)=\"onSelectedAllChecked($event)\">\n            </checkbox>\n          </div>\n        </th>\n        <th *ngFor=\"let column of  tableColumns | ngxUiColumnsPipe\" >\n          <div class=\"sortable\" *ngIf=\"!column.hide\" [ngClass]=\"(column.className) ? column.className : 'tbl-md'\">\n            <ngx-ui-table-column\n              (columnActions)=\"columnActions($event)\"\n              [tableData]=\"tableDataCopy\"\n              [column]=\"column\">\n            </ngx-ui-table-column>\n          </div>\n        </th>\n      </tr>\n      </thead>\n      <tbody  #container>\n      <tr *ngFor=\"let row of  scroll.viewPortItems\" class=\"ngx-ui-table-row\">\n        <td class=\"tbl-xs\">\n          <checkbox\n            [item]=\"row\"\n            [selectedItems]=\"selectedItems\"\n            (checkBoxAction)=\"onOneItemChecked($event)\">\n          </checkbox>\n        </td>\n        <td *ngFor=\"let column of tableColumns  | ngxUiColumnsPipe\"\n            (click)=\"onRowClicked($event, row)\">\n          <div *ngIf=\"!column.hide\">\n            <div *ngIf=\"hasTemplate(column); else defaultRow\">\n              <div *ngIf=\"column.template.htmlString; else ngTemplate\">\n                <dynamic-content [templateString]=\"column.template.htmlString(row, column)\">\n                </dynamic-content>\n              </div>\n              <ng-template  #ngTemplate\n                            [ngTemplateOutlet]=\"column.template.ngTemplate\"\n                            [ngTemplateOutletContext]=\"{row: row,column: column}\">\n              </ng-template>\n            </div>\n            <ng-template #defaultRow>\n              <div>{{ row[column.field]}}</div>\n            </ng-template>\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </virtual-scroller>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["virtual-scroller{height:inherit}.ngx-ui-table-container .table-header{box-shadow:1px 2px 6px 3px rgba(0,0,0,.1);height:40px;border-radius:2px;background-color:#fdfdfd}.ngx-ui-table-container .table{width:100%;max-width:100%;margin-bottom:20px;margin-top:-2px}.ngx-ui-table-container table{background-color:transparent}.ngx-ui-table-container .table>tbody>tr>td,.ngx-ui-table-container .table>tbody>tr>th,.ngx-ui-table-container .table>tfoot>tr>td,.ngx-ui-table-container .table>tfoot>tr>th,.ngx-ui-table-container .table>thead>tr>td,.ngx-ui-table-container .table>thead>tr>th{padding:2px;vertical-align:middle}.ngx-ui-table-container th{text-align:left}.ngx-ui-table-container td,.ngx-ui-table-container th{padding:0}.ngx-ui-table-container .table-hover>tbody>tr:hover{background-color:#f5f5f5;cursor:pointer}.ngx-ui-table-container .tbl-xs{width:.5%}.ngx-ui-table-container .tbl-sm{width:14%}.ngx-ui-table-container .tbl-md{width:18%}.ngx-ui-table-container .tbl-lg{width:25%}"]
                    }] }
        ];
        /** @nocollapse */
        NgxUiTableComponent.ctorParameters = function () { return []; };
        NgxUiTableComponent.propDecorators = {
            tableActions: [{ type: core.Output }],
            tableData: [{ type: core.Input }],
            setColumns: [{ type: core.Input, args: ['columns',] }],
            tableOptions: [{ type: core.Input }],
            setSearch: [{ type: core.Input, args: ['search',] }]
        };
        return NgxUiTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiTableColumnComponent = /** @class */ (function () {
        function NgxUiTableColumnComponent() {
            this.columnActions = new core.EventEmitter();
        }
        Object.defineProperty(NgxUiTableColumnComponent.prototype, "setColumn", {
            set: /**
             * @param {?} column
             * @return {?}
             */ function (column) {
                if (column) {
                    this.col = column;
                    if (column.isHaveFilter) ;
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
        /**
         * @return {?}
         */
        NgxUiTableColumnComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        NgxUiTableColumnComponent.prototype.onSortChanged = /**
         * @return {?}
         */
            function () {
                this.col.sort = this.col.sort === 'asc' ? 'desc' : 'asc';
                this.columnActions.emit({
                    payload: this.col,
                    type: 'COLUMN_SORT_CHANGED'
                });
            };
        NgxUiTableColumnComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-ui-table-column',
                        template: "<div class=\"mdx-table-column-container {{col.className}}\">\n  <div class=\"sorting\" (click)=\"onSortChanged()\" *ngIf=\"!col.notSorted\">\n    <div class=\"{{col.sort}}\"></div>\n    <div class=\"column-name\" >\n      {{col.name}}\n    </div>\n  </div>\n  <div class=\"column-name\" *ngIf=\"col.notSorted\">\n    {{col.name}}\n  </div>\n  <!--<div *ngIf=\"filter\" class=\"filter\">-->\n    <!--<app-ui-dropdown-icon-->\n      <!--[className]=\"'table-filters'\"-->\n      <!--[items]=\"filter\"-->\n      <!--[showFilterIcon]=\"true\"-->\n      <!--[rowName]=\"'name'\">-->\n    <!--</app-ui-dropdown-icon>-->\n  <!--</div>-->\n\n</div>\n",
                        styles: ["virtual-scroller{width:100%;height:95vh}.sorting{display:flex}.sorting .asc,.sorting .desc{width:18px}.sorting .asc:after{content:' \\25B2';color:#d3d3d3}.sorting .desc:after{content:' \\25BC';color:#d3d3d3}"]
                    }] }
        ];
        /** @nocollapse */
        NgxUiTableColumnComponent.ctorParameters = function () { return []; };
        NgxUiTableColumnComponent.propDecorators = {
            columnActions: [{ type: core.Output }],
            setColumn: [{ type: core.Input, args: ['column',] }],
            tableData: [{ type: core.Input }]
        };
        return NgxUiTableColumnComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
            this.checkBoxAction = new core.EventEmitter();
            this.label = '';
        }
        Object.defineProperty(CheckboxComponent.prototype, "setItem", {
            set: /**
             * @param {?} item
             * @return {?}
             */ function (item) {
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
        /**
         * @param {?} event
         * @return {?}
         */
        CheckboxComponent.prototype.onCheckboxChanged = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
        /**
         * @param {?} item
         * @return {?}
         */
        CheckboxComponent.prototype.addOrRemoveItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var index = this.selectedItems.indexOf(item);
                if (index === -1) {
                    this.selectedItems.push(item);
                }
                else {
                    this.selectedItems.splice(index, 1);
                }
            };
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'checkbox',
                        template: "<label class=\"lbl\">\n  <input type=\"checkbox\"\n         [name]=\"label\"\n         [checked]=\"_item?.checked\"\n         (change)=\"onCheckboxChanged($event)\"/>\n</label>\n",
                        styles: ["input[type=checkbox]{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background:#d3d3d3;height:16px;width:16px;border:1px solid #fff}input[type=checkbox]:checked{background:#2aa1c0}input[type=checkbox]:hover{-webkit-filter:brightness(90%);filter:brightness(90%)}input[type=checkbox]:disabled{background:#e6e6e6;opacity:.6;pointer-events:none}input[type=checkbox]:after{content:'';position:relative;left:36%;top:11%;width:21%;height:54%;border:solid #fff;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);display:none}input[type=checkbox]:checked:after{display:block}input[type=checkbox]:disabled:after{border-color:#7b7b7b}"]
                    }] }
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        CheckboxComponent.propDecorators = {
            checkBoxAction: [{ type: core.Output }],
            selectedType: [{ type: core.Input }],
            selectedItems: [{ type: core.Input }],
            label: [{ type: core.Input }],
            setItem: [{ type: core.Input, args: ['item',] }]
        };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicContentComponent = /** @class */ (function () {
        function DynamicContentComponent(compiler) {
            this.compiler = compiler;
        }
        Object.defineProperty(DynamicContentComponent.prototype, "setTemplateString", {
            set: /**
             * @param {?} tplString
             * @return {?}
             */ function (tplString) {
                var _this = this;
                if (tplString) {
                    this.compiler.clearCache();
                    /** @type {?} */
                    var component = core.Component({
                        template: tplString,
                    })(/** @class */ (function () {
                        function class_1() {
                        }
                        return class_1;
                    }()));
                    // Define the module using NgModule decorator.
                    /** @type {?} */
                    var module = core.NgModule({
                        declarations: [component]
                    })(/** @class */ (function () {
                        function class_2() {
                        }
                        return class_2;
                    }()));
                    // Asynchronously (recommended) compile the module and the component.
                    this.compiler.compileModuleAndAllComponentsAsync(module)
                        .then(( /**
                 * @param {?} factories
                 * @return {?}
                 */function (factories) {
                        // Get the component factory.
                        /** @type {?} */
                        var componentFactory = factories.componentFactories[0];
                        // Create the component and add to the view.
                        /** @type {?} */
                        var componentRef = _this.container.createComponent(componentFactory);
                    }));
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicContentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DynamicContentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dynamic-content',
                        template: "<ng-container #container></ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DynamicContentComponent.ctorParameters = function () {
            return [
                { type: core.Compiler }
            ];
        };
        DynamicContentComponent.propDecorators = {
            container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef },] }],
            setTemplateString: [{ type: core.Input, args: ['templateString',] }]
        };
        return DynamicContentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} compilerFactory
     * @return {?}
     */
    function createCompiler(compilerFactory) {
        return compilerFactory.createCompiler();
    }
    var ɵ0 = {};
    var DynamicContentModule = /** @class */ (function () {
        function DynamicContentModule() {
        }
        DynamicContentModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            DynamicContentComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            DynamicContentComponent
                        ],
                        providers: [
                            // Compiler is not included in AOT-compiled bundle.
                            // Must explicitly provide compiler to be able to compile templates at runtime.
                            { provide: core.COMPILER_OPTIONS, useValue: ɵ0, multi: true },
                            { provide: core.CompilerFactory, useClass: platformBrowserDynamic.JitCompilerFactory, deps: [core.COMPILER_OPTIONS] },
                            { provide: core.Compiler, useFactory: createCompiler, deps: [core.CompilerFactory] }
                        ],
                    },] }
        ];
        return DynamicContentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiColumnsPipe = /** @class */ (function () {
        function NgxUiColumnsPipe() {
        }
        /**
         * @param {?} items
         * @return {?}
         */
        NgxUiColumnsPipe.prototype.transform = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                return items.filter(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    if (item.hasOwnProperty('hide')) {
                        return !!!item.hide;
                    }
                    else {
                        return item;
                    }
                }));
            };
        NgxUiColumnsPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'ngxUiColumnsPipe'
                    },] }
        ];
        return NgxUiColumnsPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiTableModule = /** @class */ (function () {
        function NgxUiTableModule() {
        }
        NgxUiTableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NgxUiTableComponent,
                            NgxUiTableColumnComponent,
                            CheckboxComponent,
                            NgxUiColumnsPipe,
                        ],
                        imports: [
                            common.CommonModule,
                            ngxVirtualScroller.VirtualScrollerModule,
                            DynamicContentModule
                        ],
                        exports: [
                            NgxUiTableComponent,
                            ngxVirtualScroller.VirtualScrollerModule
                        ]
                    },] }
        ];
        return NgxUiTableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxUiTableOptions = /** @class */ (function () {
        function NgxUiTableOptions() {
        }
        return NgxUiTableOptions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxUiTableComponent = NgxUiTableComponent;
    exports.NgxUiTableModule = NgxUiTableModule;
    exports.NgxUiColumn = NgxUiColumn;
    exports.TableTemplate = TableTemplate;
    exports.NgxUiTableOptions = NgxUiTableOptions;
    exports.ɵb = CheckboxComponent;
    exports.ɵf = DynamicContentComponent;
    exports.ɵe = DynamicContentModule;
    exports.ɵd = createCompiler;
    exports.ɵa = NgxUiTableColumnComponent;
    exports.ɵc = NgxUiColumnsPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ui-table.umd.js.map