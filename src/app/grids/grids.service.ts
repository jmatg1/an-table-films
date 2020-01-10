import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

export interface FilmsList {
  title: string,
  data: Map<number, Film>
}
export interface Film {
  id: number,
  name: string,
  description: string,
  oscar?: boolean,
  rating?:number,
  feels: number,
  date: Date
}

@Injectable({
  providedIn: 'root'
})
export class GridsService {
  filmSelected = new Subject<Film>()
  filmChanged = new Subject<FilmsList[]>()

  private filmsList: FilmsList[]

  constructor() {
    // this.filmsList
  }

  setFilms (films: FilmsList[]) {
    this.filmsList = films
    this.filmChanged.next(films)
  }
}
