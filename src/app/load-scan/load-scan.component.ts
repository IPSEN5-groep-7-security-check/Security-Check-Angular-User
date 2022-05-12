import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {timeInterval} from "rxjs";

@Component({
  selector: 'app-load-scan',
  templateUrl: './load-scan.component.html',
  styleUrls: ['./load-scan.component.scss']
})
export class LoadScanComponent implements OnInit {

  constructor(private router: Router,
              private http: BESTAATNOGNIETINDEZEBRANCH) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/scan-results']);
    }, 15000);
    console.log(timeInterval())
  }

  checkScan(): void {
    while(this.http.getScanState() != "FINISHED") { //pluck("state")?
      setTimeout(() => {}, 3000);
    }
    this.router.navigate(['/scan-results']);
  }

}
