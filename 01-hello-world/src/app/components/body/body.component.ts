import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {
  phrase: Phrase;
  visible: boolean;
  list: string[] = ['1', '2', '3'];

  constructor() {
    this.visible = true;
    this.phrase = new Phrase();
    this.phrase.author = 'Charles Chaplin';
    this.phrase.message = 'Todos somos aficionados. La vida es tan corta que no da para más. ';
  }

  changeVisible() {
    this.visible = !this.visible;
  }
}

class Phrase {
  message: string;
  author: string;
}
