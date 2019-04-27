import { Compiler, OnInit, ViewContainerRef } from '@angular/core';
export declare class DynamicContentComponent implements OnInit {
    private compiler;
    container: ViewContainerRef;
    setTemplateString: any;
    constructor(compiler: Compiler);
    ngOnInit(): void;
}
