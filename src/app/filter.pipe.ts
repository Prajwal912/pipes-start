import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value
    }
    let empArr = [];
    for (let item of value) {
      if (item[propName] === filterString) {
        empArr.push(item)
      }
    }
    return empArr;


  }

}

// if (item[propName] === filterString) ==== if (item.status === filterString) both are equal
