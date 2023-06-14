import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CuentaService } from 'src/app/services/cuenta.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-transaccion',
  templateUrl: './add-transaccion.component.html',
  styleUrls: ['./add-transaccion.component.css']
})
export class AddTransaccionComponent implements OnInit {

  transaccion:any = {};
  cuentaSelected:any;
  categoriaSelected:any;
  cuentas:any;
  categorias:any;
  guardar = true;

  constructor(
      private router: Router,
      private transaccionService: TransaccionService,
      private cuentaService: CuentaService,
      private categoriaService: CategoriaService,
      private snackbar: MatSnackBar
    ) { }

  ngOnInit(): void {

    this.cuentaService.obtenerCuentas().subscribe(
      (dato:any) => {
        this.cuentas = dato;
        if(dato[0] == null){
          Swal.fire('No hay datos en esta cuenta', "Debes agregar una cuenta primero", 'error')
          this.router.navigate(['user/cuenta-add']);
        }
      }, (error) => {
        Swal.fire("Error al obtener las cuentas", "Error del servidor", 'error');
      }
    );  

    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato;
        if(dato[0] == null){
          Swal.fire('No hay datos en esta categoria', "Debes agregar una categoria primero", 'error')
          this.router.navigate(['user/categoria-add']);
        }
      }, (error) => {
        Swal.fire("Error al obtener categorias", "Error del sistema", 'error')
      }
    )
  }

  formSubmit(){

    if(this.transaccion.valor == null || this.transaccion.valor == 0){
      this.snackbar.open('Debes agregar un valor', 'Agrega algún valor',{
        duration: 3000
      })
      this.guardar = false;
      return;
    }

    if(this.cuentaSelected == null){
      this.snackbar.open('Debes seleccionar una cuenta', 'Selecciona algún dato',{
        duration: 3000
      })
      this.guardar = false;
      return;
    }

    if(this.categoriaSelected == null){
      this.snackbar.open('Debes seleccionar una categoria', 'Selecciona algún dato',{
        duration: 3000
      })
      this.guardar = false;
      return;
    }

    if(this.guardar == true){
      this.transaccion.categoria = this.categoriaSelected;
      this.transaccion.cuenta = this.cuentaSelected;
      this.transaccionService.guardarTransaccion(this.transaccion).subscribe(
        (dato:any) => {
          this.transaccion.descripcion = '';
          this.transaccion.valor = '';
          this.transaccion.cuenta = '';
          this.transaccion.categoria = '';
          Swal.fire("Transaccion agregada", "Guardado correctamente", 'success');
          this.router.navigate(["user/transaccion"])
        }, (error) => {
          console.log(error);
          Swal.fire("Error al guardar", "Error del servidor", 'error')
        }
      )
    }

  }
}
