import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CuentaService } from 'src/app/services/cuenta.service';
import { LogService } from 'src/app/services/log.service';
import { PlanAhorroService } from 'src/app/services/plan-ahorro.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-inicio-user',
  templateUrl: './inicio-user.component.html',
  styleUrls: ['./inicio-user.component.css'],
})
export class InicioUserComponent implements OnInit {

  //Graficas
  view: [number, number] = [1000, 500];
  cuentasGraficas:any = [];
  
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;


  cuentas:any;
  categorias:any;
  simulaciones:any;
  errores:any;
  
  constructor(
    private cuentaService:CuentaService,
    private categoriaService:CategoriaService,
    private simulacionService:PlanAhorroService,
    private logService:LogService
    ) { this.view = [innerWidth / 1.3, 400];}

  ngOnInit(): void {
    window.addEventListener('resize', this.onResize.bind(this));
    this.cuentaService.obtenerCuentas().subscribe(
      (dato:any) => {
        this.cuentas = dato.length;
        this.cuentasGraficas = dato.map((item: any) => {
          return { "name": "N. Cuenta: " + item.cuentaId, "value": item.totalCuenta };
        });
      }, (error) => {
        console.log(error);
      }
    )
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato.length ;
      }, (error) => {
        console.log(error);
      }
    )
    this.simulacionService.historico().subscribe(
      (dato:any) => {
        this.simulaciones = dato.length ;
      }, (error) => {
        console.log(error);
      }    
    )
    
    this.logService.obtenerUsuario().subscribe(
      (dato:any) => {
        this.errores = dato.length ;
      }, (error) => {
        console.log(error);
      }
    )
  }

  //Graficas
 
  onResize(event:any) {
    const windowWidth = event.target.innerWidth;
    const chartWidth = windowWidth > 992 ? windowWidth : windowWidth * 0.5;
    this.view = [chartWidth, 400];
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }
}
