import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  newUser = {
    userName: '',
    password: '',
    name: '',
    rol: 'jugador'
  };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.newUser)
      .subscribe(res => console.log("usuario creado:", res));
  }
}
