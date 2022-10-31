/** Un Controlador o Controller que es donde se encuentra la lógica, (app.component.ts), ese archivo debe incluir una clase y esta es la que va a contener las propiedades que se van a usar en la vista (HTML) y los métodos que será las acciones que se ejecutarán en la vista. En este archivo de lógica también se incluye una metadata, que es definida con un decorador, que identifica a Angular como un componente. */
import { Component } from '@angular/core';

@Component({
  //Se entiende como donde aparezca lo que indica selector mostrar o renderizar el template - vista app.component.html con tal estilo.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-front';
}
