import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero.ts';
import {HEROES} from '../mock-heroes.ts';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
   heroes = HEROES;
   selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
