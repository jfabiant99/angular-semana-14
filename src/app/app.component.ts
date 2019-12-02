import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Heroes que vuelan';

  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.heroes = this.heroes.concat({ name, canfly: this.canFly });
  }

  reset() { this.heroes = []; }
}
