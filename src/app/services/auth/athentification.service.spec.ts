import { TestBed } from '@angular/core/testing';

import { AthentificationService } from './athentification.service';

describe('AthentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthentificationService = TestBed.get(AthentificationService);
    expect(service).toBeTruthy();
  });
});
