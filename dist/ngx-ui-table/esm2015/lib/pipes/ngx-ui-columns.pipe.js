/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class NgxUiColumnsPipe {
    /**
     * @param {?} items
     * @return {?}
     */
    transform(items) {
        return items.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.hasOwnProperty('hide')) {
                return !!!item.hide;
            }
            else {
                return item;
            }
        }));
    }
}
NgxUiColumnsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'ngxUiColumnsPipe'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWNvbHVtbnMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9uZ3gtdWktY29sdW1ucy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUUzQixTQUFTLENBQUMsS0FBWTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMzQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFiRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGtCQUFrQjthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbmd4VWlDb2x1bW5zUGlwZSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4VWlDb2x1bW5zUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShpdGVtczogYW55W10pOiBhbnkge1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdoaWRlJykpIHtcbiAgICAgICAgcmV0dXJuICEhIWl0ZW0uaGlkZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==