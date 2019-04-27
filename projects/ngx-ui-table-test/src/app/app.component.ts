import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgxUiColumn, NgxUiTableOptions} from 'ngx-ui-table';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('titleTpl') titleTpl: TemplateRef<any>;
  columns: NgxUiColumn[];
  tableData;
  tableOptions: NgxUiTableOptions;
  searchField = '';
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getBooks()
      .subscribe((books: any[]) => {
        this.tableData = books;
        this.setColumns();
    });
    this.tableOptions = {
      tableHover: true,
      tableHeight: '800px'
    };
  }
  onInputChanged(val) {
    this.searchField = val;
  }

  setColumns() {
    this.columns = [
      {
        field: 'title',
        name: 'Title',
        size: 'tbl-sm',
        sort: 'desc',
        template: {
          ngTemplate: this.titleTpl
        }
      },
      {
        field: 'author',
        name: 'Author',
        template: {
          htmlString: (row, column) => `<div class="author">${row[column.field]}</div>`
        },
        size: 'tbl-sm',
        hide: false
      },
      {
        field: 'year',
        name: 'Year',
        size: 'tbl-lg',
        template: {
          htmlString: (row, column) => `<div class="year">${row[column.field]}</div>`
        },
      },
      {
        field: 'publisher',
        name: 'Publisher',
        size: 'tbl-lg'
      },
      {
        field: 'city',
        name: 'City',
        size: 'tbl-lg'
      },
      {
        field: 'pages',
        name: 'Pages',
        size: 'tbl-lg'
      },
    ];
  }

  tableActions(event: Actions) {
    const {type, payload} = event;
    switch (type) {
      case 'ROW_CLICKED':
        console.log(payload);
        alert('Row clicked!');
        break;
      case 'CHECKBOX_SELECTED_ITEMS_CHANGED':
        console.log(payload);
        alert('Row selected!');
        break;
      case 'CHECKBOX_SELECTED_ALL':
        console.log(payload);
        alert('All Rows selected!');
    }
  };
}
export class Actions {
  type: string;
  payload: any | any[];
}
