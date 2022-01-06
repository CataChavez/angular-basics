import { Injectable } from "@angular/core";
import { Character } from "../dbz.interface";

@Injectable()

export class DbzService{
    
    private _characters: Character[] = [
        { name: 'Goku', power: 15000 },
        { name: 'Vegeta', power: 12000 },
        { name: 'Piccolo', power: 1000 },
        { name: 'Trunks', power: 9000 },
        { name: 'Freeza', power: 8000 },
    ]

    get characters() { 
        return [...this._characters];
    }

    constructor() { }

    add(character: Character) {
        this._characters.push(character);
    }

}