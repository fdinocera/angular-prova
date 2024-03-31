import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mycomp1Component } from './components/mycomp1/mycomp1.component';
import { Mycomp2Component } from './components/mycomp2/mycomp2.component';
import { BtnLancioComponent } from './components/btn-lancio/btn-lancio.component';
import { ClassificaGiocatoreComponent } from './components/classifica-giocatore/classifica-giocatore.component';
import { ClassificaComputerComponent } from './components/classifica-computer/classifica-computer.component';

@NgModule({
  declarations: [
    AppComponent,
    Mycomp1Component,
    Mycomp2Component,
    BtnLancioComponent,
    ClassificaGiocatoreComponent,
    ClassificaComputerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
