import { Component, OnInit, Input, SimpleChanges,ViewChild   } from '@angular/core';
import { Subject } from 'rxjs';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { ConfirmadorComponent } from 'src/app/components/confirmador/confirmador.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-transaccion',
  templateUrl: './vista-transaccion.component.html',
  styleUrls: ['./vista-transaccion.component.css']
})
export class VistaTransaccionComponent implements OnInit {

  @Input() transacciones: any ;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private transaccionService:TransaccionService, public dialog: MatDialog, private router:Router) { }

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

  
  eliminarTransaccion(transaccionId:any){
    const dialogRef = this.dialog.open(ConfirmadorComponent, {
      width: '400px',
      data: { message: '¿Deseas eliminar esta transaccion, id: ' + transaccionId }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'si') {
        this.transaccionService.eliminarTransaccion(transaccionId).subscribe(
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
