import {Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from './dynamic-content.component';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
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
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}    ],

})
export class DynamicContentModule { }
