import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HTTPService } from '../../services/http.service';
import { ScanResultComponent } from '../scan-result.component';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.css'],
})
export class ResultModalComponent implements OnInit {
  constructor(
    private httpService: HTTPService,
    public scanResult: ScanResultComponent
  ) {}

  hasClickedSubmit = false;

  nameFormControl = new FormControl('', [Validators.required]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);

  phoneFormControl = new FormControl('', [Validators.minLength(10)]);

  ngOnInit(): void {}

  sendEmail() {
    this.hasClickedSubmit = true;
    if (
      this.nameFormControl.invalid ||
      this.emailFormControl.invalid ||
      this.phoneFormControl.invalid
    ) {
      return;
    }
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      host: this.httpService.tempHost,
    };
    this.httpService.sendmail(user).subscribe(() => {
      this.scanResult.toggleModal();
    });
  }
}
