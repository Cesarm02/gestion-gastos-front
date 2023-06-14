import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';
import { CuentaService } from 'src/app/services/cuenta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-cuenta',
  templateUrl: './view-cuenta.component.html',
  styleUrls: ['./view-cuenta.component.css']
})
export class ViewCuentaComponent implements OnDestroy, OnInit {

  cuentas:any = [
  ]

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private cuentaService: CuentaService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json',
      }
    };

    this.cuentaService.obtenerCuentas().subscribe(
      (data:any) => {
        this.cuentas = data;
        this.dtTrigger.next();
      }, (error) => {
        console.log(error);
        Swal.fire('Error al cargar las cuentas', 'error');
      }
    )

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
