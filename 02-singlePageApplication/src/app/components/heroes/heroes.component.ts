import {Component, OnInit} from '@angular/core';
import {Hero, HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroesService: HeroesService,
    private route: Router
  ) {

  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  showHero(name: string) {
    this.route.navigate(['/hero/', name]);
  }

}
