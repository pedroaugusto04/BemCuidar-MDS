import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAnnouncementsComponent } from './provider-announcements.component';

describe('ProviderAnnouncementsComponent', () => {
  let component: ProviderAnnouncementsComponent;
  let fixture: ComponentFixture<ProviderAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderAnnouncementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
