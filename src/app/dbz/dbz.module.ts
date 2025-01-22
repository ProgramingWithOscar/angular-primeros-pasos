import { CommonModule, JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';
import { ListComponent } from './components/list/list.component';
import { DbzComponent } from './pages/main-component';



@NgModule({
  imports: [
    DbzComponent,
    ListComponent,
    FormsModule,
    AddCharacterComponent,
    CommonModule
  ],
  exports: [
    DbzComponent,
    ListComponent,
  ],
  providers: [
    {provide: JsonPipe}
  ]
})
export class DbzModule { }
