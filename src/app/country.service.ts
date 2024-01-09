import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {CountryShortResponse} from "./country-short-response.model";
import {ActivatedRouteSnapshot, ResolveFn} from "@angular/router";
import {CountryCca2Response} from "./country-cca2-response.model";

export const countryDetailResolver: ResolveFn<CountryCca2Response[]> =
  (route: ActivatedRouteSnapshot) => {
  return inject(CountryService).getCountryByCca2(route?.paramMap?.get("cca2"));
  }

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private short_url = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,cca2';
  private cca2_url = 'https://restcountries.com/v3.1/alpha/';

  constructor(private http$: HttpClient) { }

  public getAllCountriesShort(): Observable<CountryShortResponse[]> {
    return this.http$.get<CountryShortResponse[]>(this.short_url);
  }

  public getCountryByCca2(cca2?: string | null | undefined): Observable<CountryCca2Response[]> {
    if (!cca2) {
      return EMPTY;
    }
    return this.http$.get<CountryCca2Response[]>(this.cca2_url + cca2);
  }

}
