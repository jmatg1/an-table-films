import { Injectable } from '@angular/core';
import * as firstDataTable from '../data/first.json';
import * as secondDataTable from '../data/second.json';
import { Film, GridsService } from '../grids/grids.service';
import { Functions } from './functions';
import set = Reflect.set;
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private gridsService: GridsService,
               private http: HttpClient) {
  }
  private handleError(er: HttpErrorResponse) {
    const errorMessage = 'An error occurred!';
    return throwError(errorMessage);
  }

  fetchFilms() {
    setTimeout(() => {
      // const firstTable = Functions.arrayToMap((firstDataTable as any).default)
      // const secondTable = Functions.arrayToMap((secondDataTable as any).default){
      const firstTable = (firstDataTable as any).default;
      const secondTable = (secondDataTable as any).default;

      const films = [
        {
          title: 'Топ 100 фильмов',
          data: firstTable
        },
        {
          title: 'Топ 100 оскороностных фильмов',
          data: secondTable
        }
      ];

      this.gridsService.setFilms(films);
    } , 100);
  }

  editFilm(filmEdited: {id: number, feels: number}) {
    this.http.post('https://google.com/edit', {
      ...filmEdited
      })
      .pipe(catchError(this.handleError), tap(response => {
        // ...
     }))
      .subscribe(response => {
      }, er => {
        console.log(er);
      });
  }
}

