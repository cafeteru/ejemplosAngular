import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/SpotifyData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() song: Item;

  constructor() {
    this.song = {} as Item;
  }

  ngOnInit(): void {
  }

}
