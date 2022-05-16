import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import psl from "psl";

export function domainNameValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    return psl.isValid(value) ? null : {domainName: true};
  }
}
