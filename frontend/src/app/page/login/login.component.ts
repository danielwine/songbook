import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService, ILoginData } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData: ILoginData = {};

  constructor(
    private auth: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  onLogin() {
    this.auth.login(this.loginData);
  }

  ngOnInit(): void {
    this.auth.logout();
    this.auth.error$.next('');
    this.auth.error$.subscribe({
      next: (error) => {
        if (error)
          this.snackBar.open('Hibás felhasználónév vagy jelszó!', '', {
            duration: 2000,
          });
      },
    });
  }
}
