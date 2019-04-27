/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from './dynamic-content.component';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
/**
 * @param {?} compilerFactory
 * @return {?}
 */
export function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
var ɵ0 = {};
var DynamicContentModule = /** @class */ (function () {
    function DynamicContentModule() {
    }
    DynamicContentModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DynamicContentComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        DynamicContentComponent
                    ],
                    providers: [
                        // Compiler is not included in AOT-compiled bundle.
                        // Must explicitly provide compiler to be able to compile templates at runtime.
                        { provide: COMPILER_OPTIONS, useValue: ɵ0, multi: true },
                        { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
                        { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
                    ],
                },] }
    ];
    return DynamicContentModule;
}());
export { DynamicContentModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb250ZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2R5bmFtaWMtY29udGVudC9keW5hbWljLWNvbnRlbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQUVyRSxNQUFNLFVBQVUsY0FBYyxDQUFDLGVBQWdDO0lBQzdELE9BQU8sZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFDLENBQUM7U0FleUMsRUFBRTtBQWI1QztJQUFBO0lBa0JvQyxDQUFDOztnQkFsQnBDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3FCQUN4QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsbURBQW1EO3dCQUNuRCwrRUFBK0U7d0JBQy9FLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7d0JBQ3RELEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQzt3QkFDbEYsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUM7cUJBQUs7aUJBRWhGOztJQUNtQywyQkFBQztDQUFBLEFBbEJyQyxJQWtCcUM7U0FBeEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21waWxlciwgQ09NUElMRVJfT1BUSU9OUywgQ29tcGlsZXJGYWN0b3J5LCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHluYW1pY0NvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtKaXRDb21waWxlckZhY3Rvcnl9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21waWxlcihjb21waWxlckZhY3Rvcnk6IENvbXBpbGVyRmFjdG9yeSkge1xuICByZXR1cm4gY29tcGlsZXJGYWN0b3J5LmNyZWF0ZUNvbXBpbGVyKCk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIER5bmFtaWNDb250ZW50Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIER5bmFtaWNDb250ZW50Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIENvbXBpbGVyIGlzIG5vdCBpbmNsdWRlZCBpbiBBT1QtY29tcGlsZWQgYnVuZGxlLlxuICAgIC8vIE11c3QgZXhwbGljaXRseSBwcm92aWRlIGNvbXBpbGVyIHRvIGJlIGFibGUgdG8gY29tcGlsZSB0ZW1wbGF0ZXMgYXQgcnVudGltZS5cbiAgICB7cHJvdmlkZTogQ09NUElMRVJfT1BUSU9OUywgdXNlVmFsdWU6IHt9LCBtdWx0aTogdHJ1ZX0sXG4gICAge3Byb3ZpZGU6IENvbXBpbGVyRmFjdG9yeSwgdXNlQ2xhc3M6IEppdENvbXBpbGVyRmFjdG9yeSwgZGVwczogW0NPTVBJTEVSX09QVElPTlNdfSxcbiAgICB7cHJvdmlkZTogQ29tcGlsZXIsIHVzZUZhY3Rvcnk6IGNyZWF0ZUNvbXBpbGVyLCBkZXBzOiBbQ29tcGlsZXJGYWN0b3J5XX0gICAgXSxcblxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29udGVudE1vZHVsZSB7IH1cbiJdfQ==