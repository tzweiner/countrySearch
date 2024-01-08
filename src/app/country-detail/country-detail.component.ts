import { Component } from '@angular/core';
import {CountryService} from "../country.service";
import {map, Observable} from "rxjs";
import {CountryCca2Response} from "../country-cca2-response.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.less'
})
export class CountryDetailComponent {

  public $data: Observable<CountryCca2Response> = new Observable<CountryCca2Response>();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.$data = this.activatedRoute.data.pipe(
      map((response) => response['countryData'])
    );
  }

}
