import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { domainNameValidator } from '../validators/domain-name-validator';
import stripProtocol from '../util/strip-protocol';

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

  constructor(private fb: FormBuilder) {}

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
    const data = this.form.value;
    console.log('ORIGINAL: ', data);
    const newData = {
      url: stripProtocol(data.url),
      forceRescan: data.forceRescan,
    };
    console.log('MODIFIED: ', newData);
  }

  ngOnInit(): void {}
}
