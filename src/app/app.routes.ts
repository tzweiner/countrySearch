import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {CountryListComponent} from "./country-list/country-list.component";

export const routes: Routes = [
  { path: '**', redirectTo: 'search' },
  { path: 'search', component: CountryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
