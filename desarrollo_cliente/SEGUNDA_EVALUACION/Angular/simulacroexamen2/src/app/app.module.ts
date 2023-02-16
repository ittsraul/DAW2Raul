import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EnunciadoComponent } from './views/enunciado/enunciado.component';
import { Ejercicio1Component } from './views/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './views/ejercicio2/ejercicio2.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnunciadoComponent,
    Ejercicio1Component,
    Ejercicio2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
