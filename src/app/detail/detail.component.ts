import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilmSelected, GridsService } from '../grids/grids.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  filmSelected: FilmSelected;
  private filmSubscription: Subscription;

  constructor(private gridsService: GridsService,
              private dataStorage: DataStorageService) {
  }

  ngOnInit() {
    this.filmSubscription = this.gridsService.filmSelected.subscribe((filmSelected: FilmSelected) => {
      this.filmSelected = filmSelected;
    });
  }

  ngOnDestroy(): void {
    this.filmSubscription.unsubscribe();
  }

  onEditFeels() {
    const {id, name, feels} = this.filmSelected.film;
    const result = prompt(`Изменить сборы фильма ${name}`, String(feels));

    if (result !== null) {
      this.dataStorage.editFilm({
        id,
        feels: Number(result)
      });
    }
  }
}
