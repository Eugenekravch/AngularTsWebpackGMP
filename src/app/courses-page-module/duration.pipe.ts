import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    const hours = Math.floor((value / 60));
    const minutes = value - (hours * 60);
    const resultHours = hours > 0 ? hours + 'h ' : ''

    return resultHours + minutes + 'min';
  }

}
