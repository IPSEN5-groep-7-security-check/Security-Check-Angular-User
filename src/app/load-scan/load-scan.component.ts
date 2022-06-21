import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPService } from '../services/http.service';
import { Scan } from '../util/scan';

@Component({
  selector: 'app-load-scan',
  templateUrl: './load-scan.component.html',
  styleUrls: ['./load-scan.component.scss'],
})
export class LoadScanComponent implements OnInit {
  constructor(private router: Router, private httpService: HTTPService) {}
  private scan: Scan | undefined;

  ngOnInit(): void {
    this.checkScanStatus().then(() => {});
  }

  async checkScanStatus() {
    const host = this.httpService.tempHost;
    if (host != null) {
      this.scan = await this.httpService.getScanStatus(host).toPromise();
    }
    const state = this.scan?.state;
    if (state === 'FINISHED') {
      await this.router.navigate(['/scan-result']);
    } else if (state === 'ABORTED' || state === 'FAILED') {
      await this.router.navigate(['/home']); // Navigate to home for now
    } else {
      setTimeout(() => {
        this.checkScanStatus();
      }, 1500);
    }
  }
}
