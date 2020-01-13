import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilmsList, GridsService } from './grids.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.scss']
})
export class GridsComponent implements OnInit, OnDestroy {
  filmsList: FilmsList[] = [];
  allDropLists: string[] = [];
  private filmChangedSubscription: Subscription;

  constructor(private gridsService: GridsService) { }

  ngOnInit() {
    this.filmChangedSubscription = this.gridsService.filmChanged.subscribe(filmsList => {
      this.filmsList = filmsList;
      this.allDropLists = [...this.filmsList.map((_, i) => String(i))];
    });
  }

  ngOnDestroy(): void {
    this.filmChangedSubscription.unsubscribe();
  }
}
