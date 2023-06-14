import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user-categoria',
  templateUrl: './add-user-categoria.component.html',
  styleUrls: ['./add-user-categoria.component.css']
})
export class AddUserCategoriaComponent implements OnInit {
  categoria:any = {};

  constructor(private router: Router, private categoriaService: CategoriaService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.categoria.titulo.trim() == '' || this.categoria.titulo == null){
      this.snackbar.open('El título es requerido', 'Debes insertar un título',{
        duration:3000
      });
      return;
    }

    this.categoriaService.guardarCategoria(this.categoria).subscribe(
      (dato:any) => {
        this.categoria.titulo='';
        this.categoria.descripcion='';
        Swal.fire("Categoria agregada", 'Guardada exitosamente', 'success');
        this.router.navigate(["/user/categoria"])
      },
      (error) => {
        console.log(error);
        Swal.fire("Error al guardar", "Error al guardar", 'error');
      }
    )
  }
}
