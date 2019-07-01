import { TestBed } from '@angular/core/testing';

import { ExercieseService } from './exerciese.service';

describe('ExercieseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExercieseService = TestBed.get(ExercieseService);
    expect(service).toBeTruthy();
  });
});
