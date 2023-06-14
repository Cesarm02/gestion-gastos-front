import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CuentaService } from 'src/app/services/cuenta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.component.html',
  styleUrls: ['./agregar-cuenta.component.css']
})
export class AgregarCuentaComponent implements OnInit {

  cuenta = {
    "titulo" : '',
    "descripcion" : '',
    "tipo" : '',
    "total" : 0
  }

  constructor(private router: Router, private cuentaService: CuentaService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.cuenta.titulo.trim() == '' || this.cuenta.titulo == null){
      this.snackbar.open('El título es requerido', 'Debes insertar un título',{
        duration:3000
      });
      return;
    }
    
    this.cuentaService.guardarCuenta(this.cuenta).subscribe(
      (dato:any) => {
        this.cuenta.titulo = '';
        this.cuenta.descripcion = '';
        this.cuenta.tipo = '';
        this.cuenta.total = 0;
        Swal.fire("Cuenta agregada", "Guardado correcto", "success");
        this.router.navigate(["/user/cuenta"]);
      },(error) => {
        console.log(error);
        Swal.fire("Error al guardar", "Error al guardar", 'error')
      }
    )

  }

}
