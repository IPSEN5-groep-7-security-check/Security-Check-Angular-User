import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs';
import { HTTPService } from '../services/http.service';

@Component({
  selector: 'app-load-scan',
  templateUrl: './load-scan.component.html',
  styleUrls: ['./load-scan.component.scss'],
})
export class LoadScanComponent implements OnInit {
  constructor(private router: Router, private httpService: HTTPService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/scan-results']);
    }, 15000);
    this.checkScanStatus();
  }

  checkScanStatus() {
    this.httpService.getScanStatus().subscribe((data) => {
      console.log(data);
      return data;
    });
  }
}
