import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavBarComponent } from "./nav-bar.component";

describe("NavBarComponent", () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should render if desktop", () => {
    component.isMobile = false;
    fixture.detectChanges();

    const sections = fixture.nativeElement.querySelector("#sections-desktop");

    const divProfileImg = fixture.nativeElement.querySelector(
      "#profile-img-desktop"
    );

    expect(sections).not.toBeNull();
    expect(divProfileImg).not.toBeNull();
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

  it("Should render if mobile", () => {
    component.isMobile = true;
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
