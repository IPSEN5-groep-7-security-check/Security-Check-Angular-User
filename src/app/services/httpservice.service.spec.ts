import { TestBed } from '@angular/core/testing';

import { HTTPService } from './h-t-t-p.service';

describe('HTTPServiceService', () => {
  let service: HTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
