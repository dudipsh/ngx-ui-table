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
const ɵ0 = {};
export class DynamicContentModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb250ZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2R5bmFtaWMtY29udGVudC9keW5hbWljLWNvbnRlbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQUVyRSxNQUFNLFVBQVUsY0FBYyxDQUFDLGVBQWdDO0lBQzdELE9BQU8sZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFDLENBQUM7V0FleUMsRUFBRTtBQUs1QyxNQUFNLE9BQU8sb0JBQW9COzs7WUFsQmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsdUJBQXVCO2lCQUN4QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsbURBQW1EO29CQUNuRCwrRUFBK0U7b0JBQy9FLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7b0JBQ3RELEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztvQkFDbEYsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUM7aUJBQUs7YUFFaEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBpbGVyLCBDT01QSUxFUl9PUFRJT05TLCBDb21waWxlckZhY3RvcnksIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEeW5hbWljQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0ppdENvbXBpbGVyRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBpbGVyKGNvbXBpbGVyRmFjdG9yeTogQ29tcGlsZXJGYWN0b3J5KSB7XG4gIHJldHVybiBjb21waWxlckZhY3RvcnkuY3JlYXRlQ29tcGlsZXIoKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRHluYW1pY0NvbnRlbnRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRHluYW1pY0NvbnRlbnRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gQ29tcGlsZXIgaXMgbm90IGluY2x1ZGVkIGluIEFPVC1jb21waWxlZCBidW5kbGUuXG4gICAgLy8gTXVzdCBleHBsaWNpdGx5IHByb3ZpZGUgY29tcGlsZXIgdG8gYmUgYWJsZSB0byBjb21waWxlIHRlbXBsYXRlcyBhdCBydW50aW1lLlxuICAgIHtwcm92aWRlOiBDT01QSUxFUl9PUFRJT05TLCB1c2VWYWx1ZToge30sIG11bHRpOiB0cnVlfSxcbiAgICB7cHJvdmlkZTogQ29tcGlsZXJGYWN0b3J5LCB1c2VDbGFzczogSml0Q29tcGlsZXJGYWN0b3J5LCBkZXBzOiBbQ09NUElMRVJfT1BUSU9OU119LFxuICAgIHtwcm92aWRlOiBDb21waWxlciwgdXNlRmFjdG9yeTogY3JlYXRlQ29tcGlsZXIsIGRlcHM6IFtDb21waWxlckZhY3RvcnldfSAgICBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb250ZW50TW9kdWxlIHsgfVxuIl19