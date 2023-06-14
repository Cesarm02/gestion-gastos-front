import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-seccion',
  templateUrl: './titulo-seccion.component.html',
  styleUrls: ['./titulo-seccion.component.css']
})
export class TituloSeccionComponent implements OnInit {
  @Input() nombreTitulo: string ="";
  @Input() linkUrl: string ="";

  constructor() { 

  }

  ngOnInit(): void {
    
  }


}
