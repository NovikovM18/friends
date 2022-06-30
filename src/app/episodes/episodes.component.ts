import { Component, OnInit } from '@angular/core';
import { Episode, Season } from '../types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  URL_season = 'https://api-friends.herokuapp.com/seasons';
  seasons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  seasonNum: number = 1;
  season!: Season;
  
  constructor(private http: HttpClient) {}

  getSeason() {
    this.http.get<any>(this.URL_season + '?number=' + this.seasonNum)
    .subscribe((response) => {
      this.season = response.data[0];
    });
  }

  setSeason(num: number) {
    this.seasonNum = num;
    this.getSeason();
  }
  
  ngOnInit(): void {
    this.getSeason();
  }
}
