import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

console.log(uuid())
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
    name: 'Krillin',
    power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
];

 onNewCharacter(Character: Character): void {
  const newCharacter: Character = {
    id: uuid(),
    ...Character
  }

  this.characters.push(newCharacter)
 }
//  onDeletedCharacter(index: number): void {
//   this.characters.splice(index)
//  }

 deleteCharacterById(id:string):void {
  this.characters = this.characters.filter(character => character.id !== id)
 }

}
