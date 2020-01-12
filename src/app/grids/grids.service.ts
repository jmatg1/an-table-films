import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

export interface FilmsList {
  title: string,
  data: Array<Film>
}
export interface Film {
  id: number,
  name: string,
  description: string,
  oscar?: boolean,
  oscarCount?: number,
  rating?:number,
  feels: number,
  date: Date
}

export interface FilmSelected {
  idList: number,
  film: Film
}
@Injectable({
  providedIn: 'root'
})

export class GridsService {
  filmSelected = new Subject<FilmSelected>()
  filmChanged = new BehaviorSubject<FilmsList[]>([])

  private filmsList: FilmsList[]

  constructor() {
    // this.filmsList
  }

  setFilms (films: FilmsList[]) {
    this.filmsList = films
    this.filmChanged.next(films)
  }
}
