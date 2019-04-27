/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class CheckboxComponent {
    constructor() {
        this.checkBoxAction = new EventEmitter();
        this.label = '';
    }
    /**
     * @param {?} item
     * @return {?}
     */
    set setItem(item) {
        if (item) {
            this._item = item;
            if (!this._item.hasOwnProperty('checked')) {
                this._item.checked = false;
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCheckboxChanged(event) {
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addOrRemoveItem(item) {
        /** @type {?} */
        const index = this.selectedItems.indexOf(item);
        if (index === -1) {
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.splice(index, 1);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox',
                template: "<label class=\"lbl\">\n  <input type=\"checkbox\"\n         [name]=\"label\"\n         [checked]=\"_item?.checked\"\n         (change)=\"onCheckboxChanged($event)\"/>\n</label>\n",
                styles: ["input[type=checkbox]{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background:#d3d3d3;height:16px;width:16px;border:1px solid #fff}input[type=checkbox]:checked{background:#2aa1c0}input[type=checkbox]:hover{-webkit-filter:brightness(90%);filter:brightness(90%)}input[type=checkbox]:disabled{background:#e6e6e6;opacity:.6;pointer-events:none}input[type=checkbox]:after{content:'';position:relative;left:36%;top:11%;width:21%;height:54%;border:solid #fff;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);display:none}input[type=checkbox]:checked:after{display:block}input[type=checkbox]:disabled:after{border-color:#7b7b7b}"]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    checkBoxAction: [{ type: Output }],
    selectedType: [{ type: Input }],
    selectedItems: [{ type: Input }],
    label: [{ type: Input }],
    setItem: [{ type: Input, args: ['item',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXVpLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBUTdFLE1BQU0sT0FBTyxpQkFBaUI7SUFnQjVCO1FBZFUsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUtyRSxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBU0osQ0FBQzs7Ozs7SUFSakIsSUFBbUIsT0FBTyxDQUFDLElBQUk7UUFDN0IsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO2lCQUM5QjtnQkFDRCxJQUFJLEVBQUUsdUJBQXVCO2FBQzlCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMzQixJQUFJLEVBQUUsaUNBQWlDO2FBQ3hDLENBQUMsQ0FBQztTQUNKO1FBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLElBQUk7O2NBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUNELFFBQVE7SUFDUixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw4TEFBd0M7O2FBRXpDOzs7Ozs2QkFHRSxNQUFNOzJCQUdOLEtBQUs7NEJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUssU0FBQyxNQUFNOzs7O0lBUGIsa0NBQU07O0lBQ04sMkNBQThFOztJQUc5RSx5Q0FBNkI7O0lBQzdCLDBDQUF1Qjs7SUFDdkIsa0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uc30gZnJvbSAnLi4vLi4vbW9kZWxzL2FjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfaXRlbTtcbiAgQE91dHB1dCgpIGNoZWNrQm94QWN0aW9uOiBFdmVudEVtaXR0ZXI8QWN0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyPEFjdGlvbnM+KCk7XG5cblxuICBASW5wdXQoKSBzZWxlY3RlZFR5cGU6ICdhbGwnO1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1zO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoJ2l0ZW0nKSBzZXQgc2V0SXRlbShpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgICAgaWYgKCF0aGlzLl9pdGVtLmhhc093blByb3BlcnR5KCdjaGVja2VkJykpIHtcbiAgICAgICAgdGhpcy5faXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG9uQ2hlY2tib3hDaGFuZ2VkKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUeXBlID09PSAnYWxsJykge1xuICAgICAgdGhpcy5jaGVja0JveEFjdGlvbi5lbWl0KHtcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGNoZWNrZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdDSEVDS0JPWF9TRUxFQ1RFRF9BTEwnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRPclJlbW92ZUl0ZW0odGhpcy5faXRlbSk7XG4gICAgICB0aGlzLmNoZWNrQm94QWN0aW9uLmVtaXQoe1xuICAgICAgICBwYXlsb2FkOiB0aGlzLnNlbGVjdGVkSXRlbXMsXG4gICAgICAgIHR5cGU6ICdDSEVDS0JPWF9TRUxFQ1RFRF9JVEVNU19DSEFOR0VEJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGFkZE9yUmVtb3ZlSXRlbShpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==