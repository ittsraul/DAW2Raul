import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { HomeComponent } from './views/home/home.component';
import { SanidadComponent } from './views/sanidad/sanidad.component';
import { EnergiaComponent } from './views/energia/energia.component';
import { SaneamientoComponent } from './views/saneamiento/saneamiento.component';
import { PhotoComponent } from './components/photo/photo.component';
import { TextComponent } from './components/text/text.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from './components/panel/panel.component';
import { ContactComponent } from './views/contact/contact.component';
import { CambioClimaticoComponent } from './views/cambio-climatico/cambio-climatico.component';
import { EventsComponent } from './views/events/events.component';
import { FormContactComponent } from './componts/form-contact/form-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ProyectosComponent,
    HomeComponent,
    SanidadComponent,
    EnergiaComponent,
    SaneamientoComponent,
    PhotoComponent,
    TextComponent,
    QuoteComponent,
    ContentComponent,
    PanelComponent,
    ContactComponent,
    CambioClimaticoComponent, 
    PanelComponent,
    ContactComponent,
    EventsComponent,
    FormContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
