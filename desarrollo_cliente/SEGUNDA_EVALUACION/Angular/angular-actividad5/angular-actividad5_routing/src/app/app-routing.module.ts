import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaneamientoComponent } from "./views/saneamiento/saneamiento.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: SaneamientoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
