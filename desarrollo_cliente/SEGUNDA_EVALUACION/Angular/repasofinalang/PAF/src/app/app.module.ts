import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResponseComponent } from './inteface/response/response.component';
import { SayonaraComponent } from './views/sayonara/sayonara.component';
import { BabyComponent } from './views/baby/baby.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent,
    SayonaraComponent,
    BabyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
