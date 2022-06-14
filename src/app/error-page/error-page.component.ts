import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  pickedPhoto!: number;

  constructor() {}

  ngOnInit(): void {
    this.randomErrorPhoto();
  }
  randomErrorPhoto() {
    return this.pickedPhoto = Math.random();
  }
}
