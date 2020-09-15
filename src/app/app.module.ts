import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LicenseManager } from 'ag-grid-enterprise';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

LicenseManager.setLicenseKey(
  'Key'
);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
