import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-log-admin',
  templateUrl: './log-admin.component.html',
  styleUrls: ['./log-admin.component.css']
})
export class LogAdminComponent implements OnInit {

 
  logs:any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private logService:LogService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 13,
      order: [[1, 'asc']],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json',
      }
    };

    this.logService.obtenerAdmin().subscribe(
      (dato:any) => {
        this.logs = dato;
        this.dtTrigger.next();
      }, (error) => {
        console.log(error);
        Swal.fire("Error al obtener logs", "Error del servidor", 'error');
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
