import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  //Segundo intento
  // formGroup = this.builder.group({
  //   email: this.builder.control('',[Validators.required, Validators.email]),
  //   lat: this.builder.control('',[Validators.required])
  // });

  // loginProcess() {
  //   if(this.formGroup.valid){
  //     const email = this.formGroup.value.email;
  //     const lat = this.formGroup.value.lat;

  //     this.usersService.login().subscribe((users: any[]) => {
  //       const userFound = users.find(user => user.email === email && user.lat === lat);
  //       if (userFound) {
  //         alert('Acceso permitido');
  //       } else {
  //         alert('Acceso denegado');
  //       }
  //     });
  //   }
  // }

  //Primer intento
  // data: any[] = [];

  // constructor(private usersService: UsersService) { }

  // ngOnInit(): void {
  //   this.traerData();
  // }

  // traerData() {
  //   this.usersService.getData().subscribe( data => {
  //     this.data = data;
  //     console.log(this.data);
  //   })
  // }
}
