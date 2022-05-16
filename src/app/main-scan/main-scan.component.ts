import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {domainNameValidator} from "../validators/domain-name-validator";

@Component({
  selector: 'app-main-scan',
  templateUrl: './main-scan.component.html',
  styleUrls: ['./main-scan.component.scss']
})
export class MainScanComponent implements OnInit {
  termsCheckbox: boolean = false;
  userName: String = '';
  urlForm: FormGroup;
  inputLink: boolean = false;

  prefix: Array<String> = ['www.', 'http://www.', 'https://www.', '']

  constructor(private formBuilder: FormBuilder) {
    this.urlForm = formBuilder.group({
      url: ['', [Validators.required, domainNameValidator()]]
    })
  }

  get m(){
    return this.urlForm.controls;
  }

  checkValidation() {
    console.log(this.userName)

  }

  onSubmit() {
    console.log(this.urlForm.value);
  }

  ngOnInit(): void {
  }
}
