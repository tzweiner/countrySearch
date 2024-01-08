import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryShortResponse} from "./country-short-response.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private short_url = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies';

  constructor(private http$: HttpClient) { }

  public getAllCountriesShort(): Observable<CountryShortResponse[]> {
    return this.http$.get<CountryShortResponse[]>(this.short_url);
  }

}
