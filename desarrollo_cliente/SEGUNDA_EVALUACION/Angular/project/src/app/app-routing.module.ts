import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocietyComponent } from './views/society/society.component';
import { PoliticsComponent } from './views/politics/politics.component';

const routes: Routes = [
  { path: '', redirectTo: 'politics', pathMatch: 'full'},
  { path: 'society', component: SocietyComponent },
  { path: 'politics', component: PoliticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
