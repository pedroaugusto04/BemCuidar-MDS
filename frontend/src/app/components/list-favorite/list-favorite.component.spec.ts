import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ListFavoriteComponent } from "./list-favorites.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("ListFavoriteComponent", () => {
  let component: ListFavoriteComponent;
  let fixture: ComponentFixture<ListFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFavoriteComponent,RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
