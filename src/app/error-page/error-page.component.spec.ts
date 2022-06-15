import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorPageComponent } from './error-page.component';
describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorPageComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('picked random photoNumber greater than or equal to 0',() => {
    let photoNumber = component.randomErrorPhoto();
    expect(photoNumber).toBeGreaterThanOrEqual(0);
  })
  it('picked random photoNumber smaller than 1',() => {
    let photoNumber = component.randomErrorPhoto();
    expect(photoNumber).toBeLessThan(1)
  })
});
