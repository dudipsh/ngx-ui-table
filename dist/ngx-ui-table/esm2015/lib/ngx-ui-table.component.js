/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxUiTableOptions } from './models/ngx-ui-table-options';
export class NgxUiTableComponent {
    constructor() {
        this.tableActions = new EventEmitter();
        this.tableDataCopy = [];
        this.tableColumns = [];
        this.selectedItems = [];
        this.selectedAll = {};
        this.tableKeys = [];
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    set setColumns(columns) {
        if (columns) {
            this.tableColumns = columns.map((/**
             * @param {?} col
             * @return {?}
             */
            (col) => {
                if (!col.hasOwnProperty('hide')) {
                    col.hide = false;
                }
                return col;
            }));
        }
    }
    /**
     * @param {?} str
     * @return {?}
     */
    set setSearch(str) {
        if (str) {
            this.tableDataCopy = this.tableData.filter((/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                return this.tableKeys.filter((/**
                 * @param {?} col
                 * @return {?}
                 */
                (col) => {
                    return val[col].toString().toLocaleLowerCase().includes(str.toString());
                })).length > 0;
            }));
        }
        else {
            this.tableDataCopy = this.tableData;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tableKeys = Object.keys(this.tableData[0]);
        this.tableDataCopy = [...this.tableData];
    }
    /**
     * @param {?} column
     * @return {?}
     */
    hasTemplate(column) {
        return !!column.template && (!!column.template.htmlString || !!column.template.ngTemplate);
    }
    /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    onRowClicked(event, row) {
        this.tableActions.emit({
            payload: row,
            type: 'ROW_CLICKED'
        });
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectedAllChecked(event) {
        switch (event.type) {
            case 'CHECKBOX_SELECTED_ALL':
                if (event.payload.checked) {
                    this.selectedItems = this.tableData;
                }
                else {
                    this.selectedItems = [];
                }
                /** @type {?} */
                const tblData = this.tableData.map((/**
                 * @param {?} tableData
                 * @return {?}
                 */
                (tableData) => {
                    tableData.checked = false;
                    return tableData;
                }));
                this.tableData = tblData.map((/**
                 * @param {?} tableData
                 * @return {?}
                 */
                (tableData) => {
                    tableData.checked = event.payload.checked;
                    return tableData;
                }));
                this.tableActions.emit({
                    type: 'CHECKBOX_SELECTED_ALL',
                    payload: this.tableData
                });
                break;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onOneItemChecked(event) {
        switch (event.type) {
            case 'CHECKBOX_SELECTED_ITEMS_CHANGED':
                if (this.selectedItems.length === 0) {
                    this.selectedItems = event.payload;
                }
                this.tableActions.emit(event);
                break;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    columnActions(event) {
        const { payload, type } = event;
        switch (type) {
            case 'COLUMN_SORT_CHANGED':
                if (payload.sort === 'asc') {
                    this.tableDataCopy = [].concat(this.tableDataCopy || [])
                        .sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    (a, b) => -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field])));
                }
                else {
                    this.tableDataCopy = [].concat(this.tableDataCopy || [])
                        .sort((/**
                     * @param {?} b
                     * @param {?} a
                     * @return {?}
                     */
                    (b, a) => -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field])));
                }
                break;
        }
        this.tableActions.emit(event);
    }
}
NgxUiTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-ui-table',
                template: "<div class=\"ngx-ui-table-container\" [ngStyle]=\"{'height': tableOptions?.tableHeight || '600px'}\">\n  <virtual-scroller #scroll [items]=\"tableDataCopy\">\n    <table  class=\"table\" [ngClass]=\"(tableOptions?.tableHover) ? 'table-hover': ''\">\n      <thead #header >\n      <tr class=\"table-header\">\n        <th  class=\"tbl-xs\">\n          <div class=\"checkbox-selected-all\">\n            <checkbox [selectedType]=\"'all'\"\n                          [item]=\"selectedAll\"\n                          (checkBoxAction)=\"onSelectedAllChecked($event)\">\n            </checkbox>\n          </div>\n        </th>\n        <th *ngFor=\"let column of  tableColumns | ngxUiColumnsPipe\" >\n          <div class=\"sortable\" *ngIf=\"!column.hide\">\n            <ngx-ui-table-column\n              (columnActions)=\"columnActions($event)\"\n              [tableData]=\"tableDataCopy\"\n              [column]=\"column\">\n            </ngx-ui-table-column>\n          </div>\n        </th>\n      </tr>\n      </thead>\n      <tbody  #container>\n      <tr *ngFor=\"let row of  scroll.viewPortItems\" class=\"ngx-ui-table-row\">\n        <td class=\"tbl-xs\">\n          <checkbox\n            [item]=\"row\"\n            [selectedItems]=\"selectedItems\"\n            (checkBoxAction)=\"onOneItemChecked($event)\">\n          </checkbox>\n        </td>\n        <td *ngFor=\"let column of tableColumns  | ngxUiColumnsPipe\" [ngClass]=\"(column.size) ? column.size : 'tbl-md'\"\n            (click)=\"onRowClicked($event, row)\">\n          <div *ngIf=\"!column.hide\">\n            <div *ngIf=\"hasTemplate(column); else defaultRow\">\n              <div *ngIf=\"column.template.htmlString; else ngTemplate\">\n                <dynamic-content [templateString]=\"column.template.htmlString(row, column)\">\n                </dynamic-content>\n              </div>\n              <ng-template  #ngTemplate\n                            [ngTemplateOutlet]=\"column.template.ngTemplate\"\n                            [ngTemplateOutletContext]=\"{row: row,column: column}\">\n              </ng-template>\n            </div>\n            <ng-template #defaultRow>\n              <div>{{ row[column.field]}}</div>\n            </ng-template>\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </virtual-scroller>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["virtual-scroller{height:inherit}.ngx-ui-table-container .table-header{box-shadow:1px 2px 6px 3px rgba(0,0,0,.1);height:40px;border-radius:2px;background-color:#fdfdfd}.ngx-ui-table-container .table{width:100%;max-width:100%;margin-bottom:20px;margin-top:-2px}.ngx-ui-table-container table{background-color:transparent}.ngx-ui-table-container .table>tbody>tr>td,.ngx-ui-table-container .table>tbody>tr>th,.ngx-ui-table-container .table>tfoot>tr>td,.ngx-ui-table-container .table>tfoot>tr>th,.ngx-ui-table-container .table>thead>tr>td,.ngx-ui-table-container .table>thead>tr>th{padding:2px;vertical-align:middle}.ngx-ui-table-container th{text-align:left}.ngx-ui-table-container td,.ngx-ui-table-container th{padding:0}.ngx-ui-table-container .table-hover>tbody>tr:hover{background-color:#f5f5f5;cursor:pointer}.ngx-ui-table-container .tbl-xs{width:.5%}.ngx-ui-table-container .tbl-sm{width:14%}.ngx-ui-table-container .tbl-md{width:18%}.ngx-ui-table-container .tbl-lg{width:25%}"]
            }] }
];
/** @nocollapse */
NgxUiTableComponent.ctorParameters = () => [];
NgxUiTableComponent.propDecorators = {
    tableActions: [{ type: Output }],
    tableData: [{ type: Input }],
    setColumns: [{ type: Input, args: ['columns',] }],
    tableOptions: [{ type: Input }],
    setSearch: [{ type: Input, args: ['search',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdWktdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3RHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBUWhFLE1BQU0sT0FBTyxtQkFBbUI7SUErQjlCO1FBOUJVLGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUF5QjVFLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixjQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ0MsQ0FBQzs7Ozs7SUE1QmpCLElBQXNCLFVBQVUsQ0FBQyxPQUFzQjtRQUNyRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDL0IsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7aUJBQ2xCO2dCQUNELE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBR0QsSUFBcUIsU0FBUyxDQUFDLEdBQVc7UUFDeEMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsYUFBYSxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JB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OzJCQUVFLE1BQU07d0JBQ04sS0FBSzt5QkFDTCxLQUFLLFNBQUMsU0FBUzsyQkFVZixLQUFLO3dCQUVMLEtBQUssU0FBQyxRQUFROzs7O0lBZGYsMkNBQTRFOztJQUM1RSx3Q0FBbUI7O0lBV25CLDJDQUF5Qzs7SUFhekMsNENBQW1COztJQUNuQiwyQ0FBaUM7O0lBQ2pDLDRDQUFtQjs7SUFDbkIsMENBQWlCOztJQUNqQix3Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ3hVaUNvbHVtbn0gZnJvbSAnLi9tb2RlbHMvbmd4LXVpLWNvbHVtbic7XG5pbXBvcnQge0FjdGlvbnN9IGZyb20gJy4vbW9kZWxzL2FjdGlvbnMnO1xuaW1wb3J0IHtOZ3hVaVRhYmxlT3B0aW9uc30gZnJvbSAnLi9tb2RlbHMvbmd4LXVpLXRhYmxlLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtdWktdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LXVpLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LXVpLXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neFVpVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgdGFibGVBY3Rpb25zOiBFdmVudEVtaXR0ZXI8QWN0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyPEFjdGlvbnM+KCk7XG4gIEBJbnB1dCgpIHRhYmxlRGF0YTtcbiAgQElucHV0KCdjb2x1bW5zJykgc2V0IHNldENvbHVtbnMoY29sdW1uczogTmd4VWlDb2x1bW5bXSkge1xuICAgIGlmIChjb2x1bW5zKSB7XG4gICAgICB0aGlzLnRhYmxlQ29sdW1ucyA9IGNvbHVtbnMubWFwKChjb2wpID0+IHtcbiAgICAgICAgaWYgKCFjb2wuaGFzT3duUHJvcGVydHkoJ2hpZGUnKSkge1xuICAgICAgICAgIGNvbC5oaWRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0YWJsZU9wdGlvbnM6IE5neFVpVGFibGVPcHRpb25zO1xuXG4gIEBJbnB1dCgnc2VhcmNoJykgc2V0IHNldFNlYXJjaChzdHI6IHN0cmluZykge1xuICAgIGlmIChzdHIpIHtcbiAgICAgIHRoaXMudGFibGVEYXRhQ29weSA9ICB0aGlzLnRhYmxlRGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZUtleXMuZmlsdGVyKChjb2wpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAgdmFsW2NvbF0udG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKHN0ci50b1N0cmluZygpKTtcbiAgICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYmxlRGF0YUNvcHkgPSAgdGhpcy50YWJsZURhdGE7XG4gICAgfVxuICB9XG4gIHRhYmxlRGF0YUNvcHkgPSBbXTtcbiAgdGFibGVDb2x1bW5zOiBOZ3hVaUNvbHVtbltdID0gW107XG4gIHNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgc2VsZWN0ZWRBbGwgPSB7fTtcbiAgdGFibGVLZXlzID0gW107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YWJsZUtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnRhYmxlRGF0YVswXSk7XG4gICAgdGhpcy50YWJsZURhdGFDb3B5ID0gWy4uLnRoaXMudGFibGVEYXRhXTtcbiAgfVxuICBoYXNUZW1wbGF0ZShjb2x1bW4pIHtcbiAgICByZXR1cm4gISFjb2x1bW4udGVtcGxhdGUgJiYgKCEhY29sdW1uLnRlbXBsYXRlLmh0bWxTdHJpbmcgfHwgISFjb2x1bW4udGVtcGxhdGUubmdUZW1wbGF0ZSk7XG4gIH1cbiAgb25Sb3dDbGlja2VkKGV2ZW50LCByb3cpIHtcbiAgICB0aGlzLnRhYmxlQWN0aW9ucy5lbWl0KHtcbiAgICAgIHBheWxvYWQ6IHJvdyxcbiAgICAgIHR5cGU6ICdST1dfQ0xJQ0tFRCdcbiAgICB9KTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBvblNlbGVjdGVkQWxsQ2hlY2tlZChldmVudDogQWN0aW9ucykge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnQ0hFQ0tCT1hfU0VMRUNURURfQUxMJzpcbiAgICAgICAgaWYgKGV2ZW50LnBheWxvYWQuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMudGFibGVEYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRibERhdGEgPSB0aGlzLnRhYmxlRGF0YS5tYXAoKHRhYmxlRGF0YSkgPT4ge1xuICAgICAgICAgIHRhYmxlRGF0YS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRhYmxlRGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFibGVEYXRhID0gdGJsRGF0YS5tYXAoKHRhYmxlRGF0YSkgPT4ge1xuICAgICAgICAgIHRhYmxlRGF0YS5jaGVja2VkID0gZXZlbnQucGF5bG9hZC5jaGVja2VkO1xuICAgICAgICAgIHJldHVybiB0YWJsZURhdGE7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhYmxlQWN0aW9ucy5lbWl0KHtcbiAgICAgICAgICB0eXBlOiAnQ0hFQ0tCT1hfU0VMRUNURURfQUxMJyxcbiAgICAgICAgICBwYXlsb2FkOiB0aGlzLnRhYmxlRGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIG9uT25lSXRlbUNoZWNrZWQoZXZlbnQ6IEFjdGlvbnMpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ0NIRUNLQk9YX1NFTEVDVEVEX0lURU1TX0NIQU5HRUQnOlxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IGV2ZW50LnBheWxvYWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YWJsZUFjdGlvbnMuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICB9XG4gIGNvbHVtbkFjdGlvbnMoZXZlbnQ6IEFjdGlvbnMpIHtcbiAgICBjb25zdCB7cGF5bG9hZCwgdHlwZX0gPSBldmVudDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ0NPTFVNTl9TT1JUX0NIQU5HRUQnOlxuICAgICAgICBpZiAocGF5bG9hZC5zb3J0ID09PSAnYXNjJykge1xuICAgICAgICAgIHRoaXMudGFibGVEYXRhQ29weSA9IFtdLmNvbmNhdCh0aGlzLnRhYmxlRGF0YUNvcHkgfHwgW10pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gLShhW3BheWxvYWQuZmllbGRdIDwgYltwYXlsb2FkLmZpZWxkXSkgfHwgKyhhW3BheWxvYWQuZmllbGRdICE9PSBiW3BheWxvYWQuZmllbGRdKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50YWJsZURhdGFDb3B5ID0gW10uY29uY2F0KHRoaXMudGFibGVEYXRhQ29weSB8fCBbXSlcbiAgICAgICAgICAgIC5zb3J0KChiLCBhKSA9PiAtKGFbcGF5bG9hZC5maWVsZF0gPCBiW3BheWxvYWQuZmllbGRdKSB8fCArKGFbcGF5bG9hZC5maWVsZF0gIT09IGJbcGF5bG9hZC5maWVsZF0pKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy50YWJsZUFjdGlvbnMuZW1pdChldmVudClcbiAgfVxufVxuIl19