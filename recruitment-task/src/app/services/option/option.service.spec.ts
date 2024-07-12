import { TestBed } from '@angular/core/testing';

import { TextContentService } from './option.service';

describe('TextContentService', () => {
  let service: TextContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
