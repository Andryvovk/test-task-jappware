import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TypeCounterService {

  constructor(private ls: LocalStorageService) { }
  
  private membersCount = {
    activated: 0,
    invited: 0
  }

  getNumberOfMembers() {
    let members = [];
    let activatedMembers = [];
    members = this.ls.getDataFromStorage();
    this.membersCount.invited = members.length
    members.forEach(el => {
      if (el.type === 'activated') {
        activatedMembers.push(el);
      }
    })
    this.membersCount.activated = activatedMembers.length
    console.log(this.membersCount)
    return this.membersCount
  }
}
