import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-counter',
  templateUrl: './type-counter.component.html',
  styleUrls: ['./type-counter.component.scss']
})
export class TypeCounterComponent implements OnInit {
  
  @Input() membersCount = {};

  constructor() { }

  ngOnInit(): void {
  }

}
