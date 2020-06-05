import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/interfaces/member-interface';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  
  addMemberForm: FormGroup;
  member: Member[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initAddMemberForm()
  }

  initAddMemberForm() {
    this.addMemberForm = this.fb.group({
      "firstName": ["", [Validators.required]],
      "lastName": ["", [ Validators.required]],
  });
  }

  addMember() {
    this.member['firstName'] = this.addMemberForm.value.firstName;
    this.member['lastName'] = this.addMemberForm.value.lastName;
    this.member['type'] = 'pending';
    console.log(this.member)
  }

}
