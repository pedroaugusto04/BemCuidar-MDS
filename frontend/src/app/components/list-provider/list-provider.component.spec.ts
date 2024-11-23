import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListProviderComponent } from "./list-provider.component";
import { By } from "@angular/platform-browser";
import { providersMock } from "../tests/mocks/providers.mock";
import { RouterTestingModule } from "@angular/router/testing";

describe("ListProviderComponent", () => {
  let component: ListProviderComponent;
  let fixture: ComponentFixture<ListProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProviderComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should render providers correctly in app card", () => {
    component.providers = providersMock;
    fixture.detectChanges();

    const cardProviderElements = fixture.debugElement.queryAll(
      By.css("app-card-service-provider")
    );

    expect(cardProviderElements.length).toBe(component.providers.length);
    cardProviderElements.forEach((element, i) => {
      const provider = component.providers[i];
      expect(element.componentInstance.providerName).toBe(provider.name);
      expect(element.componentInstance.providerServiceDescription).toBe(
        provider.serviceDescription
      );
      expect(Number(element.componentInstance.providerAge)).toBe(provider.age);
      expect(element.componentInstance.providerCountry).toBe(provider.country);
      expect(element.componentInstance.providerState).toBe(provider.state);
      expect(element.componentInstance.providerCity).toBe(provider.city);
    });
  });
});
