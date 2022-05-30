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
    this.checkScanStatus();
  }

  async checkScanStatus() {
    const host = 'codearise.com'; // TODO: get this from somewhere
    const scan = await this.httpService.getScanStatus(host).toPromise();
    const state = scan?.state;
    if (state === 'FINISHED') {
      this.router.navigate(['/scan-result']);
    } else if (state === 'ABORTED' || state === 'FAILED') {
      console.error('Scan failed');
      // TODO: handle error state
      this.router.navigate(['/home']); // Navigate to home for now
    } else {
      setTimeout(() => {
        this.checkScanStatus();
      }, 1500);
    }

    // this.httpService.getScanStatus(host).subscribe({
    //   next: (scan) => {
    //     const state = scan.state;
    //     if (state === 'FINISHED') {
    //       this.router.navigate(['/scan-result']);
    //     } else if (state === 'ABORTED' || state === 'FAILED') {
    //       console.error('Scan failed');
    //       // TODO: handle error state
    //       this.router.navigate(['/home']); // Navigate to home for now
    //     }
    //     console.log('DATA: ', scan);
    //     console.log('SCAN_ID: ', scan.scan_id);
    //     console.log('SCAN_ID: ', scan.state);
    //   },
    //   error: (error) => {
    //     console.error('There was an error!', error);
    //   },
    // });
  }
}
