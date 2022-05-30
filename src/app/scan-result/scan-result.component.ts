import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPService } from '../services/http.service';

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.css'],
})
export class ScanResultComponent implements OnInit {
  score: any;
  color: any;

  constructor(private router: Router, private httpService: HTTPService) {}

  ngOnInit(): void {
    this.getSecurityScanResult();
  }

  getSecurityScanResult() {
    this.httpService.getScanResult().subscribe((report) => {
      this.score = report.score;
      return report;
    });
  }
}
