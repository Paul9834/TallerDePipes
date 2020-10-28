import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    var ready: boolean = true
    let answer = " ";
    for (let i = 0; i < value.length; i++) {
      if (value[i] == " ") {
        answer += " ";
      } else {
        if (ready) {
          answer += value[i].toUpperCase();
          ready = false;
        } else {
          answer += value[i].toLowerCase();
          ready = true;
        }
      }
    }
    return answer;
  }
}
