import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceProviderComponent } from './card-service-provider.component';

describe('CardServiceProviderComponent', () => {
  let component: CardServiceProviderComponent;
  let fixture: ComponentFixture<CardServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardServiceProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
