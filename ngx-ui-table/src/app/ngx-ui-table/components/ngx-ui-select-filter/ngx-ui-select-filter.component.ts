import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actions} from '../../models/actions';

@Component({
  selector: 'ngx-ui-select-filter',
  templateUrl: './ngx-ui-select-filter.component.html',
  styleUrls: ['./ngx-ui-select-filter.component.scss']
})
export class NgxUiSelectFilterComponent implements OnInit {
  selectedItems = [];
  itemsData: any[];
  show = false;
  @Output() ngxUiSelectFilterActions: EventEmitter<Actions> = new EventEmitter<Actions>();
  @Input() name: string;
  @Input() single: boolean;
  @Input() rowName: string;
  @Input('items') set setItems(items) {
    if (items) {
      if (items.length > 0) {
        this.itemsData = items;
        this.setCheckbox();
      } else {
        this.itemsData = null;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }
  public setCheckbox() {
    const addAttr = this.itemsData.map((item) => {
      item.isSelected = !item.isSelected ? false : true;
      return item;
    });
    this.itemsData = [...addAttr];
  }
  toggleDropdown() {
    this.show = !this.show;
  }
  addOrRemove(item) {
    console.log(item)
    if (this.selectedItems.length > 0) {
      const index = this.selectedItems.findIndex((i) => {
        return i[this.rowName] === item[this.rowName]
      });
      if (index === -1) {
        this.selectedItems.push(item);
      } else {
        this.selectedItems.splice(index, 1);
      }
    } else {
      this.selectedItems.push(item);
    }
    this.ngxUiSelectFilterActions.emit({
      payload: this.selectedItems,
      type: 'FILTER_CHANGED'
    })

  }
}
