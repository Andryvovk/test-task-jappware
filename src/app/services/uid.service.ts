import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Member } from 'src/models/member-class';

@Injectable({
  providedIn: 'root'
})
export class UIDService {

  constructor(private ls: LocalStorageService) { }

  createUID(): number {
    if(!localStorage.getItem('memberList')) {
      return 1;
    } else {
      let members: Member[] = this.ls.getDataFromStorage();
      let UIDArray: number[] = []
      members.forEach(element => {
        UIDArray.push(element.uid);
      });
      let result = this.findMaxUID(UIDArray)
      return result++;
    }
  }

  protected findMaxUID(numbers) {
    return Math.max.apply(null, numbers);
  }
}
