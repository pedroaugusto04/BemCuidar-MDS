import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RegisterProviderComponent } from "./register-provider.component";
import { RouterTestingModule } from "@angular/router/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterProviderService } from "../../services/providerServices/register-provider.service";
import { of } from "rxjs";
import { providerMock } from "../tests/mocks/provider.mock";
import { HttpClientModule } from "@angular/common/http";

describe("RegisterProviderComponent", () => {
  let component: RegisterProviderComponent;
  let fixture: ComponentFixture<RegisterProviderComponent>;
  let service: RegisterProviderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegisterProviderComponent,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should throw onError if form is invalid", () => {
    component.onError = jest.fn();
    component.registerProvider();
    expect(component.onError).toHaveBeenCalledTimes(1);
    expect(component.onError).toHaveBeenCalledWith("Preencha os campos corretamente!")
  });
});
