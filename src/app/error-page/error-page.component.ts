import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  pickedPhoto?: string;

  errorPhotos: string[] = [
    "assets/404Photos/error_01.webp",
    "assets/404Photos/error_02.jpg"
  ];
  constructor() { }

  ngOnInit(): void {
    this.pickedPhoto = this.randomErrorPhoto();
  }

  randomErrorPhoto() {
    let randomIndex = Math.floor(Math.random() * this.errorPhotos.length);
    return this.errorPhotos[randomIndex];
  }
}
