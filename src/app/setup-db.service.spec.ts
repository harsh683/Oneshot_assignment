import { TestBed } from '@angular/core/testing';

import { SetupDbService } from './setup-db.service';

describe('SetupDbService', () => {
  let service: SetupDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
