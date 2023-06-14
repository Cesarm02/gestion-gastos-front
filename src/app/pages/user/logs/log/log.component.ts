import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logs:any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private logService:LogService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [[0, 'desc']],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json',
      }
    };

    this.logService.obtenerUsuario().subscribe(
      (dato:any) => {
        this.logs = dato;
        this.dtTrigger.next();
      }, (error) => {
        console.log(error);
        Swal.fire("Error en la busqueda", "Error del servidor", 'error');
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
