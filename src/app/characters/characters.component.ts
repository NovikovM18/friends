import { Component, OnInit } from '@angular/core';
import { Character } from '../types';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  URL_characters = 'https://api-friends.herokuapp.com/characters';
  characters!: Character[];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  ngOnInit(): void {
    this.http.get<any>(this.URL_characters + '?limit=50')
    .subscribe((response) => {
      this.characters = response.data;      
    });
  }
}
