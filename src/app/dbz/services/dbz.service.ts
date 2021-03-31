import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Veguetta',
      poder: 8000
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  addPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }

  constructor() {
    console.log('Servicio inicializado');
  }

}
