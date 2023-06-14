import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  categoria = {
    titulo: '',
    descripcion : ''
  }

  constructor(private router: Router, private categoriaService: CategoriaService, private snackback:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.categoria.titulo.trim() == '' || this.categoria.titulo == null){
      this.snackback.open('El título es requerido', 'Debes insertar un título',{
        duration:3000
      });
      return;
    }

    this.categoriaService.guardarCategoria(this.categoria).subscribe(
      (dato:any) => {
        this.categoria.titulo='';
        this.categoria.descripcion='';
        Swal.fire("Categoria agregada", 'Guardada exitosamente', 'success');
        this.router.navigate(["/admin/categorias"])
      },
      (error) => {
        console.log(error);
        Swal.fire("Error al guardar", "Error al guardar", 'error');
      }
    )
  }

}
