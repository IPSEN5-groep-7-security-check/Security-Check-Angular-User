import { HTTPService } from '../services/http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Report } from '@prisma/client';
import { Observable, Subscription } from 'rxjs';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.css'],
})
export class ScanResultComponent implements OnInit, OnDestroy {
  scanSub?: Subscription;
  score?: number;
  color: string = '';
  showModal = false;
  successMessage = true;

  constructor(private httpService: HTTPService, private router: Router) {}

  ngOnInit(): void {
    // TODO: get the scan status response from the request made in the load-scan component

    // Navigate to home page on refresh
    if(!this.httpService.tempHost) {
      this.router.navigate(['/'])
    }
    const host = this.httpService.tempHost ?? "twitter.com";
    // Right now the request is made twice in a row for no apparent reason
    this.scanSub = this.httpService.getScanStatus(host).subscribe((scan) => {
      const score = scan.score ?? 0;
      this.setResultColor(score);
      this.score = score;
    });
  }

  ngOnDestroy(): void {
    this.scanSub?.unsubscribe();
  }

  setResultColor(score: number) {
    if (score > 80) {
      this.color = 'green-color';
    } else if (score > 60) {
      this.color = 'light-green-color';
    } else if (score > 40) {
      this.color = 'yellow-color';
    } else if (score > 20) {
      this.color = 'orange-color';
    } else {
      this.color = 'red-color';
    }
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }
}
