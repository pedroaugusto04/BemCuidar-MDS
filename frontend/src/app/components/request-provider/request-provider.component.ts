import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-provider',
  standalone: true,
  imports: [],
  templateUrl: './request-provider.component.html',
  styleUrl: './request-provider.component.scss'
})
export class RequestProviderComponent {
  constructor(private activatedRoute: ActivatedRoute){
    //console.log(this.activatedRoute.snapshot.paramMap.get('providerId')); -> recupera assim o id do provider pra fazer a requisicao
  }

  
}
