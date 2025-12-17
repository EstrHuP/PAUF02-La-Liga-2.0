import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  userName = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.userName, this.password)
      .subscribe(userLogged => {
        console.log("Usuario recuperado:", userLogged)
      })
  }
}
