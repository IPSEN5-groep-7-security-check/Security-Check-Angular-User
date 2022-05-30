import { HTTPService } from '../services/http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Report } from '@prisma/client';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.css'],
})
export class ScanResultComponent implements OnInit, OnDestroy {
  scanSub?: Subscription;
  score?: number;
  color: string = '';

  constructor(private httpService: HTTPService) {}

  ngOnInit(): void {
    const host = 'twitter.com'; // TODO: get this from somewhere
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
}
