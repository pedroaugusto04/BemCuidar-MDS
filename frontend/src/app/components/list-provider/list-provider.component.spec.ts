import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListComponent } from "./list-provider.component";
import { ServiceProvider } from "../../models/ServiceProvider";
import { By } from "@angular/platform-browser";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
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

    const t1: ServiceProvider = {
      name: "Nome1",
      service: "Work1",
      age: 20,
      country: "Brasil",
      state: "Minas Gerais",
      city: "Ipatinga",
    };
    const t2: ServiceProvider = {
      name: "Nome2",
      service: "Work2",
      age: 21,
      country: "Brasil",
      state: "Minas Gerais",
      city: "Ipatinga",
    };
    const t3: ServiceProvider = {
      name: "Nome3",
      service: "Work3",
      age: 22,
      country: "Inglaterra",
      state: "Minas Gerais",
      city: "Ipatinga",
    };
    component.providers = [t1,t2,t3];
    fixture.detectChanges();

    const cardProviderElements = fixture.debugElement.queryAll(By.css("app-card-service-provider"));

    expect(cardProviderElements.length).toBe(component.providers.length);
    cardProviderElements.forEach((element, i) => {
    const provider = component.providers[i];
    expect(element.componentInstance.providerName).toBe(provider.name);
    expect(element.componentInstance.providerService).toBe(provider.service);
    expect(Number(element.componentInstance.providerAge)).toBe(provider.age);
    expect(element.componentInstance.providerCountry).toBe(provider.country);
    expect(element.componentInstance.providerState).toBe(provider.state);
    expect(element.componentInstance.providerCity).toBe(provider.city);
    });

  });
  
});
