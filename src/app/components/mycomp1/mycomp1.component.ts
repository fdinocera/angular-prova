import { Component, OnInit } from '@angular/core';
import { BtnLancioComponent } from '../btn-lancio/btn-lancio.component';
import { Subscription, interval } from 'rxjs';
import { DadiServiceService } from 'src/app/servizi/dadi-service.service';


@Component({
    selector: 'app-mycomp1',
    templateUrl: './mycomp1.component.html',
    styleUrls: ['./mycomp1.component.scss']
})
export class Mycomp1Component implements OnInit {
    nomeUtente = 'asdf'

    constructor(private dadiService: DadiServiceService) { }

    ngOnInit(): void {
    }
}
