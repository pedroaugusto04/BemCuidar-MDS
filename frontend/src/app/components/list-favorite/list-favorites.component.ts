import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './list-favorite.component.html',
  styleUrl: './list-favorite.component.scss'
})
export class ListFavoriteComponent {

}
