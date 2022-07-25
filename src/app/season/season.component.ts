import { Component, OnInit } from '@angular/core';
import { Season } from '../types';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  URL_season = 'https://api-friends.herokuapp.com/seasons';
  seasons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  season!: Season;
  
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getSeason() {
    const routeParams = this.route.snapshot.paramMap;
    const number = routeParams.get('number');
    this.http.get<any>(this.URL_season)
    .subscribe((response) => {      
      this.season = response.data.find((ep: { number: string }) => ep.number == number);
    });
  }

  setSeason(number: number) {
    this.http.get<any>(this.URL_season)
    .subscribe((response) => {      
      this.season = response.data.find((ep: { number: number }) => ep.number === number);
    });
  }

  ngOnInit(): void {
    this.getSeason();
  }
}
