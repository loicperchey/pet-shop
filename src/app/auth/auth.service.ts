import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  toggleAuth() {
    this.isAuth$.next(!this.isAuth$.getValue());
    if (!this.isAuth$.getValue()) {
      this.router.navigate(['home']);
    }
  }
}
