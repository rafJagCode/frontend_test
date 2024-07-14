import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRecordButtonComponent } from './text-record-button.component';

describe('TextRecordButtonComponent', () => {
  let component: TextRecordButtonComponent;
  let fixture: ComponentFixture<TextRecordButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRecordButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextRecordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
