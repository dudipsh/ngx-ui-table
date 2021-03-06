# NgxUITable

##### An angular2+ table with sortable headers, row selection, supported templates and dynamic html

![](chrome-capture.gif)


## Features
Handle large data sets ( Virtual Scroll )
* Client side Sorting
* Row Selection Single/Multi
* Row Template or HTML as string

## Installation
`npm install ngx-virtual-scroller --save`

`npm install ngx-ui-table --save`


## Using
### app.module
```typescript
imports: [...,
    NgxUiTableModule
  ],
```
### app.component.html

```html 
<ngx-ui-table
           (tableActions)="tableActions($event)"
           [search]="search"
           [tableData]="tableData"
           [columns]="column"
           [tableOptions]="tableOption">
 </ngx-ui-table>
 ```
### app.component.ts
##### basic
```typescript
      columns: NgxUiColumn[];
      this.columns = [{
              field: 'id',
              name: 'id',
              className: 'tbl-sm',
              sort: 'desc'
            },
            {
              field: 'isActive',
              name: 'isActive',
              className: 'myGlobalClass',
              hide: false
            },
            {
              field: 'name',
              name: 'Name',
              className: 'tbl-lg'
            }
      ];
      this.tableData = [{
        'id': 100,
        'name': 'john doe01',
        'image': 'https://picsum.photos/200/300?random=01',
        'isActive': true,
        'lastSeen': '2019-04-25T18:00:09.543Z'
      },
      {
        'id': 101,
        'name': 'john doe11',
        'image': 'https://picsum.photos/200/300?random=11',
        'isActive': false,
        'lastSeen': '2019-04-25T18:00:09.543Z'
      } ...
    ];
``` 


##### more
### app.component.html
```html 
<div class="ngx-ui-table">
  <input type="text" name="input" class="input"
         [ngModel]="searchField"
         (ngModelChange)="onInputChanged($event)" />

  <ngx-ui-table
    (tableActions)="tableActions($event)"
    [tableData]="tableData"
    [columns]="columns"
    [tableOptions]="tableOptions"
    [search]="searchField">
  </ngx-ui-table>
</div>

<ng-template #titleTpl let-row="row" let-column="column">
  <div class="title">{{row[column.field]}}</div>
</ng-template>
```

### app.component.ts

```typescript
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
```

## NgxUiColumn
| Name |    Type   |  Info |
|---|---|---|
|---|---|---|
| field  | string  |  uniq field -  lowercase |   
| name  | string  |  any string  |   
| className  | string  | any css class, the class need to be a global in styles.css |  
| template  | Object  |  htmlString or ngTemplate |   
| sort  | string  |   'asc' | 'desc'  |   
| hide  |  boolean |  default value is false  |   
| isSelected  | boolean  | default value is false  |   
| notSorted  |  boolean | default value is false  |   
##
## NgxUiTableOptions
| Name |    Type   |  Info |
|---|---|---|
| tableHover |   boolean | default value is false  |  |
| tableHover |   string | default value  is '600px'  |  |
## Events
#### tableActions($event) 
` type: string;
   payload: any | any[];
`
####

## Credits
`ngx-virtual-scroller` 
