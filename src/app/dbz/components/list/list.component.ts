import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports:[
    CommonModule
  ]
})
export class ListComponent {
    @Input()
    public characterList: Character[] = [{
      name: 'Trunks',
      power:10
    }]

    @Output()
    public onDeleteId: EventEmitter<string> = new EventEmitter();

    onDeleteCharacterById(id?: string):void {
      if(!id) return;
      console.log({id})
      this.onDeleteId.emit(id);
    }
}
