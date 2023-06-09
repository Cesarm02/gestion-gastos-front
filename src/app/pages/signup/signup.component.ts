import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private userService:UserService, private snackBar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.user.username == '' || this.user.username == null){
      this.snackBar.open('El nombre de usuario es requerido', 'Aceptar', {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if(this.user.password == '' || this.user.password == null){
      this.snackBar.open('La contraseña de usuario es requerido', 'Aceptar', {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if(this.user.nombre == '' || this.user.nombre == null){
      this.snackBar.open('El nombre es requerido', 'Aceptar', {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if(this.user.apellido == '' || this.user.apellido == null){
      this.snackBar.open('El apellido es requerido', 'Aceptar', {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if(this.user.email == '' || this.user.email == null){
      this.snackBar.open('El email es requerido', 'Aceptar', {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire("Usuario guardado", "Usuario registrado con existo en el sistema", 'success'); 
        this.router.navigate(['/login']);
      },(error) => {
        console.log(error);
        this.snackBar.open('Ha ocurrido un error en el sistema', 'Aceptar', {
          duration : 3000,
        });
      }
    )
  }

}
