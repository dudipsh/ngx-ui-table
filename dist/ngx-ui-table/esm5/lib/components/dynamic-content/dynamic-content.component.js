/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Compiler, Component, Input, NgModule, ViewChild, ViewContainerRef } from '@angular/core';
var DynamicContentComponent = /** @class */ (function () {
    function DynamicContentComponent(compiler) {
        this.compiler = compiler;
    }
    Object.defineProperty(DynamicContentComponent.prototype, "setTemplateString", {
        set: /**
         * @param {?} tplString
         * @return {?}
         */
        function (tplString) {
            var _this = this;
            if (tplString) {
                this.compiler.clearCache();
                /** @type {?} */
                var component = Component({
                    template: tplString,
                })(/** @class */ (function () {
                    function class_1() {
                    }
                    return class_1;
                }()));
                // Define the module using NgModule decorator.
                /** @type {?} */
                var module = NgModule({
                    declarations: [component]
                })(/** @class */ (function () {
                    function class_2() {
                    }
                    return class_2;
                }()));
                // Asynchronously (recommended) compile the module and the component.
                this.compiler.compileModuleAndAllComponentsAsync(module)
                    .then((/**
                 * @param {?} factories
                 * @return {?}
                 */
                function (factories) {
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
    ;
    /**
     * @return {?}
     */
    DynamicContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DynamicContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-content',
                    template: "<ng-container #container></ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DynamicContentComponent.ctorParameters = function () { return [
        { type: Compiler }
    ]; };
    DynamicContentComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
        setTemplateString: [{ type: Input, args: ['templateString',] }]
    };
    return DynamicContentComponent;
}());
export { DynamicContentComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2R5bmFtaWMtY29udGVudC9keW5hbWljLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVqSTtJQStCRSxpQ0FBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUF0QjFDLHNCQUE4QixzREFBaUI7Ozs7O1FBQS9DLFVBQWdELFNBQVM7WUFBekQsaUJBcUJDO1lBcEJDLElBQUksU0FBUyxFQUFFO2dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7O29CQUNyQixTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMxQixRQUFRLEVBQUUsU0FBUztpQkFDcEIsQ0FBQztvQkFBQztvQkFBTyxDQUFDO29CQUFELGNBQUM7Z0JBQUQsQ0FBQyxBQUFSLElBQVM7OztvQkFHTixNQUFNLEdBQUcsUUFBUSxDQUFDO29CQUN0QixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUJBQzFCLENBQUM7b0JBQUM7b0JBQU8sQ0FBQztvQkFBRCxjQUFDO2dCQUFELENBQUMsQUFBUixJQUFTO2dCQUVaLHFFQUFxRTtnQkFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxNQUFNLENBQUM7cUJBQ3JELElBQUk7Ozs7Z0JBQUMsVUFBQSxTQUFTOzs7d0JBRVAsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQzs7O3dCQUVsRCxZQUFZLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3ZFLENBQUMsRUFBQyxDQUFDO2FBQ047UUFDSCxDQUFDOzs7T0FBQTtJQUFBLENBQUM7Ozs7SUFHRiwwQ0FBUTs7O0lBQVI7SUFFQSxDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHNEQUErQztvQkFFL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFQZ0MsUUFBUTs7OzRCQVV0QyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDO29DQUMvQyxLQUFLLFNBQUMsZ0JBQWdCOztJQTRCekIsOEJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQS9CWSx1QkFBdUI7OztJQUVsQyw0Q0FBOEU7Ozs7O0lBdUJsRSwyQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21waWxlciwgQ29tcG9uZW50LCBJbnB1dCwgTmdNb2R1bGUsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHluYW1pYy1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtY29udGVudC5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcbiAgQElucHV0KCd0ZW1wbGF0ZVN0cmluZycpICBzZXQgc2V0VGVtcGxhdGVTdHJpbmcodHBsU3RyaW5nKSB7XG4gICAgaWYgKHRwbFN0cmluZykge1xuICAgICAgdGhpcy5jb21waWxlci5jbGVhckNhY2hlKCk7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBDb21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZTogdHBsU3RyaW5nLFxuICAgICAgfSkoY2xhc3Mge30pO1xuXG4gICAgICAvLyBEZWZpbmUgdGhlIG1vZHVsZSB1c2luZyBOZ01vZHVsZSBkZWNvcmF0b3IuXG4gICAgICBjb25zdCBtb2R1bGUgPSBOZ01vZHVsZSh7XG4gICAgICAgIGRlY2xhcmF0aW9uczogW2NvbXBvbmVudF1cbiAgICAgIH0pKGNsYXNzIHt9KTtcblxuICAgICAgLy8gQXN5bmNocm9ub3VzbHkgKHJlY29tbWVuZGVkKSBjb21waWxlIHRoZSBtb2R1bGUgYW5kIHRoZSBjb21wb25lbnQuXG4gICAgICB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMobW9kdWxlKVxuICAgICAgICAudGhlbihmYWN0b3JpZXMgPT4ge1xuICAgICAgICAgIC8vIEdldCB0aGUgY29tcG9uZW50IGZhY3RvcnkuXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IGZhY3Rvcmllcy5jb21wb25lbnRGYWN0b3JpZXNbMF07XG4gICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb21wb25lbnQgYW5kIGFkZCB0byB0aGUgdmlldy5cbiAgICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59XG4iXX0=