import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxUiTableComponent } from './ngx-ui-table/ngx-ui-table.component';
import {NgxUiTableModule} from './ngx-ui-table/ngx-ui-table.module';
import {VirtualScrollerModule} from 'ngx-virtual-scroller';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxUiTableModule,
    VirtualScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
