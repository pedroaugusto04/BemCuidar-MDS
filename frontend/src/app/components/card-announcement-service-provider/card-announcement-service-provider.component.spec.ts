import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnnouncementServiceProviderComponent } from './card-announcement-service-provider.component';

describe('CardAnnouncementServiceProviderComponent', () => {
  let component: CardAnnouncementServiceProviderComponent;
  let fixture: ComponentFixture<CardAnnouncementServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAnnouncementServiceProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAnnouncementServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
