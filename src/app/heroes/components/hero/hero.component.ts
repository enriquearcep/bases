import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    public name:    string = 'ironman';
    public age:     number = 45;
    public nameChanged: boolean = false;
    public ageChanged: boolean = false;

    get capitalizeName(): string {
        return this.name.toUpperCase();
    }

    getHeroDescription(): string {
        return `${ this.name} - ${ this.age }`;
    }

    changeHero(): void {
        this.name = 'Spiderman';
        this.nameChanged = true;
    }

    changeAge(): void {
        this.age = 39;
        this.ageChanged = true;
    }

    reset(): void {
        this.name = 'ironman';
        this.age = 45;
        this.ageChanged = false;
        this.nameChanged = false;
    }
}
