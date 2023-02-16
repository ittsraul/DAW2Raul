import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'enunciado', pathMatch: 'full' },
  { path: '', component: EnunciadoComponent },
  { path: '', component: Ejercicio1Component },
  { path: '', component: Ejercicio2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
