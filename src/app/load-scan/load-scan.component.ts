import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {timeInterval} from "rxjs";
import {HTTPService} from "../services/h-t-t-p.service";

@Component({
  selector: 'app-load-scan',
  templateUrl: './load-scan.component.html',
  styleUrls: ['./load-scan.component.scss']
})
export class LoadScanComponent implements OnInit {

  constructor(public router: Router, private httpService: HTTPService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/scan-results']);
    }, 15000);
    this.checkScanStatus();
  }
  
  checkScanStatus() {
    this.httpService.getScanStatus().subscribe(data => {
      console.log(data);
      return data;
    });
  }



  // checkScan(): void {
  //   while(this.http.getScanState() != "FINISHED") { //pluck("state")?
  //     setTimeout(() => {}, 3000);
  //   }
  //   this.router.navigate(['/scan-results']);
  // }

}
