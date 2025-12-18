import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login(form: NgForm) {
    if (form.invalid) return;
    
    this.authService.login(this.email, this.password)
      .subscribe(userLogged => {
        console.log("Usuario recuperado:", userLogged)
      })
  }
}
