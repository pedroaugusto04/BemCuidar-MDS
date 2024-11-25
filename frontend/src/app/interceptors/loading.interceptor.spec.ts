import { TestBed } from "@angular/core/testing";
import { HttpInterceptorFn } from "@angular/common/http";

import { LoadingInterceptor } from "./loading.interceptor";

describe("interceptorsInterceptor", () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => LoadingInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(interceptor).toBeTruthy();
  });
});
