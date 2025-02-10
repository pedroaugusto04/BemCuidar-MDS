import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderService } from '../../services/providerServices/provider.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { CardUserRequestComponent } from '../card-user-request/card-user-request.component';
import { MatButtonModule } from '@angular/material/button';
import { UserRequestStatus } from '../../models/enums/UserRequestStatus';
import { ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRequest } from '../../models/UserRequest';
import { UserService } from '../../services/userServices/user.service';

@Component({
  selector: 'app-provider-requests',
  standalone: true,
  imports: [NavBarComponent,CommonModule, CardUserRequestComponent, MatButtonModule],
  templateUrl: './provider-requests.component.html',
  styleUrl: './provider-requests.component.scss'
})
export class ProviderRequestsComponent {
  requests$!: Observable<UserRequest[]>;
  userRequestStatus = UserRequestStatus;

  constructor(private userService: UserService,private snackBar: MatSnackBar,
    private route: ActivatedRoute 
   ) {}

  ngOnInit(): void {
    this.requests$ = this.userService.getUserRequests();
  }
}
