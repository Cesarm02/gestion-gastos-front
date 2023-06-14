import { Component, OnInit } from '@angular/core';
import { PlanAhorroService } from 'src/app/services/plan-ahorro.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  historico:any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private historicoService:PlanAhorroService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 12,
      order: [[5, 'desc']],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json',
      }
    };

    this.historicoService.historico().subscribe(
      (dato:any) => {
        this.historico = dato;
        this.dtTrigger.next();
      }, (error) => {
        console.log(error);
        Swal.fire("No se pudo generar historico", "Error del servidor", 'error');
      }
    )
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
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
