import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  inputlink = false;
  termscheckbox = false;
  myForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })
  }

  ngOnInit(): void {
  }

  get m(){
    return this.myForm.controls;
  }

  onSubmit(){
    console.log(this.myForm.value);
  }
}
