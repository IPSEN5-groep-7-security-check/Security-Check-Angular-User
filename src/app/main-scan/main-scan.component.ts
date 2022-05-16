import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  urlRegEx =
    '^[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?\b(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?';

  // suffix: Array<String> = ['.com', '.net', '.co', '.nl'];
  // prefix: Array<String> = ['www.', 'http://www.', 'https://www.', '']

  constructor(private formBuilder: FormBuilder) {
    this.urlForm = formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(this.urlRegEx)]]
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
