import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  hero: string = '';
  deleteHero: string = '';

  deletedHero() {
    this.deleteHero = this.heroes.shift() || '';    
  }

}
