import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any = null;

  constructor(private loggin:LoginService) { }

  ngOnInit(): void {
  
    this.user = this.loggin.getUser();

  }

  shareButton(){
    if (navigator.share) {
      navigator
        .share({
          title: 'Proyecto de gestión de dinero',
          text: 'Sistema de información para la gestión y control de gastos en los jóvenes ',
          url: 'http://localhost:4200/'
          //Cambiar esta url en ambiente web
        })
        .then(() => console.log('Página compartida exitosamente.'))
        .catch((error) => console.log('Error al compartir:', error));
    } else {
      console.log('El navegador no admite la función de compartir.');
    }
  }

}
