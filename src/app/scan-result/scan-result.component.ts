import {Component, OnInit} from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.scss']
})
export class ScanResultComponent implements OnInit {
  result: number = 0;
  color: string = "";
  showModal = false;


  nameFormControl = new FormControl("", [
    Validators.required
  ]);

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);

  phoneFormControl = new FormControl("", [
    Validators.minLength(10)
  ]);

  constructor() {
  }

  ngOnInit(): void {
    this.result = Math.floor(Math.random() * 100);
    this.setResultColor(this.result)
  }

  setResultColor(result: number) {
    if (result > 80) {
      this.color = "green-color"
    } else if (result > 60) {
      this.color = "light-green-color"
    } else if (result > 40) {
      this.color = "yellow-color"
    } else if (result > 20) {
      this.color = "orange-color"
    } else {
      this.color = "red-color"
    }
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

  sendEmail(){
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value
    }
    console.log(user)
  }



}
