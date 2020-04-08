import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customAsync'
})
export class CustomAsyncPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
