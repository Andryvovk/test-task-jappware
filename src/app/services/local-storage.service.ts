import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getDataFromStorage() {
     const members = JSON.parse(localStorage.getItem('memberList')) || [];
     return members;
  }

  setDataToStorage(member) {
    let membersArr = []
    membersArr = this.getDataFromStorage();
    membersArr.push(member);
    localStorage.setItem('memberList', JSON.stringify(membersArr))
  }
}
