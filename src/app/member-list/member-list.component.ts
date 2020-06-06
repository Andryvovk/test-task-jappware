import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Member } from 'src/interfaces/member-interface';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  constructor(private ls: LocalStorageService) { }
  
  members: Member[] = [];
  member: Member;
  isModalOpen: boolean = false;

  ngOnInit(): void {
     this.getMembers();
  }
  
  getMembers() {
    this.members = this.ls.getDataFromStorage();
    console.log(this.members)
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
    this.isModalOpen = false;
  }
  
  deleteMember($event) {
    this.ls.deleteMember($event);
    this.isModalOpen = false;
  }
}
