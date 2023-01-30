import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { HomeComponent } from './views/home/home.component';
import { SanidadComponent } from './views/sanidad/sanidad.component';
import { SaneamientoComponent } from './views/saneamiento/saneamiento.component';
import { EnergiaComponent } from './views/energia/energia.component';
import { CambioClimaticoComponent } from './views/cambio-climatico/cambio-climatico.component';
import { ContactComponent } from './views/contact/contact.component';
import { EventsComponent } from './views/events/events.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'proyectos/energia', component: EnergiaComponent },
  { path: 'proyectos/saneamiento', component: SaneamientoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'proyectos/sanidad', component: SanidadComponent },
  { path: 'proyectos/cambioClimatico', component: CambioClimaticoComponent },
  { path: 'proyectos/contact', component: ContactComponent },
  { path: 'proyectos/events', component: EventsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
