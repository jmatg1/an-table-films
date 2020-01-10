import { Injectable } from '@angular/core'
import * as firstDataTable from '../data/first.json'
import * as secondDataTable from '../data/second.json'
import { Film, GridsService } from "../grids/grids.service";

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor (private gridsService: GridsService) {
  }

  fetchFilms () {
    setTimeout(() => {
      const firstTable = Functions.arrayToMap((firstDataTable as any).default)
      const secondTable = Functions.arrayToMap((secondDataTable as any).default)

      const films = [
        {
          title: 'Топ 100 фильмов',
          data: firstTable
        },
        {
          title: 'Топ 100 оскороностных фильмов',
          data: secondTable
        }
      ]

      this.gridsService.setFilms(films)
    } ,400)
  }
}

