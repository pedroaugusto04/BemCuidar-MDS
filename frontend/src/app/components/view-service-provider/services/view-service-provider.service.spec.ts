import { TestBed } from "@angular/core/testing";

import { ViewServiceProviderService } from "./view-service-provider.service";

describe("ViewProjectInfoService", () => {
  let service: ViewServiceProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewServiceProviderService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
