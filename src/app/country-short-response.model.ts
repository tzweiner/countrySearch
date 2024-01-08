import {NameSymbol} from "./name-symbol.model";
import {OfficialCommon} from "./official-common.model";

export interface CountryShortResponse {
  name: Name
  currencies: Currencies
  capital: string[]
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  [key: string]: OfficialCommon
}

export interface Currencies {
  [key: string]: NameSymbol
}
