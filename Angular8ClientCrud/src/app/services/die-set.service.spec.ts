import { TestBed } from '@angular/core/testing';

import { DieSetService } from './die-set.service';

describe('DieSetService', () => {
  let service: DieSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DieSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
