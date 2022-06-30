import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  getCharacter() {
    const routeParams = this.route.snapshot.paramMap;
    const name = routeParams.get('name');

    this.http.get<any>(this.URL_characters + '?limit=50')
    .subscribe((response) => {
      this.character = response.data.find((char: { nameCharacter: string | null; }) => char.nameCharacter === name);
    });
  };

  setCharacter(name: string) {
    if (name.split(' ').length > 1) {
      this.http.get<any>(this.URL_characters + '?limit=50')
      .subscribe((response) => {
        this.character = response.data.find((char: { nameCharacter: string}) => 
          char.nameCharacter.includes(name.split(' ')[0]) && char.nameCharacter.includes(name.split(' ')[1]));
          if (!this.character) {
            this.router.navigate(['/characters']);
          }
      });
    } else if (name.split(' ').length == 1) {
      this.http.get<any>(this.URL_characters + '?limit=50')
      .subscribe((response) => {
        this.character = response.data.find((char: { nameCharacter: string}) => 
          char.nameCharacter.includes(name.split(' ')[0]));
          if (!this.character) {
            this.router.navigate(['/characters']);
          }
      });
    }
  };

  ngOnInit(): void {
    this.getCharacter();
  }

}
