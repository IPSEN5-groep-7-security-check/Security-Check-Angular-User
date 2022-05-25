import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HTTPService} from "../services/http.service";

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.css']
})
export class ScanResultComponent implements OnInit {

  constructor(private router: Router, private httpService: HTTPService) { }

  ngOnInit(): void {
    this.securityScanResult()
  }

  securityScanResult(){
    this.httpService.getScanResult().subscribe(data => {
      console.log(data);
      return data;
    });
  }

}
