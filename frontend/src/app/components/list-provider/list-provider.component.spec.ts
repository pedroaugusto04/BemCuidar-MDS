import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListProviderComponent } from './list-provider.component';
import { ProviderService } from '../../services/providerServices/provider.service';
import { of } from 'rxjs';
import { providersMock } from '../tests/mocks/providers.mock';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListProviderComponent', () => {
  let fixture: ComponentFixture<ListProviderComponent>;
  let component: ListProviderComponent;
  let providersService: ProviderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ListProviderComponent
      ],
      providers: [
        {
          provide: ProviderService,
          useValue: {
            getProviders: () => of(providersMock)  
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProviderComponent);
    component = fixture.componentInstance;
    providersService = TestBed.inject(ProviderService);  
  });

  it('Verifica a renderizacao correta dos cards ( numero e informacoes)', () => {
    fixture.detectChanges();  
    const providerCards: DebugElement[] = fixture.debugElement.queryAll(By.css('app-card-service-provider'));

    expect(providerCards.length).toBe(providersMock.length); 

    providerCards.forEach((element, i) => {
      const provider = providersMock[i];

      expect(element.componentInstance.providerName).toBe(provider.name);
      expect(element.componentInstance.providerServiceDescription).toBe(
        provider.service_description
      );
      expect(element.componentInstance.providerAge).toBe(provider.age);
      expect(element.componentInstance.providerCountry).toBe(provider.country);
      expect(element.componentInstance.providerState).toBe(provider.state);
      expect(element.componentInstance.providerCity).toBe(provider.city);
    });
  });
  });
