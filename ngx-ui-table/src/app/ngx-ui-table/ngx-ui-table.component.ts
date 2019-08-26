import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgxUiColumn} from './models/ngx-ui-column';
import {Actions} from './models/actions';
import {NgxUiTableOptions} from './models/ngx-ui-table-options';

@Component({
  selector: 'ngx-ui-table',
  templateUrl: './ngx-ui-table.component.html',
  styleUrls: ['./ngx-ui-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxUiTableComponent implements OnInit {
  @Output() tableActions: EventEmitter<Actions> = new EventEmitter<Actions>();
  @Input() tableData;
  @Input('columns') set setColumns(columns: NgxUiColumn[]) {
    if (columns) {
      this.tableColumns = columns.map((col) => {
        if (!col.hasOwnProperty('hide')) {
          col.hide = false;
        }
        return col;
      });
    }
  }
  @Input() tableOptions: NgxUiTableOptions;

  @Input('search') set setSearch(str: string) {
    if (str) {
      this.tableDataCopy =  this.tableData.filter((val) => {
        return this.tableKeys.filter((col) => {
          return  val[col].toString().toLocaleLowerCase().includes(str.toString());
        }).length > 0;
      });
    } else {
      this.tableDataCopy =  this.tableData;
    }
  }
  tableDataCopy = [];
  tableColumns: NgxUiColumn[] = [];
  selectedItems = [];
  selectedAll = {};
  tableKeys = [];
  selectedFilters = [];
  filteredTable = [];
  constructor() { }

  ngOnInit() {
    this.tableKeys = Object.keys(this.tableData[0]);
    this.tableDataCopy = [...this.tableData];
    this.filteredTable = [...this.tableData];
  }
  hasTemplate(column) {
    return !!column.template && (!!column.template.htmlString || !!column.template.ngTemplate);
  }
  onRowClicked(event, row) {
    this.tableActions.emit({
      payload: row,
      type: 'ROW_CLICKED'
    });
    event.stopPropagation();
  }
  onSelectedAllChecked(event: Actions) {
    switch (event.type) {
      case 'CHECKBOX_SELECTED_ALL':
        if (event.payload.checked) {
          this.selectedItems = this.tableData;
        } else {
          this.selectedItems = [];
        }
        const tblData = this.tableData.map((tableData) => {
          tableData.checked = false;
          return tableData;
        });
        this.tableData = tblData.map((tableData) => {
          tableData.checked = event.payload.checked;
          return tableData;
        });
        this.tableActions.emit({
          type: 'CHECKBOX_SELECTED_ALL',
          payload: this.tableData
        });
        break;
    }
  }
  onOneItemChecked(event: Actions) {
    switch (event.type) {
      case 'CHECKBOX_SELECTED_ITEMS_CHANGED':
        if (this.selectedItems.length === 0) {
          this.selectedItems = event.payload;
        }
        this.tableActions.emit(event);
        break;
    }
  }
  columnActions(event: Actions) {
    const {payload, type} = event;
    switch (type) {
      case 'FILTERED_ITEMS':
        console.log(payload);
        if (this.selectedFilters.length > 0) {
          const index = this.selectedFilters.findIndex((item) => item.field === payload.field);
          if (index  === -1) {
            this.selectedFilters.push(payload);
          }else {
            this.selectedFilters[index] = payload;
          }
        } else {
          this.selectedFilters.push(payload);
        }
        let result = [...this.tableData];
        this.selectedFilters.forEach((selected) => {
          result =  selected.filtered(result).length > 0 ? selected.filtered(result)  : [];
        })
        this.filteredTable = result;
        // run filter reducer
     break;
      case 'COLUMN_SORT_CHANGED':
        if (payload.sort === 'asc') {
          this.tableDataCopy = [].concat(this.tableDataCopy || [])
            .sort((a, b) => -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field]));
        } else {
          this.tableDataCopy = [].concat(this.tableDataCopy || [])
            .sort((b, a) => -(a[payload.field] < b[payload.field]) || +(a[payload.field] !== b[payload.field]));
        }
        break;
    }
    this.tableActions.emit(event)
  }
}
