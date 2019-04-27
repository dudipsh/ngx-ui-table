import { EventEmitter, OnInit } from '@angular/core';
import { Actions } from '../../models/actions';
import { NgxUiColumn } from '../../models/ngx-ui-column';
export declare class NgxUiTableColumnComponent implements OnInit {
    col: any;
    columnActions: EventEmitter<Actions>;
    setColumn: NgxUiColumn;
    tableData: any;
    constructor();
    ngOnInit(): void;
    onSortChanged(): void;
}
