import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {CountryListComponent} from "./country-list/country-list.component";
import {CountryDetailComponent} from "./country-detail/country-detail.component";
import {countryDetailResolver} from "./country.service";

export const routes: Routes = [
  { path: 'search', component: CountryListComponent },
  { path: 'search/:cca2', component: CountryDetailComponent, resolve: {countryData: countryDetailResolver} },
  { path: '**', redirectTo: 'search' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
