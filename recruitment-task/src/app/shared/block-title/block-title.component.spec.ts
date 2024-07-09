import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTitleComponent } from './block-title.component';

describe('BlockTitleComponent', () => {
  let component: BlockTitleComponent;
  let fixture: ComponentFixture<BlockTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
