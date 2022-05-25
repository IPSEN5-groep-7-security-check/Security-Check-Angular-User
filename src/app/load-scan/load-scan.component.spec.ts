import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadScanComponent } from './load-scan.component';

describe('LoadScanComponent', () => {
  let component: LoadScanComponent;
  let fixture: ComponentFixture<LoadScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadScanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
