import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Film, FilmsList, GridsService } from '../grids.service';
import { faTrophy, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


const titleTable = {
  // id: 'Ид',
  name: 'Название',
  description: 'Описание',
  oscar: 'Оскар',
  oscarCount: 'Оскаров',
  rating: 'Рейтинг',
  feels: 'Сборы',
  date: 'Год'
};

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() films: FilmsList;
  @Input() allDropLists: Array<string>;
  @Input() id: number;

  headTable: Film | {} = {};
  faTrophy = faTrophy;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  search = '';
  sortDate = null;

  constructor(private gridsService: GridsService) { }

  ngOnInit() {
    if (this.films.data.length > 0) {
      const film: Film = this.films.data[0];
      for (const key in film) {
        if (titleTable.hasOwnProperty(key)) {
          this.headTable = {
            ...this.headTable,
            [key]: titleTable[key],
          };
        }
      }
    }
  }

  onClickHeaderTable(type: string) {
    this.sortDate = !this.sortDate;
    this.films.data.sort(
      (a, b) => {
        if (this.sortDate) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
      });
  }

  onClickFilm(film: Film) {
    this.gridsService.filmSelected.next({
      idList: this.id,
      film
    });
  }

  onChangeSearch(event) {
    this.search = event.target.value;
  }


  onDrop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
