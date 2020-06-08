import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Member } from 'src/models/member-class';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss']
})
export class MemberModalComponent implements OnInit {
  @Input() member: Member;
  @Output() onClose = new EventEmitter();
  @Output() onActivateDeactivate = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  closeModal() {
    this.onClose.emit();
  }

  activateDeactivateMember() {
    this.onActivateDeactivate.emit(this.member)
  }

  deleteMember(uid) {
    this.onDelete.emit(uid)
  }
}
