import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.css']
})
export class MyFormsComponent implements OnInit {


  get alterEmail(){
    return this.profileForm.get('alterEmail') as FormArray; 
  }

  addEmail(){
    this.alterEmail.push(this.fb.control(''));
  }

  remove(i : number){
    this.alterEmail.removeAt(i);
  }

  get alterAddress(){
    return this.profileForm.get('alterAddress') as FormArray;
  }
    
  addAddress(){
    this.alterAddress.push(this.fb.group({
      city : [''],
      state : [''],
      country : ['']
    }));
  }

  removeAddress(i){
    this.alterAddress.removeAt(i);
  }

  profileForm = this.fb.group({
    firstName : [''],
    lastName : [''],
    email : [''],
    address : this.fb.group({
      city : [''],
      state : [''],
      country : ['']
    }),
    alterEmail : this.fb.array([]),
    alterAddress : this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
