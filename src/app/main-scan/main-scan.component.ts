import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HTTPService} from "../services/http.service";

@Component({
  selector: 'app-main-scan',
  templateUrl: './main-scan.component.html',
  styleUrls: ['./main-scan.component.scss']
})
export class MainScanComponent implements OnInit {


  constructor(private router: Router, private httpService: HTTPService) {
  }

  ngOnInit(): void {

  }

  sendScanUrl() {
    this.httpService.getScanResult().subscribe(data => {
      console.log(data);
      return data;
    });
  }
}
