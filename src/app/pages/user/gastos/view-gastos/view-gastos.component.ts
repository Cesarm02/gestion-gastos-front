import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ConfirmadorComponent } from 'src/app/components/confirmador/confirmador.component';
import { GastosService } from 'src/app/services/gastos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-gastos',
  templateUrl: './view-gastos.component.html',
  styleUrls: ['./view-gastos.component.css']
})
export class ViewGastosComponent implements OnInit {

  gastos:any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(public dialog: MatDialog, private router:Router, private gastoService: GastosService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [[0, 'desc']],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json',
      }
    };
    
    this.gastoService.obtenerAll().subscribe(
      (dato:any) => {
        this.gastos = dato;
        this.dtTrigger.next();
      }, (error) => {
        console.log(error);
        Swal.fire("Error al obtener pagos", "Error del servidor", 'error');
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
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  eliminarTransaccion(pagoId:any){
    const dialogRef = this.dialog.open(ConfirmadorComponent, {
      width: '400px',
      data: { message: '¿Deseas eliminar este pago, id: ' + pagoId }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'si') {
        this.gastoService.eliminarGasto(pagoId).subscribe(
          (dato:any) => {
            Swal.fire("Eliminado correctamente", "Eliminado correctamente", 'success').then(() => {
              setTimeout(() => {
                window.location.reload();
              }, 300);
            });
          }, (error) => {
              Swal.fire("Eliminado correctamente", "Eliminado correctamente", 'success').then(() => {
                setTimeout(() => {
                  window.location.reload();
                }, 300); 
              });
            },
        )
      }
    });

  }

}
