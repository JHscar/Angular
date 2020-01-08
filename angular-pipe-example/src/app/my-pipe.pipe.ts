import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value, args);
    if (args.length > 0) {
      return `${value}-pipe-${args.join('-')}`;
    }
    return `${value}-pipe`;
  }

}
