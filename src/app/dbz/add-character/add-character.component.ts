import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent implements OnInit {

  @Input() new: Character = {
    name: '',
    power: 0,
  }
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(
    private dbzService: DbzService
  ) { }


  ngOnInit(): void {
  }

  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }
    this.dbzService.add(this.new);
    this.new = {
      name: '',
      power: 0
    };    
  }

}
