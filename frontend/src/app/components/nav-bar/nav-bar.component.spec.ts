import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavBarComponent } from "./nav-bar.component";

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { BehaviorSubject, of } from "rxjs";
import { User } from "../../models/User";
import { userMock } from "../tests/mocks/user.mock";

describe("NavBarComponent", () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent, RouterTestingModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should render if desktop and loggedIn", () => {
    component.isMobile = false;
    component.user$ = new BehaviorSubject<User>(userMock);
    fixture.detectChanges();

    const sections = fixture.nativeElement.querySelector("#sections-desktop");

    const divProfileImg = fixture.nativeElement.querySelector(
      "#profile-img-desktop"
    );

    expect(sections).not.toBeNull();
    expect(divProfileImg).not.toBeNull();
  });

  it("Should render if desktop and NOT loggedIn", () => {
    component.isMobile = false;
    fixture.detectChanges();

    const sections = fixture.nativeElement.querySelector("#sections-desktop");

    const divRegister = fixture.nativeElement.querySelector("#div-register");

    expect(sections).not.toBeNull();
    expect(divRegister).not.toBeNull();
  });

  it("Should NOT render if desktop", () => {
    component.isMobile = false;
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector(
      "#button-menu-mobile"
    );

    const profileImg = fixture.nativeElement.querySelector(
      "#profile-img-mobile"
    );

    expect(buttonElement).toBeNull();

    expect(profileImg).toBeNull();
  });

  it("Should render if mobile and loggedIn", () => {
    component.isMobile = true;
    component.user$ = new BehaviorSubject<User>(userMock);
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector(
      "#button-menu-mobile"
    );

    const profileImg = fixture.nativeElement.querySelector(
      "#profile-img-mobile"
    );

    expect(buttonElement).not.toBeNull();

    expect(profileImg).not.toBeNull();
  });

  it("Should render if mobile and NOT loggedIn", () => {
    component.isMobile = true;
    fixture.detectChanges();

    const divRegister = fixture.nativeElement.querySelector("#div-register");

    expect(divRegister).not.toBeNull();
  });

  it("Should NOT render if mobile", () => {
    component.isMobile = true;
    fixture.detectChanges();

    const sections = fixture.nativeElement.querySelector("#sections-desktop");

    const divProfileImg = fixture.nativeElement.querySelector(
      "#profile-img-desktop"
    );

    expect(sections).toBeNull();
    expect(divProfileImg).toBeNull();
  });
});
