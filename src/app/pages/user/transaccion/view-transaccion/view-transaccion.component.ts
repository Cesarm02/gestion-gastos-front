import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CuentaService } from 'src/app/services/cuenta.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-transaccion',
  templateUrl: './view-transaccion.component.html',
  styleUrls: ['./view-transaccion.component.css']
})
export class ViewTransaccionComponent implements OnInit {

  transacciones:any;
  cuentaSelected: any = null;
  cuentas: any = [];
  categoriaSelected: any = null;
  categorias: any = [];
  showComponent = false;

  constructor(private snackbar:MatSnackBar, private categoriaService:CategoriaService, private transaccionService: TransaccionService, private cuentaService:CuentaService) { }

  ngOnInit(): void {
    this.cuentaService.obtenerCuentas().subscribe(
      (dato) => {
        this.cuentas = dato;
      }, (error) => {
        Swal.fire("Error al obtener las cuentas", "Error del servidor", 'error');
      }
    );  

    this.categoriaService.listarCategorias().subscribe(
      (dato) => {
        this.categorias = dato;
      }, (error) => {
        Swal.fire("Error al obtener categorias", "Error del sistema", 'error')
      }
    )
  }

  public formSubmit(){
    this.showComponent = false;

    if(this.categoriaSelected == null && this.cuentaSelected == null){
      this.snackbar.open('Debes seleccionar una categoria o una cuenta', 'Selecciona algún dato',{
        duration: 3000
      })
      return;
    }

    if(this.categoriaSelected == null && this.cuentaSelected != null){
      this.transaccionService.obtenerPorCuenta(this.cuentaSelected).subscribe(
        (dato:any) => {
          if(dato[0] == null){
            Swal.fire('No hay datos en esta cuenta', "No hay datos en esta cuenta", 'error')
          }else{
            this.transacciones = dato;
            this.toggleComponent();
          }
        }, (error) => {
          Swal.fire('Error al generar las transacciones por cuenta', "Error del sistema", 'error')
        }
      )
    }

    if(this.categoriaSelected != null && this.cuentaSelected == null){
      this.transaccionService.obtenerPorCategoria(this.categoriaSelected).subscribe(
        (dato:any) => {
          if(dato[0] == null){
            Swal.fire("No hay datos en esta categoria", "No hay datos en esta cuenta", 'error');
          }else{
            this.transacciones = dato;
            this.toggleComponent();
          }
        }, (error) => {
          Swal.fire('Error al generar las transacciones por categoria', "Error del sistema", 'error')
        }
      )
    }

    if(this.categoriaSelected != null && this.cuentaSelected != null){
      this.transaccionService.obtenerPorCuentaCategoria(this.cuentaSelected, this.categoriaSelected).subscribe(
        (dato:any) => {
          if(dato[0] == null){
            Swal.fire("No hay datos con esa cuenta y categoria", "Error del sistema", 'error')
          }else{
            this.transacciones = dato;
            this.toggleComponent();
          }
        }, (error) => {
          Swal.fire("Error al generar las transacciones", "Error del sistema", 'error');
        }
      )
    }


  }

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  reloadPage(){
    window.location.reload();
  }
}
