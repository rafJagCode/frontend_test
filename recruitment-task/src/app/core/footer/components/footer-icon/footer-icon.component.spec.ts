import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIconComponent } from './footer-icon.component';

describe('FooterIconComponent', () => {
  let component: FooterIconComponent;
  let fixture: ComponentFixture<FooterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
