import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScanComponent } from './main-scan.component';

describe('MainScanComponent', () => {
  let component: MainScanComponent;
  let fixture: ComponentFixture<MainScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainScanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
