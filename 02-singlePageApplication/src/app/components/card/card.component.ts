import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() hero: any = {};
  @Input() id: number;

  @Output() selectedHero: EventEmitter<string>;

  constructor() {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit() {
  }

  showHeroe() {
    this.selectedHero.emit(this.hero.name);
  }

}
