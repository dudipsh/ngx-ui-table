/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUiTableComponent } from './ngx-ui-table.component';
import { NgxUiTableColumnComponent } from './components/ngx-ui-table-column/ngx-ui-table-column.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicContentModule } from './components/dynamic-content/dynamic-content.module';
import { NgxUiColumnsPipe } from './pipes/ngx-ui-columns.pipe';
export class NgxUiTableModule {
}
NgxUiTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgxUiTableComponent,
                    NgxUiTableColumnComponent,
                    CheckboxComponent,
                    NgxUiColumnsPipe,
                ],
                imports: [
                    CommonModule,
                    VirtualScrollerModule,
                    DynamicContentModule
                ],
                exports: [
                    NgxUiTableComponent,
                    VirtualScrollerModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdWktdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnRUFBZ0UsQ0FBQztBQUN6RyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQW1CL0QsTUFBTSxPQUFPLGdCQUFnQjs7O1lBakI1QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIseUJBQXlCO29CQUN6QixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1oscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLHFCQUFxQjtpQkFDdEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ3hVaVRhYmxlQ29tcG9uZW50fSBmcm9tICcuL25neC11aS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hVaVRhYmxlQ29sdW1uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LXVpLXRhYmxlLWNvbHVtbi9uZ3gtdWktdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQge1ZpcnR1YWxTY3JvbGxlck1vZHVsZX0gZnJvbSAnbmd4LXZpcnR1YWwtc2Nyb2xsZXInO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7RHluYW1pY0NvbnRlbnRNb2R1bGV9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWNvbnRlbnQvZHluYW1pYy1jb250ZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hVaUNvbHVtbnNQaXBlIH0gZnJvbSAnLi9waXBlcy9uZ3gtdWktY29sdW1ucy5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4VWlUYWJsZUNvbXBvbmVudCxcbiAgICBOZ3hVaVRhYmxlQ29sdW1uQ29tcG9uZW50LFxuICAgIENoZWNrYm94Q29tcG9uZW50LFxuICAgIE5neFVpQ29sdW1uc1BpcGUsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVmlydHVhbFNjcm9sbGVyTW9kdWxlLFxuICAgIER5bmFtaWNDb250ZW50TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ3hVaVRhYmxlQ29tcG9uZW50LFxuICAgIFZpcnR1YWxTY3JvbGxlck1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFVpVGFibGVNb2R1bGUgeyB9XG4iXX0=