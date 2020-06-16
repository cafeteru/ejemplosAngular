import {EventEmitter} from "@angular/core";

export class Jugador2 {
  hp: number;
  hpCambia: EventEmitter<number>;

  constructor() {
    this.hp = 100;
    this.hpCambia = new EventEmitter<number>();
  }

  recibeDanio(danio: number) {
    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp -= danio;
    }
    this.hpCambia.emit(this.hp);
  }
}
