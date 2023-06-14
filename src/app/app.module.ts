import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { InicioUserComponent } from './pages/user/inicio-user/inicio-user.component';
import { ViewCuentaComponent } from './pages/user/cuenta/view-cuenta/view-cuenta.component';
import { DataTablesModule } from "angular-datatables";
import { TituloSeccionComponent } from './components/titulo-seccion/titulo-seccion.component';
import { AgregarCuentaComponent } from './pages/user/cuenta/agregar-cuenta/agregar-cuenta.component';
import { TituloAgregarComponent } from './components/titulo-agregar/titulo-agregar.component';
import { EditarCuentaComponent } from './pages/user/cuenta/editar-cuenta/editar-cuenta.component';
import { ViewUserCategoriaComponent } from './pages/user/categoria/view-user-categoria/view-user-categoria.component';
import { AddUserCategoriaComponent } from './pages/user/categoria/add-user-categoria/add-user-categoria.component';
import { ViewTransaccionComponent } from './pages/user/transaccion/view-transaccion/view-transaccion.component';
import { ViewCuentaTransaccionComponent } from './pages/user/cuenta/view-cuenta-transaccion/view-cuenta-transaccion.component';
import { EditCategoriaComponent } from './pages/user/categoria/edit-categoria/edit-categoria.component';
import { AddTransaccionComponent } from './pages/user/transaccion/add-transaccion/add-transaccion.component';
import { VistaTransaccionComponent } from './pages/user/transaccion/vista-transaccion/vista-transaccion.component';
import { ConfirmadorComponent } from './components/confirmador/confirmador.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditTransaciconComponent } from './pages/user/transaccion/edit-transacicon/edit-transacicon.component';
import { PlanComponent } from './pages/user/plan-ahorro/plan/plan.component';
import { HistoricoComponent } from './pages/user/plan-ahorro/historico/historico.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { LogComponent } from './pages/user/logs/log/log.component';
import { ViewGastosComponent } from './pages/user/gastos/view-gastos/view-gastos.component';
import { AddGastoComponent } from './pages/user/gastos/add-gasto/add-gasto.component';
import { EditGastoComponent } from './pages/user/gastos/edit-gasto/edit-gasto.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LogAdminComponent } from './pages/admin/log-admin/log-admin.component';
import { UsuariosVistaComponent } from './pages/admin/usuarios-vista/usuarios-vista.component';
import { BackupComponent } from './pages/admin/backup/backup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriasComponent,
    AddCategoriaComponent,
    SidebarUserComponent,
    InicioUserComponent,
    ViewCuentaComponent,
    TituloSeccionComponent,
    AgregarCuentaComponent,
    TituloAgregarComponent,
    EditarCuentaComponent,
    ViewUserCategoriaComponent,
    AddUserCategoriaComponent,
    ViewTransaccionComponent,
    ViewCuentaTransaccionComponent,
    EditCategoriaComponent,
    AddTransaccionComponent,
    VistaTransaccionComponent,
    ConfirmadorComponent,
    EditTransaciconComponent,
    PlanComponent,
    HistoricoComponent,
    NotFoundComponent,
    HomeAdminComponent,
    LogComponent,
    ViewGastosComponent,
    AddGastoComponent,
    EditGastoComponent,
    LogAdminComponent,
    UsuariosVistaComponent,
    BackupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    DataTablesModule,
    MatSelectModule,
    MatDialogModule,
    NgxChartsModule
  ],
  providers: [ authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
