import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { domainNameValidator } from '../validators/domain-name-validator';
import stripProtocol from '../util/strip-protocol';
import { HTTPService } from '../services/http.service';

@Component({
  selector: 'app-main-scan',
  templateUrl: './main-scan.component.html',
  styleUrls: ['./main-scan.component.scss'],
})
export class MainScanComponent implements OnInit {
  form = this.fb.group({
    host: ['', [Validators.required, domainNameValidator()]],
    rescan: [false],
    acceptTerms: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder, private httpService: HTTPService) {}

  get formControls() {
    return this.form.controls;
  }

  get host() {
    return this.formControls['host']!;
  }

  get acceptTerms() {
    return this.formControls['acceptTerms']!;
  }

  get rescan() {
    return this.formControls['rescan'];
  }

  onSubmit() {
    this.host.markAsTouched();
    const formHost = this.host.value;
    const host = stripProtocol(formHost);
    const rescan = this.rescan?.value;
    this.httpService.startScan(host, rescan).subscribe({
      next: (data: any) => {
        console.log('DATA: ', data);
        console.log('SCAN_ID: ', data.scan_id);
        console.log('SCAN_ID: ', data.state);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  ngOnInit(): void {}
}
