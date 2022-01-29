import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
