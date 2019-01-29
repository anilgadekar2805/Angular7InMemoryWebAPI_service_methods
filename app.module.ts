import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomerService} from './customer.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {Customer_webAPI} from './customer_webAPI'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(Customer_webAPI)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
