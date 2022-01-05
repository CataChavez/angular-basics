import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <div class="container">
            <h1>{{ title }}</h1>
            <h3> La base es <strong> {{ base }} </strong></h3>
            <button (click)="accummulate(base)"> + {{ base }} </button>
            <span> {{ number }} </span>
            <button (click)="accummulate(- base)"> - {{ base }} </button>
        </div>
    `,
})


export class CounterComponent {
  title: string = 'Contador App';
  number: number = 0;
  base: number = 5;

  accummulate(value: number): void { 
    this.number += value;
  }
}