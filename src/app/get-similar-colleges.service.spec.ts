import { TestBed } from '@angular/core/testing';

import { GetSimilarCollegesService } from './get-similar-colleges.service';

describe('GetSimilarCollegesService', () => {
  let service: GetSimilarCollegesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSimilarCollegesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
