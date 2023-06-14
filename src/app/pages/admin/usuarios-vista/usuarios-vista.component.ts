import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-usuarios-vista',
  templateUrl: './usuarios-vista.component.html',
  styleUrls: ['./usuarios-vista.component.css']
})
export class UsuariosVistaComponent implements OnInit {

  usuarios:any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 13,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json',
      }
    };

    this.userService.obtenerTodos().subscribe(
      (dato:any) =>{
        this.usuarios = dato;
        this.dtTrigger.next();
      }, (error) => {
        console.log(error);
        Swal.fire("Error al obtener usuarios", "Error del servidor", 'error');
      }
    )
  }
  public formatearFecha(dato:any){
    const fecha = new Date(dato);
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const hor = fecha.getHours() < 10 ? '0' +fecha.getHours() : fecha.getHours() ;
    const min = fecha.getMinutes() < 10 ? '0'+fecha.getMinutes() : fecha.getMinutes();

    const fechaFormateada = `${dia}/${mes}/${año} ${hor}:${min}`;
    
    return fechaFormateada;
  }
}
