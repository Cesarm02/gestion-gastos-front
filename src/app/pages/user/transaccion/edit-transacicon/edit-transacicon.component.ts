import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CuentaService } from 'src/app/services/cuenta.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-transacicon',
  templateUrl: './edit-transacicon.component.html',
  styleUrls: ['./edit-transacicon.component.css']
})
export class EditTransaciconComponent implements OnInit {
  transaccion:any = {};
  cuentaSelected:any;
  categoriaSelected:any;
  cuentas:any;
  categorias:any;
  editar = true;
  transaccionId: any;
  transaccionEditada:any = {};

  constructor(
      private transaccionService: TransaccionService,
      private router:Router,
      private cuentaService: CuentaService,
      private categoriaService: CategoriaService,
      private snackbar: MatSnackBar,
      private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.transaccionId = this.route.snapshot.params['id'];

    this.transaccionService.obtenerPorId(this.transaccionId).subscribe(
      (dato:any) => {
        this.transaccion = dato;
        this.transaccion.id = dato.transaccionId;
        this.cuentaSelected = dato.cuenta.cuentaId;
        this.categoriaSelected = dato.categoria.categoriaId;
      }, (error) =>{
        console.log(error);
        Swal.fire("Error al obtener la transaccion", "Error del servidor", 'error');
      }
    )
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
      this.editar = false;
      return;
    }
    if(this.cuentaSelected == null){
      this.snackbar.open('Debes seleccionar una cuenta', 'Selecciona algún dato',{
        duration: 3000
      })
      this.editar = false;
      return;
    }

    if(this.categoriaSelected == null){
      this.snackbar.open('Debes seleccionar una categoria', 'Selecciona algún dato',{
        duration: 3000
      })
      this.editar = false;
      return;
    }

    if(this.editar == true){
      this.transaccionEditada.id = this.transaccionId;
      this.transaccionEditada.descripcion = this.transaccion.descripcion;
      this.transaccionEditada.valor = this.transaccion.valor;
      this.transaccionEditada.cuenta = this.cuentaSelected;
      this.transaccionEditada.categoria = this.categoriaSelected;

      this.transaccionService.actualizarTransaccion(this.transaccionEditada).subscribe(
        (dato:any) => {
          this.transaccion.descripcion = '';
          this.transaccion.valor = '';
          this.transaccion.cuenta = '';
          this.transaccion.categoria = '';
          this.transaccion.id = '';
          Swal.fire("Transaccion editada", "Edición correctamente", 'success');
          this.router.navigate(["user/transaccion"])
        }, (error) => {
          console.log(error);
          Swal.fire("Error al editar", "Error del servidor", 'error')
        }
      )
    }

  }
}
