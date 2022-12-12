import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Raul1Component } from './components/raul1/raul1.component';
import { Raul2Component } from './components/raul2/raul2.component';
import { Raul3Component } from './components/raul3/raul3.component';
import { Raul4Component } from './components/raul4/raul4.component';
import { Raul5Component } from './components/raul5/raul5.component';
import { Raul6Component } from './components/raul6/raul6.component';

@NgModule({
  declarations: [
    AppComponent,
    Raul1Component,
    Raul2Component,
    Raul3Component,
    Raul4Component,
    Raul5Component,
    Raul6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
