import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Member } from 'src/interfaces/member-interface';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss']
})
export class MemberModalComponent implements OnInit {
  @Input() member: Member;
  @Output() onClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onCloseModal() {
    this.onClose.emit();
  }
}
