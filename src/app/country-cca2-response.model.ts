import {Currencies, Name} from "./country-short-response.model";
import {OfficialCommon} from "./official-common.model";

export interface CountryCca2Response {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: ImageMeta;
  coatOfArms: ImageMeta;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  [key: string]: string;
}

export interface Translations {
  [key: string]: OfficialCommon;
}

export interface Demonyms {
  [key: string]: MaleFemale;
}

export interface MaleFemale {
  f: string;
  m: string;
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Gini {
  [key: string]: number;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface ImageMeta {
  png?: string;
  svg?: string;
  alt?: string;
}

export interface CapitalInfo {
  latlng: number[];
}

