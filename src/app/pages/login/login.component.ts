import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username" : '',
    "password" : ''
  }

  constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open("El nombre de usuario es requerido", 'Aceptar', {
        duration: 3000
      });
      return;
    }    
    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open("La contraseña es requerida", 'Aceptar', {
        duration: 3000
      });
      return;
    }    

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          
          this.loginService.setUser(user);

          if(this.loginService.getUserRol() == "Admin"){
            //Admin
            this.router.navigate(['/admin/log']);
            this.loginService.loginStatusSubject.next(true);
          }else if (this.loginService.getUserRol() == "Normal"){
            //User
            this.router.navigate(['/user/inicio']);
            this.loginService.loginStatusSubject.next(true);

          } else{
            this.loginService.logoutSesion();
          }

        });
      }, (error) => {
        console.log(error);
        this.snack.open("Detalles invalidos, vuelve a intentar", "Aceptar", {
          duration: 3000
        });
      }
    )

  }
  

}
