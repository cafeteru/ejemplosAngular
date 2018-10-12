import {Component} from '@angular/core';
import {visit} from '@angular/compiler-cli/src/ngtsc/util/src/visitor';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {
  phrase: Phrase;
  visible: boolean;

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
