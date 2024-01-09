import { ComponentFixture, TestBed } from '@angular/core/testing';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import { CountryListComponent } from './country-list.component';
import {CountryService} from "../country.service";
import {of} from "rxjs";

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;
  let countryService: any;

  beforeEach(async () => {
    countryService = createSpyObj(CountryService.name, ['getCountryByCca2', 'getAllCountriesShort']);
    await TestBed.configureTestingModule({
      declarations: [CountryListComponent],
      providers: [
        { provide: CountryService, useValue: countryService },
      ]
    })
    .compileComponents();

    countryService.getAllCountriesShort.and.returnValue(of([]));

    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
