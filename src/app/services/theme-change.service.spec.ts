import { TestBed } from '@angular/core/testing';

import { ThemeChangeService } from './theme-change.service';

describe('ThemeChangeService', () => {
  let service: ThemeChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
