import { Component, OnInit } from '@angular/core';
import { Books} from '../modelos.model'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  books: Books[] = [
    {
      title: 'Todos los hombres del rey',
      author: 'Laura Gallego',
      description:
        'Una historia de amor verdadero que continúa el universo de Todas las hadas del reino. Felicia ha alcanzado su final feliz y ha vuelto a casa de la mano de su príncipe desencantado. Ha pagado por ello un alto precio: renunciara la protección de su hada madrina. ',
      imageUrl: './assets/todos-los-hombres.jpg',
    },
    {
      title: 'Aunque llueva en primavera',
      author: 'Cherry Chic',
      description:
        'Existe un lugar en el mundo, entre pastos verdes, ríos helados y calles empedradas, en el que el sol no sale mucho y, aun así, congrega a los habitantes más cálidos que puedas imaginar.',
      imageUrl: './assets/aunque-llueva.jpg',
    },
    {
      title: 'Un te quiero a destiempo',
      author: 'Susana Rubio',
      description:
        'Gabriela está enamorada, pero de repente todo se rompe en mil pedazos. El dolor, la culpa, y los recuerdos la persiguen, y acude a sus amigas, que son su mejor refugio. Parece que nada la deja avanzar, hasta que un día aparece un rayo de luz en su vida.',
      imageUrl: './assets/un-te-quiero.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
