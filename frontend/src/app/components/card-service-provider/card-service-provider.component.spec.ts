import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceProviderComponent } from './card-service-provider.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardServiceProviderComponent', () => {
  let component: CardServiceProviderComponent;
  let fixture: ComponentFixture<CardServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardServiceProviderComponent, RouterTestingModule]
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
