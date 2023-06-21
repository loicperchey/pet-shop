import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isAuth$: Observable<boolean> = this.authService.isAuth$.asObservable();

  constructor(private authService: AuthService) {}

  onToggleAuth() {
    this.authService.toggleAuth();
  }
}
