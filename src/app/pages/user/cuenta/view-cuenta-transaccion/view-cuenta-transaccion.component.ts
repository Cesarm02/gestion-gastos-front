import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuentaService } from 'src/app/services/cuenta.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-cuenta-transaccion',
  templateUrl: './view-cuenta-transaccion.component.html',
  styleUrls: ['./view-cuenta-transaccion.component.css']
})
export class ViewCuentaTransaccionComponent implements OnInit {

  cuenta:any = {};
  cuentaId: any;
  transacciones:any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private transaccionService: TransaccionService, private cuentaService: CuentaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json',
      }
    };

    this.cuentaService.obtenerCuentaPorId
    this.cuentaId = this.route.snapshot.params['id'];

    this.cuentaService.obtenerCuentaPorId(this.cuentaId).subscribe(
      (dato:any) => {
        this.cuenta = dato;
      }, (error) => {
        console.log(error);
        Swal.fire("Error al cargar la cuenta", "Error del sistema");
      }
    );
    
    this.transaccionService.obtenerPorCuenta(this.cuentaId).subscribe(
      (dato:any) => {
        this.transacciones = dato;
        this.dtTrigger.next();
      }, (error) => {
        console.log(error);
        Swal.fire("Error al cargar las transacciones", "Error del sistema");
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
