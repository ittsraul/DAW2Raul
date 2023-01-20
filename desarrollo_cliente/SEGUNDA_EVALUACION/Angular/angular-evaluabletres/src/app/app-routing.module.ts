import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LargoplazoComponent } from './views/largoplazo/largoplazo.component';
import { CortoplazoComponent } from "./views/cortoplazo/cortoplazo.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'largoplazo', component: LargoplazoComponent },
  { path: 'cortoplazo', component: CortoplazoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
