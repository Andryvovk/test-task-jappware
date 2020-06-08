import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TypeCounter } from 'src/models/type-counter-class';

@Injectable({
  providedIn: 'root'
})
export class TypeCounterService {

  constructor(private ls: LocalStorageService) { }
  
  private typeCounter: TypeCounter = new TypeCounter();

  getNumberOfMembers() {
    let members = [];
    let activatedMembers = [];
    members = this.ls.getDataFromStorage();
    this.typeCounter.invited = members.length
    members.forEach(el => {
      if (el.type === 'activated') {
        activatedMembers.push(el);
      }
    })
    this.typeCounter.activated = activatedMembers.length
    return this.typeCounter;
  }
}
