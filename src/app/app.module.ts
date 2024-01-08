import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CountryListComponent } from './country-list/country-list.component';
import {CountryService} from "./country.service";

@NgModule({
  declarations: [AppComponent, CountryListComponent],
  imports: [
    CommonModule, AppRoutingModule, BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [CountryService],
})
export class AppModule { }
