import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HTTPService} from "../services/h-t-t-p.service";

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss'],
})
export class LoadingPageComponent implements OnInit {
  constructor(public router: Router, private httpService: HTTPService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['results']);
    }, 22000);
  }
}
