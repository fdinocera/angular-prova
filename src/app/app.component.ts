import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { DadiServiceService } from './servizi/dadi-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title ='Gioco dei dadi'

    nomeUtente = ''

    constructor(private dadiService: DadiServiceService) { }

    ngOnInit(): void {

        new Observable(observer => {
            observer.next('Mario Rossi')
            // let count = 0;

            // setInterval(() => {
            //     observer.next(count);
            //     count++;
            // }
            //     , 1000)

        }).subscribe(data => {
            console.log('observable nome: ' + data)
        })

       //this.nomeUtente = this.dadiService.getNome()





    }
}
