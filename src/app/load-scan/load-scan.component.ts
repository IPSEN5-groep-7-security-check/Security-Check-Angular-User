import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs';
import { HTTPService } from '../services/http.service';
import { Scan } from '../util/scan';

@Component({
  selector: 'app-load-scan',
  templateUrl: './load-scan.component.html',
  styleUrls: ['./load-scan.component.scss'],
})
export class LoadScanComponent implements OnInit {
  constructor(private router: Router, private httpService: HTTPService) {}
  scanState?: Scan['state'];

  ngOnInit(): void {
    setTimeout(() => {
      const state = this.scanState;
      if (state === 'FINISHED') {
        this.router.navigate(['/scan-result']);
      } else if (state === 'ABORTED' || state === 'FAILED') {
        console.error('Scan failed');
        // TODO: handle error state
        this.router.navigate(['/home']); // Navigate to home for now
      }
    }, 15000);
    this.checkScanStatus();
  }

  checkScanStatus() {
    const host = 'twitter.com'; // TODO: get this from somewhere
    this.httpService.getScanStatus(host).subscribe((scan) => {
      this.scanState = scan.state;
    });
  }
}
