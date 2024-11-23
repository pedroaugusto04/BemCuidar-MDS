import { TestBed } from '@angular/core/testing';

import { RegisterProviderService } from './register-provider.service';

describe('RegisterProviderService', () => {
  let service: RegisterProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
