import {Component, OnInit} from '@angular/core';
import { map, Observable} from "rxjs";
import {CountryCca2Response} from "../country-cca2-response.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.less'
})
export class CountryDetailComponent implements OnInit {

  public $data: Observable<CountryCca2Response[]> = new Observable<CountryCca2Response[]>();
  public code: string | null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.code = activatedRoute.snapshot.paramMap.get("cca2");
  }

  ngOnInit(): void {
    this.$data = this.activatedRoute.data.pipe(
      map((response) => response['countryData'])
    );
  }

  public getFlagUrl(countryData: CountryCca2Response): string {
    const flagURLs = countryData.flags;
    return flagURLs?.['png'] || '';
  }

  public getFlagDescription(countryData: CountryCca2Response): string {
    const flagURLs = countryData.flags;
    return flagURLs?.['alt'] || '';
  }

}
