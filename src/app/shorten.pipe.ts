import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
   value.charAt(0).toUpperCase() + value.slice(1);
  }

}
