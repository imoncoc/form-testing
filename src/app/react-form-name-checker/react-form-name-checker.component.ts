import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form-name-checker',
  templateUrl: './react-form-name-checker.component.html',
  styleUrls: ['./react-form-name-checker.component.css'],
})
export class ReactFormNameCheckerComponent implements OnInit {
  signupForm!: FormGroup;
  originalName = 'Imon';

  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(this.originalName, [Validators.required]),
      hobbies: new FormArray([]),
      quantity: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.pattern(/^[1-9]\d*$/),
      ]),
      amount: new FormControl(null, [Validators.required, Validators.min(0)]),
    });

    this.signupForm.get('name')?.valueChanges.subscribe((value) => {
      console.log('Current name input value: ', value);
    });

    console.log(this.signupForm.get('name')?.value);
  }

  get hobbies() {
    return this.signupForm.get('hobbies') as FormArray;
  }

  isNameSame(): boolean {
    const currentName = this.signupForm.get('name')?.value;
    return currentName !== this.originalName;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    this.hobbies.push(control);
  }

  onSaveChanges() {
    console.log(this.signupForm);
    this.originalName = this.signupForm.get('name')?.value;
  }
}
