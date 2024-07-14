import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageCrudModalComponent } from './local-storage-crud-modal.component';

describe('LocalStorageCrudModalComponent', () => {
  let component: LocalStorageCrudModalComponent;
  let fixture: ComponentFixture<LocalStorageCrudModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalStorageCrudModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalStorageCrudModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
