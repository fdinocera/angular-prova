import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-classifica-giocatore',
    templateUrl: './classifica-giocatore.component.html',
    styleUrls: ['./classifica-giocatore.component.scss']
})


//componente FIGLIO
export class ClassificaGiocatoreComponent {

    @Input() valoreLancio!: number;
    @Input() arrayLanci!: number[];
    @Input() totalePunti!: number;
    @Output() classificaAggiornata = new EventEmitter<string>();

    constructor() {
        console.log(this.arrayLanci);
    }

    getData(event: KeyboardEvent) {

        if (event.key == 'Enter') {
            let target = event.target as HTMLInputElement;
            //this.classificaAggiornata.emit("Classifica aggiornata correttamente!");
            this.classificaAggiornata.emit(target.value);
        }
    }
}