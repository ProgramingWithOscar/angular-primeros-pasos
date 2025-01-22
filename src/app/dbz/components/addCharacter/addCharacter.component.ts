import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-addCharacter',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css'],
  imports: [
    FormsModule, CommonModule
  ]
})
export class AddCharacterComponent  {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'fff',
    power: 2
  }

  emitCharacter():void {
    console.log(this.character)
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)
    this.character = {
      name : '',
      power : 0,
    }
  }
}
