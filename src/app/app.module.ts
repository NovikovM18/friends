import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { SeasonComponent } from './season/season.component';
import { MainComponent } from './main/main.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    SeasonComponent,
    MainComponent,
    CharacterDetailsComponent,
    EpisodeDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
