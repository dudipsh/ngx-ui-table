/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxUiColumn } from '../../models/ngx-ui-column';
var NgxUiTableColumnComponent = /** @class */ (function () {
    function NgxUiTableColumnComponent() {
        this.columnActions = new EventEmitter();
    }
    Object.defineProperty(NgxUiTableColumnComponent.prototype, "setColumn", {
        set: /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column) {
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
        { type: Component, args: [{
                    selector: 'ngx-ui-table-column',
                    template: "<div class=\"mdx-table-column-container {{col.className}}\">\n  <div class=\"sorting\" (click)=\"onSortChanged()\" *ngIf=\"!col.notSorted\">\n    <div class=\"{{col.sort}}\"></div>\n    <div class=\"column-name\" >\n      {{col.name}}\n    </div>\n  </div>\n  <div class=\"column-name\" *ngIf=\"col.notSorted\">\n    {{col.name}}\n  </div>\n  <!--<div *ngIf=\"filter\" class=\"filter\">-->\n    <!--<app-ui-dropdown-icon-->\n      <!--[className]=\"'table-filters'\"-->\n      <!--[items]=\"filter\"-->\n      <!--[showFilterIcon]=\"true\"-->\n      <!--[rowName]=\"'name'\">-->\n    <!--</app-ui-dropdown-icon>-->\n  <!--</div>-->\n\n</div>\n",
                    styles: ["virtual-scroller{width:100%;height:95vh}.sorting{display:flex}.sorting .asc,.sorting .desc{width:18px}.sorting .asc:after{content:' \\25B2';color:#d3d3d3}.sorting .desc:after{content:' \\25BC';color:#d3d3d3}"]
                }] }
    ];
    /** @nocollapse */
    NgxUiTableColumnComponent.ctorParameters = function () { return []; };
    NgxUiTableColumnComponent.propDecorators = {
        columnActions: [{ type: Output }],
        setColumn: [{ type: Input, args: ['column',] }],
        tableData: [{ type: Input }]
    };
    return NgxUiTableColumnComponent;
}());
export { NgxUiTableColumnComponent };
if (false) {
    /** @type {?} */
    NgxUiTableColumnComponent.prototype.col;
    /** @type {?} */
    NgxUiTableColumnComponent.prototype.columnActions;
    /** @type {?} */
    NgxUiTableColumnComponent.prototype.tableData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdWktdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uZ3gtdWktdGFibGUtY29sdW1uL25neC11aS10YWJsZS1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RDtJQTRCRTtRQXJCVSxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBcUI3RCxDQUFDO0lBbkJqQixzQkFBcUIsZ0RBQVM7Ozs7O1FBQTlCLFVBQStCLE1BQW1CO1lBQ2hELElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUNsQixJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7b0JBQ3ZCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztpQkFDdkI7cUJBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO3dCQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2pCLElBQUksRUFBRSxxQkFBcUI7cUJBQzVCLENBQUMsQ0FBQztpQkFDSjthQUVGO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFLRCw0Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBQ0QsaURBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDakIsSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLCtvQkFBbUQ7O2lCQUVwRDs7Ozs7Z0NBR0UsTUFBTTs0QkFFTixLQUFLLFNBQUMsUUFBUTs0QkFpQmQsS0FBSzs7SUFjUixnQ0FBQztDQUFBLEFBeENELElBd0NDO1NBbkNZLHlCQUF5Qjs7O0lBQ3BDLHdDQUFJOztJQUNKLGtEQUE2RTs7SUFtQjdFLDhDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbnN9IGZyb20gJy4uLy4uL21vZGVscy9hY3Rpb25zJztcbmltcG9ydCB7Tmd4VWlDb2x1bW59IGZyb20gJy4uLy4uL21vZGVscy9uZ3gtdWktY29sdW1uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXVpLXRhYmxlLWNvbHVtbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtdWktdGFibGUtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LXVpLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neFVpVGFibGVDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb2w7XG4gIEBPdXRwdXQoKSBjb2x1bW5BY3Rpb25zOiBFdmVudEVtaXR0ZXI8QWN0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyPEFjdGlvbnM+KCk7XG5cbiAgQElucHV0KCdjb2x1bW4nKSBzZXQgc2V0Q29sdW1uKGNvbHVtbjogTmd4VWlDb2x1bW4pIHtcbiAgICBpZiAoY29sdW1uKSB7XG4gICAgICB0aGlzLmNvbCA9IGNvbHVtbjtcbiAgICAgIGlmIChjb2x1bW4uaXNIYXZlRmlsdGVyKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBmaWx0ZXIgLy9cbiAgICAgIH1cbiAgICAgIGlmICghY29sdW1uLmhhc093blByb3BlcnR5KCdzb3J0JykpIHtcbiAgICAgICAgdGhpcy5jb2wuc29ydCA9ICdhc2MnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbC5zb3J0ID09PSAnZGVzYycpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5BY3Rpb25zLmVtaXQoe1xuICAgICAgICAgIHBheWxvYWQ6IHRoaXMuY29sLFxuICAgICAgICAgIHR5cGU6ICdDT0xVTU5fU09SVF9DSEFOR0VEJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0YWJsZURhdGE7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBvblNvcnRDaGFuZ2VkKCkge1xuICAgIHRoaXMuY29sLnNvcnQgPSB0aGlzLmNvbC5zb3J0ID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xuICAgIHRoaXMuY29sdW1uQWN0aW9ucy5lbWl0KHtcbiAgICAgIHBheWxvYWQ6IHRoaXMuY29sLFxuICAgICAgdHlwZTogJ0NPTFVNTl9TT1JUX0NIQU5HRUQnXG4gICAgfSk7XG4gIH1cblxufVxuIl19