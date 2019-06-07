import { TestBed } from '@angular/core/testing';

import { MockingService } from './mocking.service';

describe('MockingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockingService = TestBed.get(MockingService);
    expect(service).toBeTruthy();
  });
});
