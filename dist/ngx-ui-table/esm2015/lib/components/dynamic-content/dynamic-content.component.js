/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Compiler, Component, Input, NgModule, ViewChild, ViewContainerRef } from '@angular/core';
export class DynamicContentComponent {
    /**
     * @param {?} compiler
     */
    constructor(compiler) {
        this.compiler = compiler;
    }
    /**
     * @param {?} tplString
     * @return {?}
     */
    set setTemplateString(tplString) {
        if (tplString) {
            this.compiler.clearCache();
            /** @type {?} */
            const component = Component({
                template: tplString,
            })(class {
            });
            // Define the module using NgModule decorator.
            /** @type {?} */
            const module = NgModule({
                declarations: [component]
            })(class {
            });
            // Asynchronously (recommended) compile the module and the component.
            this.compiler.compileModuleAndAllComponentsAsync(module)
                .then((/**
             * @param {?} factories
             * @return {?}
             */
            factories => {
                // Get the component factory.
                /** @type {?} */
                const componentFactory = factories.componentFactories[0];
                // Create the component and add to the view.
                /** @type {?} */
                const componentRef = this.container.createComponent(componentFactory);
            }));
        }
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DynamicContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-content',
                template: "<ng-container #container></ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
DynamicContentComponent.ctorParameters = () => [
    { type: Compiler }
];
DynamicContentComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
    setTemplateString: [{ type: Input, args: ['templateString',] }]
};
if (false) {
    /** @type {?} */
    DynamicContentComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    DynamicContentComponent.prototype.compiler;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2R5bmFtaWMtY29udGVudC9keW5hbWljLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVFqSSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBeUJsQyxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7SUF0QjFDLElBQThCLGlCQUFpQixDQUFDLFNBQVM7UUFDdkQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDOztrQkFDckIsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDMUIsUUFBUSxFQUFFLFNBQVM7YUFDcEIsQ0FBQyxDQUFDO2FBQVEsQ0FBQzs7O2tCQUdOLE1BQU0sR0FBRyxRQUFRLENBQUM7Z0JBQ3RCLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQzthQUMxQixDQUFDLENBQUM7YUFBUSxDQUFDO1lBRVoscUVBQXFFO1lBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsa0NBQWtDLENBQUMsTUFBTSxDQUFDO2lCQUNyRCxJQUFJOzs7O1lBQUMsU0FBUyxDQUFDLEVBQUU7OztzQkFFVixnQkFBZ0IsR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzs7c0JBRWxELFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN2RSxDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQztJQUFBLENBQUM7Ozs7SUFHRixRQUFRO0lBRVIsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzREFBK0M7Z0JBRS9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQVBnQyxRQUFROzs7d0JBVXRDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7Z0NBQy9DLEtBQUssU0FBQyxnQkFBZ0I7Ozs7SUFEdkIsNENBQThFOzs7OztJQXVCbEUsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcGlsZXIsIENvbXBvbmVudCwgSW5wdXQsIE5nTW9kdWxlLCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5bmFtaWMtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLWNvbnRlbnQuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIEBJbnB1dCgndGVtcGxhdGVTdHJpbmcnKSAgc2V0IHNldFRlbXBsYXRlU3RyaW5nKHRwbFN0cmluZykge1xuICAgIGlmICh0cGxTdHJpbmcpIHtcbiAgICAgIHRoaXMuY29tcGlsZXIuY2xlYXJDYWNoZSgpO1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGU6IHRwbFN0cmluZyxcbiAgICAgIH0pKGNsYXNzIHt9KTtcblxuICAgICAgLy8gRGVmaW5lIHRoZSBtb2R1bGUgdXNpbmcgTmdNb2R1bGUgZGVjb3JhdG9yLlxuICAgICAgY29uc3QgbW9kdWxlID0gTmdNb2R1bGUoe1xuICAgICAgICBkZWNsYXJhdGlvbnM6IFtjb21wb25lbnRdXG4gICAgICB9KShjbGFzcyB7fSk7XG5cbiAgICAgIC8vIEFzeW5jaHJvbm91c2x5IChyZWNvbW1lbmRlZCkgY29tcGlsZSB0aGUgbW9kdWxlIGFuZCB0aGUgY29tcG9uZW50LlxuICAgICAgdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jKG1vZHVsZSlcbiAgICAgICAgLnRoZW4oZmFjdG9yaWVzID0+IHtcbiAgICAgICAgICAvLyBHZXQgdGhlIGNvbXBvbmVudCBmYWN0b3J5LlxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSBmYWN0b3JpZXMuY29tcG9uZW50RmFjdG9yaWVzWzBdO1xuICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29tcG9uZW50IGFuZCBhZGQgdG8gdGhlIHZpZXcuXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGlsZXI6IENvbXBpbGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19