import { Component } from '@angular/core';
import { MyPipePipe } from './Module-Pipes/Letras/my-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date1 = '2020/10/27, 22:00';
  date2 = '2020/10/27, 19:00';
  date3 = '2020/10/26, 21:38';
  date4 = '2020/10/25, 21:38';
  date5 = '2020/10/25, 21:38';
  date6 = '2020/02/30, 21:38';
  date7 = '2020/02/27, 21:38';
  num1 = 10;
  var1= 'amiga';
  var2= 'amiga estas muy linda';
  var3= 'miga estas muy linda';
}
