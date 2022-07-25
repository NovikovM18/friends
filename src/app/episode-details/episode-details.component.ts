import { Component, OnInit } from '@angular/core';
import { Episode } from '../types';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {
  episode!: Episode;
  URL_episodes = 'https://api-friends.herokuapp.com/episodes';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const number = routeParams.get('number');

    this.http.get<any>(this.URL_episodes + '?limit=236')
    .subscribe((response) => {
      this.episode = response.data.find((ep: { number: string; }) => ep.number === number);
    });
  }

}
