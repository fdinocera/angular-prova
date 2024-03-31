import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DadiServiceService {
    private bs = new BehaviorSubject<string>('')
    lancioCorrente = this.bs.asObservable()
    update(lancio: string) {
        this.bs.next(lancio)
    }


    private bs2 = new BehaviorSubject<number>(0)
    lancioDado = this.bs2.asObservable()
    getLancio() {
        const n = Math.floor(Math.random() * 6 + 1)
        this.bs2.next(n)
    }
}
