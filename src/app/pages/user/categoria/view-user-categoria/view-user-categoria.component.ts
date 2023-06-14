import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user-categoria',
  templateUrl: './view-user-categoria.component.html',
  styleUrls: ['./view-user-categoria.component.css']
})
export class ViewUserCategoriaComponent implements OnInit {

  categorias:any = [
  ]
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json',
      }
    };

    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato;
        this.dtTrigger.next();
      }, (error) => {
        console.log(error);
        Swal.fire("Error al cargar categorias", "Error del servidor");
      }
    )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
