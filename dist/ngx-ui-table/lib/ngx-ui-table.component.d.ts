import { EventEmitter, OnInit } from '@angular/core';
import { NgxUiColumn } from './models/ngx-ui-column';
import { Actions } from './models/actions';
import { NgxUiTableOptions } from './models/ngx-ui-table-options';
export declare class NgxUiTableComponent implements OnInit {
    tableActions: EventEmitter<Actions>;
    tableData: any;
    setColumns: NgxUiColumn[];
    tableOptions: NgxUiTableOptions;
    setSearch: string;
    tableDataCopy: any[];
    tableColumns: NgxUiColumn[];
    selectedItems: any[];
    selectedAll: {};
    tableKeys: any[];
    constructor();
    ngOnInit(): void;
    hasTemplate(column: any): boolean;
    onRowClicked(event: any, row: any): void;
    onSelectedAllChecked(event: Actions): void;
    onOneItemChecked(event: Actions): void;
    columnActions(event: Actions): void;
}
