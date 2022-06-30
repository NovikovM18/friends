import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { MainComponent } from './main/main.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    EpisodesComponent,
    MainComponent,
    CharacterDetailsComponent,
    EpisodeDetailsComponent
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
