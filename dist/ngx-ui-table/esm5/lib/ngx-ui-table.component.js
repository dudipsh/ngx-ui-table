/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxUiTableOptions } from './models/ngx-ui-table-options';
var NgxUiTableComponent = /** @class */ (function () {
    function NgxUiTableComponent() {
        this.tableActions = new EventEmitter();
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
         */
        function (columns) {
            if (columns) {
                this.tableColumns = columns.map((/**
                 * @param {?} col
                 * @return {?}
                 */
                function (col) {
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
         */
        function (str) {
            var _this = this;
            if (str) {
                this.tableDataCopy = this.tableData.filter((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    return _this.tableKeys.filter((/**
                     * @param {?} col
                     * @return {?}
                     */
                    function (col) {
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
        this.tableDataCopy = tslib_1.__spread(this.tableData);
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
                var tblData = this.tableData.map((/**
                 * @param {?} tableData
                 * @return {?}
                 */
                function (tableData) {
                    tableData.checked = false;
                    return tableData;
                }));
                this.tableData = tblData.map((/**
                 * @param {?} tableData
                 * @return {?}
                 */
                function (tableData) {
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
                        .sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) { return -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field]); }));
                }
                else {
                    this.tableDataCopy = [].concat(this.tableDataCopy || [])
                        .sort((/**
                     * @param {?} b
                     * @param {?} a
                     * @return {?}
                     */
                    function (b, a) { return -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field]); }));
                }
                break;
        }
        this.tableActions.emit(event);
    };
    NgxUiTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-ui-table',
                    template: "<div class=\"ngx-ui-table-container\" [ngStyle]=\"{'height': tableOptions?.tableHeight || '600px'}\">\n  <virtual-scroller #scroll [items]=\"tableDataCopy\">\n    <table  class=\"table\" [ngClass]=\"(tableOptions?.tableHover) ? 'table-hover': ''\">\n      <thead #header >\n      <tr class=\"table-header\">\n        <th  class=\"tbl-xs\">\n          <div class=\"checkbox-selected-all\">\n            <checkbox [selectedType]=\"'all'\"\n                          [item]=\"selectedAll\"\n                          (checkBoxAction)=\"onSelectedAllChecked($event)\">\n            </checkbox>\n          </div>\n        </th>\n        <th *ngFor=\"let column of  tableColumns | ngxUiColumnsPipe\" >\n          <div class=\"sortable\" *ngIf=\"!column.hide\">\n            <ngx-ui-table-column\n              (columnActions)=\"columnActions($event)\"\n              [tableData]=\"tableDataCopy\"\n              [column]=\"column\">\n            </ngx-ui-table-column>\n          </div>\n        </th>\n      </tr>\n      </thead>\n      <tbody  #container>\n      <tr *ngFor=\"let row of  scroll.viewPortItems\" class=\"ngx-ui-table-row\">\n        <td class=\"tbl-xs\">\n          <checkbox\n            [item]=\"row\"\n            [selectedItems]=\"selectedItems\"\n            (checkBoxAction)=\"onOneItemChecked($event)\">\n          </checkbox>\n        </td>\n        <td *ngFor=\"let column of tableColumns  | ngxUiColumnsPipe\" [ngClass]=\"(column.size) ? column.size : 'tbl-md'\"\n            (click)=\"onRowClicked($event, row)\">\n          <div *ngIf=\"!column.hide\">\n            <div *ngIf=\"hasTemplate(column); else defaultRow\">\n              <div *ngIf=\"column.template.htmlString; else ngTemplate\">\n                <dynamic-content [templateString]=\"column.template.htmlString(row, column)\">\n                </dynamic-content>\n              </div>\n              <ng-template  #ngTemplate\n                            [ngTemplateOutlet]=\"column.template.ngTemplate\"\n                            [ngTemplateOutletContext]=\"{row: row,column: column}\">\n              </ng-template>\n            </div>\n            <ng-template #defaultRow>\n              <div>{{ row[column.field]}}</div>\n            </ng-template>\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </virtual-scroller>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["virtual-scroller{height:inherit}.ngx-ui-table-container .table-header{box-shadow:1px 2px 6px 3px rgba(0,0,0,.1);height:40px;border-radius:2px;background-color:#fdfdfd}.ngx-ui-table-container .table{width:100%;max-width:100%;margin-bottom:20px;margin-top:-2px}.ngx-ui-table-container table{background-color:transparent}.ngx-ui-table-container .table>tbody>tr>td,.ngx-ui-table-container .table>tbody>tr>th,.ngx-ui-table-container .table>tfoot>tr>td,.ngx-ui-table-container .table>tfoot>tr>th,.ngx-ui-table-container .table>thead>tr>td,.ngx-ui-table-container .table>thead>tr>th{padding:2px;vertical-align:middle}.ngx-ui-table-container th{text-align:left}.ngx-ui-table-container td,.ngx-ui-table-container th{padding:0}.ngx-ui-table-container .table-hover>tbody>tr:hover{background-color:#f5f5f5;cursor:pointer}.ngx-ui-table-container .tbl-xs{width:.5%}.ngx-ui-table-container .tbl-sm{width:14%}.ngx-ui-table-container .tbl-md{width:18%}.ngx-ui-table-container .tbl-lg{width:25%}"]
                }] }
    ];
    /** @nocollapse */
    NgxUiTableComponent.ctorParameters = function () { return []; };
    NgxUiTableComponent.propDecorators = {
        tableActions: [{ type: Output }],
        tableData: [{ type: Input }],
        setColumns: [{ type: Input, args: ['columns',] }],
        tableOptions: [{ type: Input }],
        setSearch: [{ type: Input, args: ['search',] }]
    };
    return NgxUiTableComponent;
}());
export { NgxUiTableComponent };
if (false) {
    /** @type {?} */
    NgxUiTableComponent.prototype.tableActions;
    /** @type {?} */
    NgxUiTableComponent.prototype.tableData;
    /** @type {?} */
    NgxUiTableComponent.prototype.tableOptions;
    /** @type {?} */
    NgxUiTableComponent.prototype.tableDataCopy;
    /** @type {?} */
    NgxUiTableComponent.prototype.tableColumns;
    /** @type {?} */
    NgxUiTableComponent.prototype.selectedItems;
    /** @type {?} */
    NgxUiTableComponent.prototype.selectedAll;
    /** @type {?} */
    NgxUiTableComponent.prototype.tableKeys;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdWktdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd0RyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUVoRTtJQXFDRTtRQTlCVSxpQkFBWSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBeUI1RSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFDakMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNDLENBQUM7SUE1QmpCLHNCQUFzQiwyQ0FBVTs7Ozs7UUFBaEMsVUFBaUMsT0FBc0I7WUFDckQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRzs7OztnQkFBQyxVQUFDLEdBQUc7b0JBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUMvQixHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztxQkFDbEI7b0JBQ0QsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUM7OztPQUFBO0lBR0Qsc0JBQXFCLDBDQUFTOzs7OztRQUE5QixVQUErQixHQUFXO1lBQTFDLGlCQVVDO1lBVEMsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGFBQWEsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQyxHQUFH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RUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7OytCQUVFLE1BQU07NEJBQ04sS0FBSzs2QkFDTCxLQUFLLFNBQUMsU0FBUzsrQkFVZixLQUFLOzRCQUVMLEtBQUssU0FBQyxRQUFROztJQWlGakIsMEJBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQWhHWSxtQkFBbUI7OztJQUM5QiwyQ0FBNEU7O0lBQzVFLHdDQUFtQjs7SUFXbkIsMkNBQXlDOztJQWF6Qyw0Q0FBbUI7O0lBQ25CLDJDQUFpQzs7SUFDakMsNENBQW1COztJQUNuQiwwQ0FBaUI7O0lBQ2pCLHdDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05neFVpQ29sdW1ufSBmcm9tICcuL21vZGVscy9uZ3gtdWktY29sdW1uJztcbmltcG9ydCB7QWN0aW9uc30gZnJvbSAnLi9tb2RlbHMvYWN0aW9ucyc7XG5pbXBvcnQge05neFVpVGFibGVPcHRpb25zfSBmcm9tICcuL21vZGVscy9uZ3gtdWktdGFibGUtb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC11aS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtdWktdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtdWktdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4VWlUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSB0YWJsZUFjdGlvbnM6IEV2ZW50RW1pdHRlcjxBY3Rpb25zPiA9IG5ldyBFdmVudEVtaXR0ZXI8QWN0aW9ucz4oKTtcbiAgQElucHV0KCkgdGFibGVEYXRhO1xuICBASW5wdXQoJ2NvbHVtbnMnKSBzZXQgc2V0Q29sdW1ucyhjb2x1bW5zOiBOZ3hVaUNvbHVtbltdKSB7XG4gICAgaWYgKGNvbHVtbnMpIHtcbiAgICAgIHRoaXMudGFibGVDb2x1bW5zID0gY29sdW1ucy5tYXAoKGNvbCkgPT4ge1xuICAgICAgICBpZiAoIWNvbC5oYXNPd25Qcm9wZXJ0eSgnaGlkZScpKSB7XG4gICAgICAgICAgY29sLmhpZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIHRhYmxlT3B0aW9uczogTmd4VWlUYWJsZU9wdGlvbnM7XG5cbiAgQElucHV0KCdzZWFyY2gnKSBzZXQgc2V0U2VhcmNoKHN0cjogc3RyaW5nKSB7XG4gICAgaWYgKHN0cikge1xuICAgICAgdGhpcy50YWJsZURhdGFDb3B5ID0gIHRoaXMudGFibGVEYXRhLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlS2V5cy5maWx0ZXIoKGNvbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICB2YWxbY29sXS50b1N0cmluZygpLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXMoc3RyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KS5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFibGVEYXRhQ29weSA9ICB0aGlzLnRhYmxlRGF0YTtcbiAgICB9XG4gIH1cbiAgdGFibGVEYXRhQ29weSA9IFtdO1xuICB0YWJsZUNvbHVtbnM6IE5neFVpQ29sdW1uW10gPSBbXTtcbiAgc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICBzZWxlY3RlZEFsbCA9IHt9O1xuICB0YWJsZUtleXMgPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRhYmxlS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudGFibGVEYXRhWzBdKTtcbiAgICB0aGlzLnRhYmxlRGF0YUNvcHkgPSBbLi4udGhpcy50YWJsZURhdGFdO1xuICB9XG4gIGhhc1RlbXBsYXRlKGNvbHVtbikge1xuICAgIHJldHVybiAhIWNvbHVtbi50ZW1wbGF0ZSAmJiAoISFjb2x1bW4udGVtcGxhdGUuaHRtbFN0cmluZyB8fCAhIWNvbHVtbi50ZW1wbGF0ZS5uZ1RlbXBsYXRlKTtcbiAgfVxuICBvblJvd0NsaWNrZWQoZXZlbnQsIHJvdykge1xuICAgIHRoaXMudGFibGVBY3Rpb25zLmVtaXQoe1xuICAgICAgcGF5bG9hZDogcm93LFxuICAgICAgdHlwZTogJ1JPV19DTElDS0VEJ1xuICAgIH0pO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIG9uU2VsZWN0ZWRBbGxDaGVja2VkKGV2ZW50OiBBY3Rpb25zKSB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdDSEVDS0JPWF9TRUxFQ1RFRF9BTEwnOlxuICAgICAgICBpZiAoZXZlbnQucGF5bG9hZC5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy50YWJsZURhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGJsRGF0YSA9IHRoaXMudGFibGVEYXRhLm1hcCgodGFibGVEYXRhKSA9PiB7XG4gICAgICAgICAgdGFibGVEYXRhLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdGFibGVEYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPSB0YmxEYXRhLm1hcCgodGFibGVEYXRhKSA9PiB7XG4gICAgICAgICAgdGFibGVEYXRhLmNoZWNrZWQgPSBldmVudC5wYXlsb2FkLmNoZWNrZWQ7XG4gICAgICAgICAgcmV0dXJuIHRhYmxlRGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFibGVBY3Rpb25zLmVtaXQoe1xuICAgICAgICAgIHR5cGU6ICdDSEVDS0JPWF9TRUxFQ1RFRF9BTEwnLFxuICAgICAgICAgIHBheWxvYWQ6IHRoaXMudGFibGVEYXRhXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgb25PbmVJdGVtQ2hlY2tlZChldmVudDogQWN0aW9ucykge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnQ0hFQ0tCT1hfU0VMRUNURURfSVRFTVNfQ0hBTkdFRCc6XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gZXZlbnQucGF5bG9hZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYmxlQWN0aW9ucy5lbWl0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gIH1cbiAgY29sdW1uQWN0aW9ucyhldmVudDogQWN0aW9ucykge1xuICAgIGNvbnN0IHtwYXlsb2FkLCB0eXBlfSA9IGV2ZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnQ09MVU1OX1NPUlRfQ0hBTkdFRCc6XG4gICAgICAgIGlmIChwYXlsb2FkLnNvcnQgPT09ICdhc2MnKSB7XG4gICAgICAgICAgdGhpcy50YWJsZURhdGFDb3B5ID0gW10uY29uY2F0KHRoaXMudGFibGVEYXRhQ29weSB8fCBbXSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAtKGFbcGF5bG9hZC5maWVsZF0gPCBiW3BheWxvYWQuZmllbGRdKSB8fCArKGFbcGF5bG9hZC5maWVsZF0gIT09IGJbcGF5bG9hZC5maWVsZF0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRhYmxlRGF0YUNvcHkgPSBbXS5jb25jYXQodGhpcy50YWJsZURhdGFDb3B5IHx8IFtdKVxuICAgICAgICAgICAgLnNvcnQoKGIsIGEpID0+IC0oYVtwYXlsb2FkLmZpZWxkXSA8IGJbcGF5bG9hZC5maWVsZF0pIHx8ICsoYVtwYXlsb2FkLmZpZWxkXSAhPT0gYltwYXlsb2FkLmZpZWxkXSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnRhYmxlQWN0aW9ucy5lbWl0KGV2ZW50KVxuICB9XG59XG4iXX0=