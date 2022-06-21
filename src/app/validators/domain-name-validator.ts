import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import psl from 'psl';
import stripProtocol from '../util/strip-protocol';
export function domainNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = stripProtocol(control.value);
    return psl.isValid(value) ? null : { domainName: true };
  };
}
