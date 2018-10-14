import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.css']
})
export class InfoHeroComponent {
  hero: Heroe;

  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activateRoute.params.subscribe(params => {
      this.hero = heroesService.getSpecificHeroe(params['name']);
    });
  }


}
