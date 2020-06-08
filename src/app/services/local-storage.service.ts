import { Injectable } from '@angular/core';
import { Member } from 'src/models/member-class';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  membersArr: Member[] = [];

  getDataFromStorage() {
     const members = JSON.parse(localStorage.getItem('memberList')) || [];
     this.membersArr = members;
     return members;
  }

  setDataToStorage(member) {
    this.membersArr = this.getDataFromStorage();
    this.membersArr.push(member);
    localStorage.setItem('memberList', JSON.stringify(this.membersArr));
  }

  activateDeactivateMember(type, uid) {
    this.membersArr.forEach((el) => {
        if (el.uid === uid ) {
          console.log(el.type)
          switch (type) {
            case 'pending':
              el.type = 'activated'
              break;
            case 'activated': 
              el.type = 'deactivated'
              break;
            case 'deactivated': 
              el.type = 'activated'
              break;
            default:
              break;
          }
        }
    })
    localStorage.setItem('memberList', JSON.stringify(this.membersArr));
  }

  deleteMember(uid) {
    this.membersArr.forEach((el, i) => {
      if (el.uid === uid) {
        this.membersArr.splice(i, 1)
      }
    });
    localStorage.setItem('memberList', JSON.stringify(this.membersArr))
  }

  clearList() {
    localStorage.removeItem('memberList');
  }
}
