import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgxUiColumn} from './ngx-ui-table/models/ngx-ui-column';
import * as tableData from './ngx-ui-table/mock/tableData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('idTpl') idTpl: TemplateRef<any>;
  @ViewChild('imageTpl') imageTpl: TemplateRef<any>;
  column: NgxUiColumn[];
  tableData: any;
  tableOption = {'tableHover': true, 'tableHeight': '500px'};
  title = 'ngx-ui-table-demo';
  data;
  search;
  ngOnInit(): void {
    this.column = [
      {
        field: 'id',
        name: 'id',
        template: {
          ngTemplate: this.idTpl
        },
        filterFunction: (event) => {
          console.log(event)
        },
        className: 'tbl-sm',
        sort: 'desc'
      },
      {
        field: 'image',
        name: 'image',
        template: {
          ngTemplate: this.imageTpl
        },
        filterFunction: (event) => {
          console.log(event)
        },
        className: 'tbl-sm',
        sort: 'desc'
      },
      {
        field: 'itemType',
        name: 'itemType',
        isHaveFilter: true,
        className: 'tbl-sm',
        sort: 'desc'
      },
      {
        field: 'isActive',
        name: 'isActive',
        template: {
          htmlString: (row, column) => `<h4>${row[column.field]}</h4>`
        },
        isHaveFilter: true,
        className: 'tbl-sm',
        hide: false
      },
      {
        field: 'name',
        name: 'Name',
        className: 'tbl-lg',
        filterFunction: (event) => {
          console.log(event)
        },
        isHaveFilter: true

      }
    ];
    this.tableData = tableData.default;
  }
  onSearchChanged(val) {
    this.search = val;
  }
  tableActions($event) {
  }
}
