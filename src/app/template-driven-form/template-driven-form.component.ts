import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('form') signupForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.signupForm);
  }

}
