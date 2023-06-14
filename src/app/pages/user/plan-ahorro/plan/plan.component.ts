import { Component, OnInit } from '@angular/core';
import { PlanAhorroService } from 'src/app/services/plan-ahorro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  meta:any = 0;
  ahorro:any = 0;
  meses:any = 0;
  objetivo:any = '';
  plan:any = {};
  viable = true;

  constructor(private planService:PlanAhorroService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.plan.meta = this.meta;
    this.plan.ahorro = this.ahorro;
    this.plan.meses = this.meses;
    this.plan.objetivo = this.objetivo;

    if(this.meses == null)
      this.meses=0;
    if(this.ahorro == null)
      this.ahorro=0;

    if(this.meses == 0 && this.ahorro == 0 ){
      Swal.fire("Error", "Debes diligenciar los meses o el ahorro por mes")
    }else{
      this.planService.calcular(this.plan).subscribe(
        (dato:any) => {
          if(this.plan.meses > 0){
            this.ahorro = dato;
            Swal.fire("Resultado", "Si quieres ahorrar: " + this.meta + " en " + this.meses + " meses, debes abonar "
            + this.ahorro + " por mes", 'success');
          }else{
            this.meses = dato ;
            Swal.fire("Resultado", "Si vas a ahorrar: " + this.meta + " con cuota de: " + this.ahorro + " por mes"
            + " lograras tu objetivo en " + this.meses + " meses", 'success');
          }
        }, (error) => {
          console.log(error);
          Swal.fire("Se ha presentado un error", "Se ha presentado un error", 'error');
        }
      )
    }

    
  }

}
