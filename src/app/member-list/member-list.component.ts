import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Member } from 'src/models/member-class';
import { TypeCounterService } from '../services/type-counter.service';
import { TypeCounter } from 'src/models/type-counter-class';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  constructor(private ls: LocalStorageService,
              private counter: TypeCounterService) { }
  
  members: Member[] = [];
  member: Member;
  isModalOpen: boolean = false;
  typeCounter: TypeCounter = new TypeCounter();

  ngOnInit(): void {
     this.getMembers();
     this.getNumberOfMembers();
  }
  
  getMembers() {
    this.members = this.ls.getDataFromStorage();
  }

  getNumberOfMembers() {
    this.typeCounter = this.counter.getNumberOfMembers();
  }  

  setBoxShadowColor(type) {
    switch (type) {
      case 'pending':
        return '#696969'
        break;
      case 'activated': 
        return '#3CB371'
        break;
      case 'deactivated':
        return '#ff1919'
        break;  
      default:
        break;
    }
  }

  showModal(member) {
    this.member = member;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false
  }

  activateDeactivateMember($event) {
    const uid = $event.uid;
    const type = $event.type;
    this.ls.activateDeactivateMember(type, uid);
    this.getMembers();
    this.getNumberOfMembers();
    this.isModalOpen = false;
  }
  
  deleteMember($event) {
    this.ls.deleteMember($event);
    this.getMembers();
    this.getNumberOfMembers();
    this.isModalOpen = false;
  }

  clearList() {
    this.ls.clearList();
    this.getNumberOfMembers();
    this.getMembers();
  }
}
