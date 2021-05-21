import { TestBed } from '@angular/core/testing';

import { AllapiserviceService } from './allapiservice.service';

describe('AllapiserviceService', () => {
  let service: AllapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
