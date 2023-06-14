import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GastosService } from 'src/app/services/gastos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-gasto',
  templateUrl: './edit-gasto.component.html',
  styleUrls: ['./edit-gasto.component.css']
})
export class EditGastoComponent implements OnInit {

  gasto:any = {};
  gastoId:any;
  gastoEditada:any = {};
  mesSelected:any  = 1;
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
    private router:Router,
    private gastoService:GastosService,
    private snackbar: MatSnackBar,
    private route:ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.gastoId = this.route.snapshot.params['id'];
    this.gasto.agendaGastosId = this.gastoId;

    this.gastoService.obtenerId(this.gastoId).subscribe(
      (dato:any) => {
        this.gasto = dato;
        this.gasto.fecha = this.formatearFechaEditar(this.gasto.fecha);
        this.mesSelected = this.meses.find(mes => mes.mes === dato.mes);
        this.mesSelected = this.mesSelected.id;
      }, (error) => {
        console.log(error);
        Swal.fire("Error al obtener pagos", "Error del servidor", 'error');
      }
    )
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
    this.gastoEditada.id = this.gasto.agendaGastosId;
    this.gastoEditada.titulo = this.gasto.titulo;
    this.gastoEditada.fecha = this.formatearFecha(this.gasto.fecha);
    console.log(this.gastoEditada.fecha)
    this.gastoEditada.valorReal = this.gasto.valorReal;
    this.gastoEditada.valorEsperado = this.gasto.valorEsperado;
    this.gastoEditada.mes = this.mesSelected;
    this.gastoEditada.descripcion = this.gasto.descripcion;

    if(this.guardar == true){
      this.gasto.mes = this.mesSelected;
      this.gastoService.editarGasto(this.gastoEditada).subscribe(
        (dato:any) => {
          this.gasto.titulo = '';
          this.gasto.fecha = '';
          this.gasto.valorReal = 0;
          this.gasto.valorEsperado = 0;
          this.gasto.descripcion = '';
          Swal.fire("Editado correctamente", "Gasto editado", 'success');
          this.router.navigate(["user/pagos"])
        }, (error) => {
          console.log(error);
          Swal.fire("Error al guardar", "Error del servidor", 'error');
        } 
      )
    }
  }

  public formatearFechaEditar(dato:any){
    const fecha = new Date(dato);
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1 ) < 10 ? '0' +(fecha.getMonth()+ 1) : fecha.getMonth()+ 1;
    const dia = fecha.getDate() < 10 ? '0' +fecha.getDate() : fecha.getDate() ;
    const fechaFormateada = `${año}-${mes}-${dia}`;
    return fechaFormateada;
  }

  public formatearFecha(dato:any){
    const fecha = new Date(dato);
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1 ) < 10 ? '0' +(fecha.getMonth()+ 1) : fecha.getMonth()+ 1;
    const dia = fecha.getDate() + 1;

    const fechaFormateada = `${año}-${mes}-${dia}`;
    
    return fechaFormateada;
  }
}
