import { EventEmitter, OnInit } from '@angular/core';
import { Actions } from '../../models/actions';
export declare class CheckboxComponent implements OnInit {
    _item: any;
    checkBoxAction: EventEmitter<Actions>;
    selectedType: 'all';
    selectedItems: any;
    label: string;
    setItem: any;
    constructor();
    onCheckboxChanged(event: any): void;
    addOrRemoveItem(item: any): void;
    ngOnInit(): void;
}
