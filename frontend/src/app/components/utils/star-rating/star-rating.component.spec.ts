import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingComponent } from './star-rating.component';
import { HttpClientModule } from '@angular/common/http';

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingComponent,HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
