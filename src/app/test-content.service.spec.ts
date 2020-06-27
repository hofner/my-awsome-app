import { TestBed } from '@angular/core/testing';

import { TestContentService } from './test-content.service';

describe('TestContentService', () => {
  let service: TestContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
