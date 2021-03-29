import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <div class="text-center">
      <h1>{{ title }}</h1>
      <h3>La base es <strong>{{ base }}</strong></h3>
      <hr>
      <button (click)="calcular(true)">+{{ base }}</button>
      <span>{{ numero }}</span>
      <button (click)="calcular(false)">-{{ base }}</button>
    </div>

  `
})
export class ContadorComponent {
  public title : string = 'Contador';
  public numero: number = 0;
  public base  : number = 5;

  calcular = (operation: boolean): void =>  {
    operation ? this.numero += this.base  : this.numero -= this.base;
  }
}
