import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private route: Router
  ) {
  }

  ngOnInit() {
  }

  searchHero(text: string) {
    this.route.navigate(['/heroes/search/', text]);
  }

}
