import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {

 // @Input() characters: Character[] = [];

  get characters() {
    return this.dbzService.characters;
  }
  constructor(
    public dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

}
