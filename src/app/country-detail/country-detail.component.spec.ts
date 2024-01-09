import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailComponent } from './country-detail.component';
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {CountryService} from "../country.service";
import createSpyObj = jasmine.createSpyObj;
import {of} from "rxjs";

describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;
  let countryService: any;

  beforeEach(async () => {
    countryService = createSpyObj(CountryService.name, ['getCountryByCca2', 'getAllCountriesShort'])
    await TestBed.configureTestingModule({
      declarations: [CountryDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { data: {snapshot: {paramMap: convertToParamMap({cca2: 'one-id'}) } } } },
        { provide: CountryService, useValue: countryService },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
