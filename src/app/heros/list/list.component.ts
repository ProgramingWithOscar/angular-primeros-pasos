import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Iroman', 'Hulk', 'Thor'];
  public deletedHeroe?: string;

removeLastHeroe(): void {
 this.deletedHeroe = this.heroNames.pop();
}
}
