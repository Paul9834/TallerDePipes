import { Component } from '@angular/core';
import { MyPipePipe } from './pipes/Letras/my-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date1 = '2020/10/27, 23:00';
  date2 = '2020/10/27, 20:04';
  date3 = '2020/10/26, 21:38';
  date4 = '2020/10/25, 21:38';
  date5 = '2020/10/25, 21:38';
  date6 = '2020/05/30, 21:38';
  date7 = '2020/05/27, 21:38';
  num1 = 5;
  var1= 'amigo';
  var2= 'amiga estas muy linda';
  var3= 'miga estas muy linda';
  constructor() {
  }
}
