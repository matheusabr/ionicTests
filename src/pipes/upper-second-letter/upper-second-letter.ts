import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperSecondLetter',
})
export class UpperSecondLetterPipe implements PipeTransform {
  /**
   * Takes a value and make the second letter uppercase.
   */
  transform(value: string, ...args) {
    return value[1].toUpperCase();
  }
}
