import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Member } from 'src/interfaces/member-interface';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UIDService {

  constructor(private ls: LocalStorageService) { }

  createUID(): number {
    if(!localStorage.getItem('memberList')) {
      console.log('Im here')
      return 1;
    } else {
      console.log('ls is not empty')
      let members: Member[] = this.ls.getDataFromStorage();
      let UIDArray: number[] = []
      members.forEach(element => {
        UIDArray.push(element.uid);
      });
      let result = this.findMaxUID(UIDArray)
      console.log(result++)
      return result++;
    }
  }

  protected findMaxUID(numbers) {
    return Math.max.apply(null, numbers);
  }
}
