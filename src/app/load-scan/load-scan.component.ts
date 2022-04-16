import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {timeInterval} from "rxjs";

@Component({
  selector: 'app-load-scan',
  templateUrl: './load-scan.component.html',
  styleUrls: ['./load-scan.component.scss']
})
export class LoadScanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/scanResult']);
    }, 15000);
    console.log(timeInterval())
  }
}
