import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { domainNameValidator } from '../validators/domain-name-validator';
import stripProtocol from '../util/strip-protocol';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-main-scan',
  templateUrl: './main-scan.component.html',
  styleUrls: ['./main-scan.component.scss'],
})
export class MainScanComponent implements OnInit {
  form = this.fb.group({
    url: ['', [Validators.required, domainNameValidator()]],
    forceRescan: [false],
    acceptTerms: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  get formControls() {
    return this.form.controls;
  }

  get url() {
    return this.formControls['url']!;
  }

  get acceptTerms() {
    return this.formControls['acceptTerms']!;
  }

  onSubmit() {
    this.url.markAsTouched();
    const data = this.form.value;
    console.log('ORIGINAL: ', data);
    const newData = {
      url: stripProtocol(data.url),
      forceRescan: data.forceRescan,
    };
    console.log('MODIFIED: ', newData);
    this.addWebsiteUrl();
  }

  ngOnInit(): void {}

  addWebsiteUrl(): Observable<MainScanComponent> {
    console.log('yay');
    return this.http
      .post<MainScanComponent>('localhost:8080' + '/api/v1/analyze', this.url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
