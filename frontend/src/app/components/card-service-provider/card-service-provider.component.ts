import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-service-provider',
  standalone: true,
  imports: [],
  templateUrl: './card-service-provider.component.html',
  styleUrl: './card-service-provider.component.scss'
})
export class CardServiceProviderComponent {
  
  @Input({required: true}) providerName!: string;
  @Input({required: true}) providerService!: string;
  @Input() providerAge!: string;
  @Input({required: true}) providerCountry!: string;
  @Input({required: true}) providerState!: string;
  @Input({required: true}) providerCity!: string;
}
