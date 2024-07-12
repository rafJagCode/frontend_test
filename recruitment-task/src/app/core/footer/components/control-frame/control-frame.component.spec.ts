import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFrameComponent } from './control-frame.component';

describe('ControlFrameComponent', () => {
  let component: ControlFrameComponent;
  let fixture: ComponentFixture<ControlFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
