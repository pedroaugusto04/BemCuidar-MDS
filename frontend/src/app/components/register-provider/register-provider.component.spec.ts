import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RegisterProviderComponent } from "./register-provider.component";
import { RouterTestingModule } from "@angular/router/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService } from "ngx-cookie-service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("RegisterProviderComponent", () => {
  let component: RegisterProviderComponent;
  let fixture: ComponentFixture<RegisterProviderComponent>;
  let cookieService: CookieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegisterProviderComponent,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterProviderComponent);
    component = fixture.componentInstance;
    cookieService = TestBed.inject(CookieService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should throw onError if form is invalid", () => {
    spyOn(component, 'onError');
    spyOn(cookieService, 'get').and.returnValue('fake-token');
    component.registerProvider();
    expect(component.onError).toHaveBeenCalledTimes(1);
    expect(component.onError).toHaveBeenCalledWith("Preencha os campos corretamente!")
  });
});
