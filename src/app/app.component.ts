import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from "./shared/data-storage.service";
import { GridsService } from "./grids/grids.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  loading: boolean = true
  private filmChangedSubscription: Subscription

  constructor(private dataStorageService: DataStorageService,
              private gridsService: GridsService) {
  }
  ngOnInit(): void {
    this.dataStorageService.fetchFilms()
    this.filmChangedSubscription = this.gridsService.filmChanged.subscribe(films => {
      this.loading = films.length === 0
      console.log(films)
      
    })
  }
  ngOnDestroy(): void {
    this.filmChangedSubscription.unsubscribe()
  }
}
