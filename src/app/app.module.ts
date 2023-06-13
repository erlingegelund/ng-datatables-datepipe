import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { DataTablesModule } from 'angular-datatables';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
