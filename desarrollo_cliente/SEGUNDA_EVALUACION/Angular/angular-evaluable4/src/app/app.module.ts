import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameOneComponent } from './components/game-one/game-one.component';
import { GameTwoComponent } from './components/game-two/game-two.component';
import { GameThreeComponent } from './components/game-three/game-three.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOneComponent,
    GameTwoComponent,
    GameThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
