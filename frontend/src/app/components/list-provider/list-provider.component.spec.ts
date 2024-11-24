import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ListProviderComponent } from "./list-provider.component";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { providersMock$ } from "../tests/mocks/providers.mock";

describe("ListProviderComponent", () => {
  let component: ListProviderComponent;
  let fixture: ComponentFixture<ListProviderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ListProviderComponent],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ListProviderComponent);
    component = fixture.componentInstance;
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should render providers correctly in app card", () => {
    const cardProviderElements = fixture.debugElement.queryAll(
      By.css("app-card-service-provider")
    );

    providersMock$.subscribe((providers) => {
      expect(cardProviderElements.length).toBe(providers.length);

      cardProviderElements.forEach((element, i) => {
        const provider = providers[i];

        expect(element.componentInstance.providerName).toBe(provider.name);
        expect(element.componentInstance.providerServiceDescription).toBe(
          provider.service_description
        );
        expect(element.componentInstance.providerAge).toBe(provider.age);
        expect(element.componentInstance.providerCountry).toBe(
          provider.country
        );
        expect(element.componentInstance.providerState).toBe(provider.state);
        expect(element.componentInstance.providerCity).toBe(provider.city);
      });
    });
  });
});
