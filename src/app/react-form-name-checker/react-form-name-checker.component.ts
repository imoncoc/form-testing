import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    });

    this.signupForm.get('name')?.valueChanges.subscribe((value) => {
      console.log('Current name input value: ', value);
    });

    console.log(this.signupForm.get('name')?.value);
  }

  isNameSame(): boolean {
    const currentName = this.signupForm.get('name')?.value;
    return currentName !== this.originalName;
  }

  onSaveChanges() {
    console.log(this.signupForm);
    this.originalName = this.signupForm.get('name')?.value;
  }
}
