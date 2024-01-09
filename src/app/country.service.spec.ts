import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';
import SpyObj = jasmine.SpyObj;
import {HttpClient} from "@angular/common/http";
import createSpyObj = jasmine.createSpyObj;

describe('CountryService', () => {
  let service: CountryService;
  let httpSpy: SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = createSpyObj(HttpClient.name, ['get']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpSpy },
      ],
    });
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
