import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  lat: string = '';

  constructor(private usersService: UsersService, private router: Router) { }

  onLogin(){
    this.usersService.login(this.email, this.lat).subscribe((isValid: boolean) => {
      if(isValid){
        alert('Inicio de sesión exitoso');
        this.router.navigate(["/main"]);
      } else {
        alert('El email o la contraseña son incorrectos por favor vuelva a intentarlo');
      }
    });
  }
}
