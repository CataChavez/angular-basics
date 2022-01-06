import { Component, OnInit } from '@angular/core';
import { Character } from '../dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {

  new: Character = {
    name: '',
    power: 0,
  }
  
  constructor(
  ) { }

  ngOnInit(): void {
  }
  


}
