import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  pi = Math.PI;
  numberPercent = 0.223;
  money = 1234.5;
  heroe = {
    nombre: 'Peter Parker',
    clave: 'Spider-man',
    edad: '22'
  };

  promise = new Promise((res, error) => {
    setInterval(() => res('Llego la promesa'), 3000);
  });

  date = new Date();

  capitalizedLet = 'nombre apeLLIdo Apllido';

  video = 'https://www.youtube.com/watch?v=Tv5oUWy6fso';
}
