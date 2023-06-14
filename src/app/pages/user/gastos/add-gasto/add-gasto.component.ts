import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GastosService } from 'src/app/services/gastos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-gasto',
  templateUrl: './add-gasto.component.html',
  styleUrls: ['./add-gasto.component.css']
})
export class AddGastoComponent implements OnInit {

  gasto:any = {};
  mesSelected = 1;
  guardar = true;
  meses = [
    {id:"0", mes:"ENERO"},
    {id:"1", mes:"FEBRERO"},
    {id:"2", mes:"MARZO"},
    {id:"3", mes:"ABRIL"},
    {id:"4", mes:"MAYO"},
    {id:"5", mes:"JUNIO"},
    {id:"6", mes:"JULIO"},
    {id:"7", mes:"AGOSTO"},
    {id:"8", mes:"SEPTIEMBRE"},
    {id:"9", mes:"OCTUBRE"},
    {id:"10", mes:"NOVIEMBRE"},
    {id:"11", mes:"DICIEMBRE"},
  ]

  constructor(
    private gastoService: GastosService,
    private router:Router,
    private snackbar: MatSnackBar,

  ) { }

  ngOnInit(): void {
  }


  formSubmit(){
    if(this.gasto.titulo == null || this.gasto.titulo == 0){
      this.snackbar.open('Debes agregar un título', 'Agrega algún título',{
        duration: 3000
      })
      this.guardar = false;
      return;
    }
    if(this.gasto.fecha == null ){
      this.snackbar.open('Debes agregar una fecha', 'Agrega agregar una fecha',{
        duration: 3000
      })
      this.guardar = false;
      return;
    }
    if(this.gasto.mes == null ){
      this.gasto.mes = 12;
    }
    if(this.gasto.valorReal == null || this.gasto.valorReal == 0){
      this.snackbar.open('Debes agregar un valor', 'Agrega un valor real',{
        duration: 3000
      })
      this.guardar = false;
      return;
    }
    
    if(this.guardar == true){
      this.gasto.mes = this.mesSelected;
      this.gastoService.agregarGasto(this.gasto).subscribe(
        (dato:any) => {
          this.gasto.titulo = '';
          this.gasto.fecha = '';
          this.gasto.valorReal = 0;
          this.gasto.valorEsperado = 0;
          this.gasto.descripcion = '';
          Swal.fire("Agregado correctamente", "Gasto agregado", 'success');
          this.router.navigate(["user/pagos"])
        }, (error) => {
          console.log(error);
          Swal.fire("Error al guardar", "Error del servidor", 'error');
        } 
      )
    }
  }
}
