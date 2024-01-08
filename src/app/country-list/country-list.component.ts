import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountryService} from "../country.service";
import {map, Observable, Subject, Subscription} from "rxjs";
import {CountryShortResponse} from "../country-short-response.model";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.less'
})
export class CountryListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private allCountriesSubject: Subject<CountryShortResponse> = new Subject();

  public data$: Observable<CountryShortResponse[]>;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.data$ = this.countryService.getAllCountriesShort().pipe(
      map((responses) => responses.sort(this.compareCountryNamesFn))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private compareCountryNamesFn = (a: CountryShortResponse, b: CountryShortResponse) => {
    const nameA = a.name.common ?? a.name.official;
    const nameB = b.name.common ?? b.name.official;
    if (nameA < nameB)
      return -1;
    if (nameA > nameB)
      return 1;
    return 0;
  };

}
