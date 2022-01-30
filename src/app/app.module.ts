import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxFormModule, DxTextAreaModule } from "devextreme-angular";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    HttpClientModule,
    DxFormModule,
    DxTextAreaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
