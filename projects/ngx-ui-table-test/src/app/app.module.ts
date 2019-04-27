import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxUiTableModule} from 'ngx-ui-table';
import {FormsModule} from '@angular/forms';
import {VirtualScrollerModule} from 'ngx-virtual-scroller'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VirtualScrollerModule,
    NgxUiTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
