import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-titulo-agregar',
  templateUrl: './titulo-agregar.component.html',
  styleUrls: ['./titulo-agregar.component.css']
})
export class TituloAgregarComponent implements OnInit {
  @Input() nombreTitulo: string ="";
  @Input() linkUrl: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
