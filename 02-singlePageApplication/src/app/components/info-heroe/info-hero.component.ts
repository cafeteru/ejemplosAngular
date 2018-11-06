import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Hero, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.css']
})
export class InfoHeroComponent {
  hero: Hero;

  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activateRoute.params.subscribe(params => {
      this.hero = heroesService.getSpecificHero(params['name']);
    });
  }


}
