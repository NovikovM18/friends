import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Info } from '../types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  URL_info = 'https://api-friends.herokuapp.com/info';
  info!: Info;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.URL_info)
    .subscribe((response) => {
      this.info = response.data[0];
    });
  }

}
