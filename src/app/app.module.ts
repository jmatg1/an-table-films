import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { GridComponent } from './grids/grid/grid.component';
import { GridsComponent } from './grids/grids.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    GridComponent,
    GridsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
