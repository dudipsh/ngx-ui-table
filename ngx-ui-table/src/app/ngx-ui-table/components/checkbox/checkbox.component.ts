import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actions} from '../../models/actions';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  _item;
  @Output() checkBoxAction: EventEmitter<Actions> = new EventEmitter<Actions>();


  @Input() selectedType: 'all';
  @Input() selectedItems;
  @Input() label = '';
  @Input('item') set setItem(item) {
    if (item) {
      this._item = item;
      if (!this._item.hasOwnProperty('checked')) {
        this._item.checked = false;
      }
    }
  }
  constructor() { }
  onCheckboxChanged(event) {
    if (this.selectedType === 'all') {
      this.checkBoxAction.emit({
        payload: {
          checked: event.target.checked
        },
        type: 'CHECKBOX_SELECTED_ALL'
      });
    } else {
      this.addOrRemoveItem(this._item);
      this.checkBoxAction.emit({
        payload: this.selectedItems,
        type: 'CHECKBOX_SELECTED_ITEMS_CHANGED'
      });
    }
    event.stopPropagation();
  }
  addOrRemoveItem(item) {
    const index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(index, 1);
    }
  }
  ngOnInit() {
  }

}
