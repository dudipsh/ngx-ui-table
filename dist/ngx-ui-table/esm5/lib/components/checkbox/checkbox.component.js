/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.checkBoxAction = new EventEmitter();
        this.label = '';
    }
    Object.defineProperty(CheckboxComponent.prototype, "setItem", {
        set: /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
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
        { type: Component, args: [{
                    selector: 'checkbox',
                    template: "<label class=\"lbl\">\n  <input type=\"checkbox\"\n         [name]=\"label\"\n         [checked]=\"_item?.checked\"\n         (change)=\"onCheckboxChanged($event)\"/>\n</label>\n",
                    styles: ["input[type=checkbox]{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background:#d3d3d3;height:16px;width:16px;border:1px solid #fff}input[type=checkbox]:checked{background:#2aa1c0}input[type=checkbox]:hover{-webkit-filter:brightness(90%);filter:brightness(90%)}input[type=checkbox]:disabled{background:#e6e6e6;opacity:.6;pointer-events:none}input[type=checkbox]:after{content:'';position:relative;left:36%;top:11%;width:21%;height:54%;border:solid #fff;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);display:none}input[type=checkbox]:checked:after{display:block}input[type=checkbox]:disabled:after{border-color:#7b7b7b}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        checkBoxAction: [{ type: Output }],
        selectedType: [{ type: Input }],
        selectedItems: [{ type: Input }],
        label: [{ type: Input }],
        setItem: [{ type: Input, args: ['item',] }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype._item;
    /** @type {?} */
    CheckboxComponent.prototype.checkBoxAction;
    /** @type {?} */
    CheckboxComponent.prototype.selectedType;
    /** @type {?} */
    CheckboxComponent.prototype.selectedItems;
    /** @type {?} */
    CheckboxComponent.prototype.label;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXVpLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzdFO0lBcUJFO1FBZFUsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUtyRSxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBU0osQ0FBQztJQVJqQixzQkFBbUIsc0NBQU87Ozs7O1FBQTFCLFVBQTJCLElBQUk7WUFDN0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2lCQUM1QjthQUNGO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQUs7UUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDdkIsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87aUJBQzlCO2dCQUNELElBQUksRUFBRSx1QkFBdUI7YUFDOUIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQzNCLElBQUksRUFBRSxpQ0FBaUM7YUFDeEMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFDRCwyQ0FBZTs7OztJQUFmLFVBQWdCLElBQUk7O1lBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUNELG9DQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDhMQUF3Qzs7aUJBRXpDOzs7OztpQ0FHRSxNQUFNOytCQUdOLEtBQUs7Z0NBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUssU0FBQyxNQUFNOztJQXFDZix3QkFBQztDQUFBLEFBbERELElBa0RDO1NBN0NZLGlCQUFpQjs7O0lBQzVCLGtDQUFNOztJQUNOLDJDQUE4RTs7SUFHOUUseUNBQTZCOztJQUM3QiwwQ0FBdUI7O0lBQ3ZCLGtDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbnN9IGZyb20gJy4uLy4uL21vZGVscy9hY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX2l0ZW07XG4gIEBPdXRwdXQoKSBjaGVja0JveEFjdGlvbjogRXZlbnRFbWl0dGVyPEFjdGlvbnM+ID0gbmV3IEV2ZW50RW1pdHRlcjxBY3Rpb25zPigpO1xuXG5cbiAgQElucHV0KCkgc2VsZWN0ZWRUeXBlOiAnYWxsJztcbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtcztcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCdpdGVtJykgc2V0IHNldEl0ZW0oaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLl9pdGVtID0gaXRlbTtcbiAgICAgIGlmICghdGhpcy5faXRlbS5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpKSB7XG4gICAgICAgIHRoaXMuX2l0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBvbkNoZWNrYm94Q2hhbmdlZChldmVudCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVHlwZSA9PT0gJ2FsbCcpIHtcbiAgICAgIHRoaXMuY2hlY2tCb3hBY3Rpb24uZW1pdCh7XG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBjaGVja2VkOiBldmVudC50YXJnZXQuY2hlY2tlZFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnQ0hFQ0tCT1hfU0VMRUNURURfQUxMJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkT3JSZW1vdmVJdGVtKHRoaXMuX2l0ZW0pO1xuICAgICAgdGhpcy5jaGVja0JveEFjdGlvbi5lbWl0KHtcbiAgICAgICAgcGF5bG9hZDogdGhpcy5zZWxlY3RlZEl0ZW1zLFxuICAgICAgICB0eXBlOiAnQ0hFQ0tCT1hfU0VMRUNURURfSVRFTVNfQ0hBTkdFRCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBhZGRPclJlbW92ZUl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=