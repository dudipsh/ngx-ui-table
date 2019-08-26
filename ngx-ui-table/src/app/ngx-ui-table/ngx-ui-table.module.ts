import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxUiTableComponent} from './ngx-ui-table.component';
import {NgxUiTableColumnComponent} from './components/ngx-ui-table-column/ngx-ui-table-column.component';
import {VirtualScrollerModule} from 'ngx-virtual-scroller';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import {DynamicContentModule} from './components/dynamic-content/dynamic-content.module';
import { NgxUiColumnsPipe } from './pipes/ngx-ui-columns.pipe';
import {NgxUiSelectFilterComponent} from './components/ngx-ui-select-filter/ngx-ui-select-filter.component';

@NgModule({
  declarations: [
    NgxUiTableComponent,
    NgxUiTableColumnComponent,
    CheckboxComponent,
    NgxUiColumnsPipe,
    NgxUiSelectFilterComponent
  ],
  imports: [
    CommonModule,
    VirtualScrollerModule,
    DynamicContentModule
  ],
  exports: [
    NgxUiTableComponent
  ]
})
export class NgxUiTableModule { }
