import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import psl from 'psl';
import stripProtocol from '../util/strip-protocol';
//TODO:If there is a a slash at the end of the domain name it gives an error (Fix it)
export function domainNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = stripProtocol(control.value);
    return psl.isValid(value) ? null : { domainName: true };
  };
}
