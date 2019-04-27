/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxUiColumn } from '../../models/ngx-ui-column';
export class NgxUiTableColumnComponent {
    constructor() {
        this.columnActions = new EventEmitter();
    }
    /**
     * @param {?} column
     * @return {?}
     */
    set setColumn(column) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onSortChanged() {
        this.col.sort = this.col.sort === 'asc' ? 'desc' : 'asc';
        this.columnActions.emit({
            payload: this.col,
            type: 'COLUMN_SORT_CHANGED'
        });
    }
}
NgxUiTableColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-ui-table-column',
                template: "<div class=\"mdx-table-column-container {{col.className}}\">\n  <div class=\"sorting\" (click)=\"onSortChanged()\" *ngIf=\"!col.notSorted\">\n    <div class=\"{{col.sort}}\"></div>\n    <div class=\"column-name\" >\n      {{col.name}}\n    </div>\n  </div>\n  <div class=\"column-name\" *ngIf=\"col.notSorted\">\n    {{col.name}}\n  </div>\n  <!--<div *ngIf=\"filter\" class=\"filter\">-->\n    <!--<app-ui-dropdown-icon-->\n      <!--[className]=\"'table-filters'\"-->\n      <!--[items]=\"filter\"-->\n      <!--[showFilterIcon]=\"true\"-->\n      <!--[rowName]=\"'name'\">-->\n    <!--</app-ui-dropdown-icon>-->\n  <!--</div>-->\n\n</div>\n",
                styles: ["virtual-scroller{width:100%;height:95vh}.sorting{display:flex}.sorting .asc,.sorting .desc{width:18px}.sorting .asc:after{content:' \\25B2';color:#d3d3d3}.sorting .desc:after{content:' \\25BC';color:#d3d3d3}"]
            }] }
];
/** @nocollapse */
NgxUiTableColumnComponent.ctorParameters = () => [];
NgxUiTableColumnComponent.propDecorators = {
    columnActions: [{ type: Output }],
    setColumn: [{ type: Input, args: ['column',] }],
    tableData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxUiTableColumnComponent.prototype.col;
    /** @type {?} */
    NgxUiTableColumnComponent.prototype.columnActions;
    /** @type {?} */
    NgxUiTableColumnComponent.prototype.tableData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdWktdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uZ3gtdWktdGFibGUtY29sdW1uL25neC11aS10YWJsZS1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU92RCxNQUFNLE9BQU8seUJBQXlCO0lBdUJwQztRQXJCVSxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBcUI3RCxDQUFDOzs7OztJQW5CakIsSUFBcUIsU0FBUyxDQUFDLE1BQW1CO1FBQ2hELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDbEIsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO2dCQUN2QixtQkFBbUI7YUFDcEI7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztvQkFDdEIsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNqQixJQUFJLEVBQUUscUJBQXFCO2lCQUM1QixDQUFDLENBQUM7YUFDSjtTQUVGO0lBQ0gsQ0FBQzs7OztJQUtELFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2pCLElBQUksRUFBRSxxQkFBcUI7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiwrb0JBQW1EOzthQUVwRDs7Ozs7NEJBR0UsTUFBTTt3QkFFTixLQUFLLFNBQUMsUUFBUTt3QkFpQmQsS0FBSzs7OztJQXBCTix3Q0FBSTs7SUFDSixrREFBNkU7O0lBbUI3RSw4Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb25zfSBmcm9tICcuLi8uLi9tb2RlbHMvYWN0aW9ucyc7XG5pbXBvcnQge05neFVpQ29sdW1ufSBmcm9tICcuLi8uLi9tb2RlbHMvbmd4LXVpLWNvbHVtbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC11aS10YWJsZS1jb2x1bW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LXVpLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC11aS10YWJsZS1jb2x1bW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hVaVRhYmxlQ29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29sO1xuICBAT3V0cHV0KCkgY29sdW1uQWN0aW9uczogRXZlbnRFbWl0dGVyPEFjdGlvbnM+ID0gbmV3IEV2ZW50RW1pdHRlcjxBY3Rpb25zPigpO1xuXG4gIEBJbnB1dCgnY29sdW1uJykgc2V0IHNldENvbHVtbihjb2x1bW46IE5neFVpQ29sdW1uKSB7XG4gICAgaWYgKGNvbHVtbikge1xuICAgICAgdGhpcy5jb2wgPSBjb2x1bW47XG4gICAgICBpZiAoY29sdW1uLmlzSGF2ZUZpbHRlcikge1xuICAgICAgICAvLyBjcmVhdGUgZmlsdGVyIC8vXG4gICAgICB9XG4gICAgICBpZiAoIWNvbHVtbi5oYXNPd25Qcm9wZXJ0eSgnc29ydCcpKSB7XG4gICAgICAgIHRoaXMuY29sLnNvcnQgPSAnYXNjJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2wuc29ydCA9PT0gJ2Rlc2MnKSB7XG4gICAgICAgIHRoaXMuY29sdW1uQWN0aW9ucy5lbWl0KHtcbiAgICAgICAgICBwYXlsb2FkOiB0aGlzLmNvbCxcbiAgICAgICAgICB0eXBlOiAnQ09MVU1OX1NPUlRfQ0hBTkdFRCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbiAgQElucHV0KCkgdGFibGVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgb25Tb3J0Q2hhbmdlZCgpIHtcbiAgICB0aGlzLmNvbC5zb3J0ID0gdGhpcy5jb2wuc29ydCA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcbiAgICB0aGlzLmNvbHVtbkFjdGlvbnMuZW1pdCh7XG4gICAgICBwYXlsb2FkOiB0aGlzLmNvbCxcbiAgICAgIHR5cGU6ICdDT0xVTU5fU09SVF9DSEFOR0VEJ1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==