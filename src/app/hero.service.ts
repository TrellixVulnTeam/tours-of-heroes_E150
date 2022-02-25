import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

import { Observable, of } from "rxjs";

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: "root",
})
export class HeroService {
  // Returns the mock heroes asynchronously with Observables
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() {}
}
