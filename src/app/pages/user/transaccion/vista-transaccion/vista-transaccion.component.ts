import { Component, OnInit, Input, SimpleChanges,ViewChild   } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vista-transaccion',
  templateUrl: './vista-transaccion.component.html',
  styleUrls: ['./vista-transaccion.component.css']
})
export class VistaTransaccionComponent implements OnInit {

  @Input() transacciones: any ;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor() { }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json',
      }
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dtTrigger.next();
  }

  public formatearFecha(dato:any){
    const fecha = new Date(dato);
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const hor = fecha.getHours();
    const min = fecha.getMinutes();

    const fechaFormateada = `${dia}/${mes}/${año} ${hor}:${min}`;
    
    return fechaFormateada;
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
