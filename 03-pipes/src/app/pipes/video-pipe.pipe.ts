import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoPipe'
})
export class VideoPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
