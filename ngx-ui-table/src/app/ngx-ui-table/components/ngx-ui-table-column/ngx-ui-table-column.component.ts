import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actions} from '../../models/actions';
import {NgxUiColumn} from '../../models/ngx-ui-column';

@Component({
  selector: 'ngx-ui-table-column',
  templateUrl: './ngx-ui-table-column.component.html',
  styleUrls: ['./ngx-ui-table-column.component.scss']
})
export class NgxUiTableColumnComponent implements OnInit {
  col;
  filter;
  @Output() columnActions: EventEmitter<Actions> = new EventEmitter<Actions>();
  @Input() tableData;
  @Input('column') set setColumn(column: NgxUiColumn) {
    if (column) {
      this.col = column;
      if (column.isHaveFilter) {
        this.createFilter();
      }
      if (!column.hasOwnProperty('sort')) {
        this.col.sort = 'asc';
      } else if (this.col.sort === 'desc') {
        this.columnActions.emit({
          payload: this.col,
          type: 'COLUMN_SORT_CHANGED'
        });
      }

    }
  }


  constructor() { }

  ngOnInit() {
  }

  createFilter() {
    if (!this.tableData) return;
    const words = [];
    // prevent duplicate filters
    this.tableData.forEach((data) => {
      const item = {name: data[this.col.field]};
      if (words.findIndex((_itm) => _itm.name === data[this.col.field]) === -1) {
         words.push(item);
      }
    });
    this.filter = words.map((data) => {
      return {
        name: data.name,
        isSelected: false
      };
    });
  }
  onSortChanged() {
    this.col.sort = this.col.sort === 'asc' ? 'desc' : 'asc';
    this.columnActions.emit({
      payload: this.col,
      type: 'COLUMN_SORT_CHANGED'
    });
  }
  onFilterChanged($event) {
    this.columnActions.emit({
      type: 'FILTERED_ITEMS',
      payload: {
        field: this.col.field,
        data: $event.payload,
        filtered: (tableData: any[]) => {
          const result = $event.payload.map((item) => {
            let results = [];
            const filterdData = tableData.filter((data) => {
              return data[this.col.field] === item.name
            });
            if (filterdData) {
              results = [...results, ...filterdData];
              return results
            }
          }).map((undefined) => undefined)
          let filterResult = [];
          result.forEach((res) => {
            filterResult =  [...filterResult, ...res]
          });
          return filterResult;
        }
      }
    });
  }
}
