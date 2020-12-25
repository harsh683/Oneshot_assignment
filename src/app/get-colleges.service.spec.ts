import { TestBed } from '@angular/core/testing';

import { GetCollegesService } from './get-colleges.service';

describe('GetCollegesService', () => {
  let service: GetCollegesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCollegesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
