import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HemisfericComponent } from './views/hemisferic/hemisferic.component';
import { MuseoComponent } from './views/museo/museo.component';
const routes: Routes = [
  { path: '', redirectTo: 'hemisferic', pathMatch: 'full'},
  { path: 'hemisferic', component: HemisfericComponent},
  { path: 'museo', component: MuseoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
