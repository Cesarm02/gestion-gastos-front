import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

  salir(){
    this.login.logoutSesion();
    window.location.reload();
  }
}
