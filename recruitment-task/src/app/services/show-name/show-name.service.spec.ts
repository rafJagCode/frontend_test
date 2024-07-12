import { TestBed } from '@angular/core/testing';

import { ShowNameService } from './show-name.service';

describe('ShowNameService', () => {
  let service: ShowNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
