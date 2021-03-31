import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor( private dbzService: DbzService) {

  }

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(): void {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.addPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
