import { Component, OnInit, Input } from '@angular/core';
import { TypeCounter } from 'src/models/type-counter-class';

@Component({
  selector: 'app-type-counter',
  templateUrl: './type-counter.component.html',
  styleUrls: ['./type-counter.component.scss']
})
export class TypeCounterComponent implements OnInit {
  
  @Input() typeCounter: TypeCounter = new TypeCounter();

  constructor() { }

  ngOnInit(): void {
  }

}
