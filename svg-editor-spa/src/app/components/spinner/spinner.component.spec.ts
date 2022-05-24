import { TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SpinnerComponent
      ],
    }).compileComponents();
  });

  it('should create spinner component', () => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
