import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Character } from '../types';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character;
  URL_characters = 'https://api-friends.herokuapp.com/characters';

  constructor(private http: HttpClient, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');

    this.http.get<any>(this.URL_characters + '?limit=50')
    .subscribe((response) => {
      this.character = response.data.find((char: { _id: string | null; }) => char._id === id);
    });
  }

}
