import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classifica-computer',
  templateUrl: './classifica-computer.component.html',
  styleUrls: ['./classifica-computer.component.scss']
})
export class ClassificaComputerComponent {

  @Input() valoreLancio!: number;
  @Input() arrayLanci!: number[];
  @Input() totalePunti!: number;
}
