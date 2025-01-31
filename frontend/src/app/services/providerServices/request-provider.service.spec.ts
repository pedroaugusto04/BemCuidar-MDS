import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RequestProviderService } from './request-provider.service';

describe('RequestProviderService', () => {
  let service: RequestProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(RequestProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
