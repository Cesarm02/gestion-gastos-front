import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentaService } from 'src/app/services/cuenta.service';
import Swal from 'sweetalert2';
import {FormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.css']
})
export class EditarCuentaComponent implements OnInit {

  cuenta: any = {};
  cuentaEditada : any = {};
  cuentaId : any;

  constructor(private route: ActivatedRoute,  private snackbar: MatSnackBar, private router:Router, private cuentaService: CuentaService) { }
  selectedOption:any;

  ngOnInit(): void {
    this.cuentaId = this.route.snapshot.params['id'];
    this.cuenta.id = this.cuentaId;

    this.cuentaService.obtenerCuentaPorId(this.cuentaId).subscribe(
      (dato:any) => {
        console.log(dato);
        this.cuenta = dato;
        this.selectedOption = dato.estado;
        this.cuentaEditada.estado = this.selectedOption;
        this.cuentaEditada.total = dato.totalCuenta;
      }, (error) => {
        console.log(error);
        Swal.fire("Error al obtener la cuenta", "error");
      }
    )

  }

  formSubmit(){
    if(this.cuenta.titulo.trim() == '' || this.cuenta.titulo == null){
      this.snackbar.open('El título es requerido', 'Debes insertar un título',{
        duration:3000
      });
      return;
    }

    this.cuentaEditada.titulo = this.cuenta.titulo;
    this.cuentaEditada.descripcion = this.cuenta.descripcion;
    this.cuentaEditada.tipo = this.cuenta.tipo;
    this.cuentaEditada.id = this.cuentaId;
    this.cuentaEditada.estado = this.selectedOption;

    this.cuentaService.editarCuenta(this.cuentaEditada).subscribe(
      (dato:any) => {
        this.cuenta.titulo = '';
        this.cuenta.descripcion = '';
        this.cuenta.tipo = '';
        this.cuenta.cuentaId = '';
        this.cuenta.total = 0;
        this.cuenta.estado = true;
        Swal.fire("Cuenta modificada", "Modificada correctamente", "success");
        this.router.navigate(["/user/cuenta"]);
      }, (error) => {
        console.log(error);
        Swal.fire("Error al modificar", "Error al modificar", 'error');
      }
    )

  }


}
