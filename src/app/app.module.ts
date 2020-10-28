import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './pipes/Letras/app-routing.module';
import { AppComponent } from './app.component';
import { MyPipePipe } from './pipes/Letras/my-pipe.pipe';
import { PipeElevadoPipe } from './pipes/Potencia/pipe-elevado.pipe';
import { Date1Pipe } from './pipes/Ejercicio-1/date1.pipe';
import { Date2Pipe } from './pipes/Ejercicio-2/date2.pipe';
import { Date3Pipe } from './pipes/Ejercicio-3/date3.pipe';
import { Date4Pipe } from './pipes/Ejercicio-4/date4.pipe';
import { Date5Pipe } from './pipes/Ejercicio-5/date5.pipe';
import { Date6Pipe } from './pipes/Ejercicio-6/date6.pipe';
import { Date7Pipe } from './pipes/Ejercicio-7/date7.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    PipeElevadoPipe,
    Date1Pipe,
    Date2Pipe,
    Date3Pipe,
    Date4Pipe,
    Date5Pipe,
    Date6Pipe,
    Date7Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
