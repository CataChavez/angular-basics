import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html",
})

export class HeroeComponent{
    name: string = "Ironman";
    age: number = 45;

    get capitalizadeName(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} is ${this.age} years old`;
    }

    changeName():void {
        this.name = "Thor";
    }

    changeAge(): void { 
        this.age = 35;
    }
}