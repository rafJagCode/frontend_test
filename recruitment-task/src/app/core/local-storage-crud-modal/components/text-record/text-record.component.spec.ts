import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRecordComponent } from './text-record.component';

describe('TextRecordComponent', () => {
  let component: TextRecordComponent;
  let fixture: ComponentFixture<TextRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
