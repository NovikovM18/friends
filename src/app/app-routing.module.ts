import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { SeasonComponent } from './season/season.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: 'characters/:name', component: CharacterDetailsComponent},
  {path: 'season/:number', component: SeasonComponent},
  {path: 'episodes/:number', component: EpisodeDetailsComponent},
  {path: '**', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
