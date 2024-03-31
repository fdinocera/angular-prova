import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DadiServiceService } from 'src/app/servizi/dadi-service.service';

@Component({
    selector: 'app-btn-lancio',
    templateUrl: './btn-lancio.component.html',
    styleUrls: ['./btn-lancio.component.scss']
})
export class BtnLancioComponent {

    tuoLancio!: number;
    arrayLanci: number[] = [];
    totalePunti: number = 0;

    pcLancio!: number;
    pcArrayLanci: number[] = [];
    pcTotalePunti: number = 0;

    sounds: string[] = [
        'assets/sounds/lancio1.mp3',
        'assets/sounds/lancio2.mp3',
        'assets/sounds/lancio3.mp3',
        'assets/sounds/lancio4.mp3'
    ];

    constructor(private serviceDadi: DadiServiceService) { }

    lancioNelComponent = ''
    obs = this.serviceDadi.lancioCorrente.subscribe(data => {
        this.lancioNelComponent = data;
    })

    lancioNelService = 0
    obs2 = this.serviceDadi.lancioDado.subscribe(data => {
        this.lancioNelService = data;
    })

    lancio() {
        this.tuoLancio = Math.floor(Math.random() * 6 + 1);
        this.arrayLanci.push(this.tuoLancio);
        this.totalePunti = this.arrayLanci.reduce((acc, curValue) => acc + curValue);

        const sound = Math.floor(Math.random() * 4)
        const audio = new Audio(this.sounds[sound]);
        audio.play();

        this.pcLancio = Math.floor(Math.random() * 6 + 1);
        this.pcArrayLanci.push(this.pcLancio);
        this.pcTotalePunti = this.pcArrayLanci.reduce((acc, curValue) => acc + curValue);

        this.serviceDadi.update('nuovo lancio: ' + this.tuoLancio)
        this.serviceDadi.getLancio();
    }
}