import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserRequestComponent } from './card-user-request.component';

describe('CardUserRequestComponent', () => {
  let component: CardUserRequestComponent;
  let fixture: ComponentFixture<CardUserRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardUserRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardUserRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
