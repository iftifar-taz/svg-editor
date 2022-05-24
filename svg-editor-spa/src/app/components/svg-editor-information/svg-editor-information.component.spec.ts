import { TestBed } from '@angular/core/testing';
import { SvgEditorInformationComponent } from './svg-editor-information.component';

describe('SvgEditorInformationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SvgEditorInformationComponent
      ],
    }).compileComponents();
  });

  it('should create svg editor information component', () => {
    const fixture = TestBed.createComponent(SvgEditorInformationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
