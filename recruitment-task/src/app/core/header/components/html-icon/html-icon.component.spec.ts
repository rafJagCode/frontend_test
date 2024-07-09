import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIconComponent } from './html-icon.component';

describe('HtmlIconComponent', () => {
  let component: HtmlIconComponent;
  let fixture: ComponentFixture<HtmlIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
