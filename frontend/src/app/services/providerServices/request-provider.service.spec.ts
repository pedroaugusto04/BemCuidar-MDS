import { TestBed } from '@angular/core/testing';

import { RequestProviderService } from './request-provider.service';

describe('RequestProviderService', () => {
  let service: RequestProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
