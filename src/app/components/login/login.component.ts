import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  lat: string = '';
  showError: boolean = false;

  constructor(private usersService: UsersService, private router: Router, private toastrService: ToastrService) { }

  onLogin(){
    this.usersService.login(this.email, this.lat).subscribe((isValid: boolean) => {
      if(isValid){
        this.toastrService.success("Datos ingresados correctamente");
        this.router.navigate(["/main"]);
      } else {
        this.toastrService.error("Los datos ingresados son incorrectos. Por favor vuelva a intentarlo");
      }
    });
  }
}
