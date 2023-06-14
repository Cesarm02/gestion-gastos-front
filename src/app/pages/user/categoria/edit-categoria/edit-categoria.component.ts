import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria:any = {};
  categoriaId:any;
  categoriaEditada:any = {};
  selectedOption:any;

  constructor(private router:Router, private categoriaService:CategoriaService, private route: ActivatedRoute, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.categoriaId = this.route.snapshot.params['id'];
    this.categoria.id = this.categoriaId;

    this.categoriaService.obtenerCategoria(this.categoriaId).subscribe(
      (dato:any) => {
        this.categoria = dato;
        this.selectedOption = dato.estado;
        this.categoriaEditada.estado = this.selectedOption;
      }, (error) => {
        console.log(error);
        Swal.fire("Error al obtener la categoria", "Error del servidor");
      }
    );

  }

  formSubmit(){
    if(this.categoria.titulo.trim() == '' || this.categoria.titulo == null){
      this.snackbar.open('El título es requerido', 'Debes insertar un título',{
        duration:3000
      });
      return;
    }

    this.categoriaEditada.titulo = this.categoria.titulo;
    this.categoriaEditada.descripcion = this.categoria.descripcion;
    this.categoriaEditada.estado = this.selectedOption;
    this.categoriaEditada.id = this.categoria.categoriaId;

    this.categoriaService.editarCategoria(this.categoriaEditada).subscribe(
      (dato) => {
        this.categoria.titulo = '';
        this.categoria.descripcion = '';
        Swal.fire("Categoria modificada", "Modificada correctamente", "success");
        this.router.navigate(["/user/categoria"]);
      },(error) => {
        console.log(error);
        Swal.fire("Error al modificar", "Error del sistema", 'error');
      }
    )

  }
}
