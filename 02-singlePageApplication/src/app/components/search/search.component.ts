import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: any = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      params => {
        this.heroes = this.heroesService.searchHeroes(params['name']);
      }
    );
  }

}
