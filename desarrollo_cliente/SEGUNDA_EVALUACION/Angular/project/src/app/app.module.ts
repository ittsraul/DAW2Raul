import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { PoliticsComponent } from './views/politics/politics.component';
import { SocietyComponent } from './views/society/society.component';
import { PostComponent } from './components/post/post.component';
import { TypeComponent } from './components/type/type.component';
import { DateComponent } from './components/date/date.component';
import { TitleComponent } from './components/title/title.component';
import { SentenceComponent } from './components/sentence/sentence.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    PoliticsComponent,
    SocietyComponent,
    PostComponent,
    TypeComponent,
    DateComponent,
    TitleComponent,
    SentenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
