import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailComponent } from './country-detail.component';
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {CountryService} from "../country.service";
import createSpyObj = jasmine.createSpyObj;
import {of} from "rxjs";
import {CountryCca2Response} from "../country-cca2-response.model";

describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;
  let countryService: any;

  beforeEach(async () => {
    countryService = createSpyObj(CountryService.name, ['getCountryByCca2', 'getAllCountriesShort']);
    await TestBed.configureTestingModule({
      declarations: [CountryDetailComponent],
      providers: [
        { provide: ActivatedRoute,
          useValue: {
          snapshot: {paramMap: convertToParamMap({cca2: 'one-id'}) },
          data: of({countryData: [getCountryDetail()]}) }
        },
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

function getCountryDetail(): CountryCca2Response {
  return {
    "name": {
      "common": "Colombia",
      "official": "Republic of Colombia",
      "nativeName": {
        "spa": {
          "official": "República de Colombia",
          "common": "Colombia"
        }
      }
    },
    "tld": [
      ".co"
    ],
    "cca2": "CO",
    "ccn3": "170",
    "cca3": "COL",
    "cioc": "COL",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "COP": {
        "name": "Colombian peso",
        "symbol": "$"
      }
    },
    "idd": {
      "root": "+5",
      "suffixes": [
        "7"
      ]
    },
    "capital": [
      "Bogotá"
    ],
    "altSpellings": [
      "CO",
      "Republic of Colombia",
      "República de Colombia"
    ],
    "region": "Americas",
    "subregion": "South America",
    "languages": {
      "spa": "Spanish"
    },
    "translations": {
      "ara": {
        "official": "جمهورية كولومبيا",
        "common": "كولومبيا"
      },
      "bre": {
        "official": "Republik Kolombia",
        "common": "Kolombia"
      },
      "ces": {
        "official": "Kolumbijská republika",
        "common": "Kolumbie"
      },
      "cym": {
        "official": "Gweriniaeth Colombia",
        "common": "Colombia"
      },
      "deu": {
        "official": "Republik Kolumbien",
        "common": "Kolumbien"
      },
      "est": {
        "official": "Colombia Vabariik",
        "common": "Colombia"
      },
      "fin": {
        "official": "Kolumbian tasavalta",
        "common": "Kolumbia"
      },
      "fra": {
        "official": "République de Colombie",
        "common": "Colombie"
      },
      "hrv": {
        "official": "Republika Kolumbija",
        "common": "Kolumbija"
      },
      "hun": {
        "official": "Kolumbiai Köztársaság",
        "common": "Kolumbia"
      },
      "ita": {
        "official": "Repubblica di Colombia",
        "common": "Colombia"
      },
      "jpn": {
        "official": "コロンビア共和国",
        "common": "コロンビア"
      },
      "kor": {
        "official": "콜롬비아 공화국",
        "common": "콜롬비아"
      },
      "nld": {
        "official": "Republiek Colombia",
        "common": "Colombia"
      },
      "per": {
        "official": "جمهوری کلمبیا",
        "common": "کلمبیا"
      },
      "pol": {
        "official": "Republika Kolumbii",
        "common": "Kolumbia"
      },
      "por": {
        "official": "República da Colômbia",
        "common": "Colômbia"
      },
      "rus": {
        "official": "Республика Колумбия",
        "common": "Колумбия"
      },
      "slk": {
        "official": "Kolumbijská republika",
        "common": "Kolumbia"
      },
      "spa": {
        "official": "República de Colombia",
        "common": "Colombia"
      },
      "srp": {
        "official": "Република Колумбија",
        "common": "Колумбија"
      },
      "swe": {
        "official": "Republiken Colombia",
        "common": "Colombia"
      },
      "tur": {
        "official": "Kolombiya Cumhuriyeti",
        "common": "Kolombiya"
      },
      "urd": {
        "official": "جمہوریہ کولمبیا",
        "common": "کولمبیا"
      },
      "zho": {
        "official": "哥伦比亚共和国",
        "common": "哥伦比亚"
      }
    },
    "latlng": [
      4,
      -72
    ],
    "landlocked": false,
    "borders": [
      "BRA",
      "ECU",
      "PAN",
      "PER",
      "VEN"
    ],
    "area": 1141748,
    "demonyms": {
      "eng": {
        "f": "Colombian",
        "m": "Colombian"
      },
      "fra": {
        "f": "Colombienne",
        "m": "Colombien"
      }
    },
    "flag": "🇨🇴",
    "maps": {
      "googleMaps": "https://goo.gl/maps/zix9qNFX69E9yZ2M6",
      "openStreetMaps": "https://www.openstreetmap.org/relation/120027"
    },
    "population": 50882884,
    "gini": {
      "2019": 51.3
    },
    "fifa": "COL",
    "car": {
      "signs": [
        "CO"
      ],
      "side": "right"
    },
    "timezones": [
      "UTC-05:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/co.png",
      "svg": "https://flagcdn.com/co.svg",
      "alt": "The flag of Colombia is composed of three horizontal bands of yellow, blue and red, with the yellow band twice the height of the other two bands."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/co.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/co.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
      "latlng": [
        4.71,
        -74.07
      ]
    }
  };
}
