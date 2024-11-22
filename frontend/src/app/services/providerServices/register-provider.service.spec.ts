import { TestBed } from "@angular/core/testing";

import { RegisterProviderService } from "./register-provider.service";
import { HttpClientModule } from "@angular/common/http";

describe("RegisterProviderService", () => {
  let service: RegisterProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(RegisterProviderService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
