import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxUiColumnsPipe'
})
export class NgxUiColumnsPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter((item) => {
      if (item.hasOwnProperty('hide')) {
        return !!!item.hide;
      } else {
        return item;
      }
    });
  }

}
