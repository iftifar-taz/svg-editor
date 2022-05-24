import { TestBed } from '@angular/core/testing';
import { SvgEditorComponent } from './svg-editor.component';

describe('SvgEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SvgEditorComponent
      ],
    }).compileComponents();
  });

  it('should create svg editor component', () => {
    const fixture = TestBed.createComponent(SvgEditorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
