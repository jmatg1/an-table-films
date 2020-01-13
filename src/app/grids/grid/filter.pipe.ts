import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../grids.service';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Film>, filterString: string, propName: string): any {
    if (value.length === 0 || filterString.length === 0) {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName].search(filterString) != -1) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
