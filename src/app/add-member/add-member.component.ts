import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/interfaces/member-interface';
import { LocalStorageService } from '../services/local-storage.service';
import { MemberListComponent } from '../member-list/member-list.component';
import { UIDService } from '../services/uid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  
  addMemberForm: FormGroup;
  member: Member = new Member();
  constructor(private fb: FormBuilder,
              private ls: LocalStorageService,
              private uid: UIDService,
              private router: Router) { }

  ngOnInit(): void {
    this.initAddMemberForm();
  }

  initAddMemberForm() {
    this.addMemberForm = this.fb.group({
      "firstName": ["", [Validators.required]],
      "lastName": ["", [ Validators.required]],
  });
  }

  addMember() {
    this.member.uid = this.uid.createUID();
    console.log(this.uid.createUID())
    this.member.firstName = this.addMemberForm.value.firstName;
    this.member.lastName = this.addMemberForm.value.lastName;
    this.member.type = 'pending';
    this.ls.setDataToStorage(this.member);
    this.router.navigate(['member-list'])
  }

}
