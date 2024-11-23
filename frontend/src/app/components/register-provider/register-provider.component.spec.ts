import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RegisterProviderComponent } from "./register-provider.component";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterProviderService } from "./service/register-provider.service";
import { of } from "rxjs";
import { providerMock } from "../tests/mocks/provider.mock";

describe("RegisterProviderComponent", () => {
  let component: RegisterProviderComponent;
  let fixture: ComponentFixture<RegisterProviderComponent>;
  let service: RegisterProviderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegisterProviderComponent,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should pass info correctly to service", () => {
    service = TestBed.inject(RegisterProviderService);

    service.register = jest.fn().mockReturnValue(of());

    const formData = new FormData();
    formData.append("name", providerMock.name);
    formData.append("serviceDescription",providerMock.serviceDescription);
    formData.append("age", providerMock.age.toString());
    formData.append("country",providerMock.country);
    formData.append("state",providerMock.state);
    formData.append("city",providerMock.city);
    formData.append("photo",providerMock.photo);

    component.formData = formData;

    component.addProject();

    fixture.detectChanges();

    expect(service.register).toHaveBeenCalledTimes(1);

    expect(service.register).toHaveBeenCalledWith(formData);
  });
});
